import { useNavigate, useParams } from 'react-router-dom';
import { api } from '../../lib/axios';
import { useEffect, useState } from 'react';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { UserInfo } from './user-info';
import { CreateTripInfo } from './create-trip-info';
import { ListTrips } from './list-trips';
import { NoTrips } from './no-trips';
import { ToastContainer } from 'react-toastify';
// import { FeedbackInfo } from './feedback-info';

dayjs.extend(utc);
dayjs.extend(timezone);

interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
}

interface User {
  user_email: string;
  user_id: string;
  user_name: string;
}

export function Dashboard() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [trips, setTrips] = useState<Trip[]>([]);
  const [user, setUser] = useState<User | null>(null);  // Inicializa como null

  useEffect(() => {
    // Carrega as viagens do usuário
    api.get(`/dashboard/${userId}/trips`).then((response) => {
      setTrips(response.data.trips);
    });

    // Carrega os dados do usuário
    api.get(`/users/${userId}`).then((response) => {
      setUser(response.data.user);
    });
  }, [userId]);

  // Formatar a data
  function formatarData(data: string) {
    return dayjs(data).tz("America/Sao_Paulo").format("DD/MM/YYYY");
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate('/');
  }

  // Verifica se o usuário foi carregado, se não, exibe um estado de carregamento
  if (!user || userId === undefined) {
    return (
      <div className="flex justify-center items-center">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center">

      <ToastContainer/>
  
      <div className='flex items-center justify-center mt-20 w-full bg-pattner bg-no-repeat bg-center'>
  
        <div className='flex-shrink-0 '>
          <UserInfo
            user_name={user.user_name}
            logout={logout}
          />
        </div>
  
        <div className='h-full w-20' />
  
        <div className="flex-grow max-w-[600px]">
  
          <div className="flex-1 rounded-lg shadow-md w-full">
  
            {/* <FeedbackInfo /> */}

            <div className="w-full h-px bg-zinc-800" />

            <CreateTripInfo userId={userId} />
  
            <div className="w-full h-px bg-zinc-800" />
  
            {trips.length > 0 ? (
              <>
                <ListTrips trips={trips} formatarData={formatarData} />
              </>
            ) : (
              <>
                <NoTrips />
              </>
            )}
  
          </div>
        </div>
  
      </div>
  
    </div>
  );  

}
