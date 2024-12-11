import { useNavigate, useParams } from 'react-router-dom';
import avatar from '../../assets/user.jpg';
import { api } from '../../lib/axios';
import { useEffect, useState } from 'react';

// Interface para tipagem do objeto de viagem
interface Trip {
  id: string; // ID da viagem
}

export function Dashboard() {
  const { userId } = useParams();
  const navigate = useNavigate()
  const [trips, setTrips] = useState<Trip[]>([]); // Tipagem do estado como um array de objetos `Trip`

  useEffect(() => {
    api.get(`/dashboard/${userId}`).then((response) => {
      setTrips(response.data.trips); // Certifique-se de que o retorno corresponde à interface Trip
    });
  }, [userId]);

  return (
    <main className="">
      <div className="container mx-auto flex gap-9 mt-10 px-[75px]">
        {/* Sidebar */}
        <div className="flex-1 bg-[#333] text-white p-5 rounded-lg shadow-md text-center ">
          <img
            className="bg-cover bg-center w-[200px] h-[200px] rounded-[50%] mx-auto"
            src={avatar}
            alt="Avatar"
          />
          <h2 className="text-xl mt-5 mb-4 font-semibold">Bem-vindo, André</h2>
          <p className="mb-5">Gerencie seu perfil e suas viagens aqui.</p>
          <a
            href="#"
            className="bg-[#007bff] text-white py-2 px-4 rounded-md text-sm hover:bg-[#0056b3] transition duration-300"
          >
            Editar Perfil
          </a>

          <a
            href="#"
            className="bg-lime-600 ml-[10px] text-white py-2 px-4 rounded-md text-sm hover:bg-lime-700 transition duration-300 mt-4"
          >
            Sair
          </a>
        </div>

        {/* Trips Section */}
        <div className="flex-2 bg-[#333] p-5 rounded-lg shadow-md">
          <h2 className="text-xl text-white mb-5 font-semibold">Suas Viagens</h2>
          <div className="no-trips">
            <p className="no-trips-message">Você ainda não tem viagens programadas. Que tal começar uma agora?</p>
            <button onClick={() => navigate(`/${userId}/trip/create`)} className="bg-[#28a745] text-white py-2 px-4 mb-3 mt-3 rounded-md text-sm hover:bg-[#1e7c34] transition duration-300" id="add-trip-btn">Cadastrar Viagem</button>
          </div>
          {/* No Trips Message */}
          <div className="grid grid-cols-3 gap-4">
            {
              trips.map((trip) => (
                <div
                  key={trip.id}
                  className="bg-[#121212] p-1 rounded-md border border-[#222222]"
                >
                  <h3 className="text-lg text-white mb-2">
                    Viagem para DESTINO
                  </h3>
                  <p className="text-white mb-2">
                    <strong>Data:</strong> DATA
                  </p>
                  <p className="text-white mb-2">
                    <strong>Participantes:</strong> COUNT DE PARTICPANTS
                  </p>
                  <a
                    href={`/trips/${trip.id}`}
                    className="bg-[#28a745] text-white py-2 px-4 rounded-md text-sm hover:bg-[#1e7c34] transition duration-300"
                  >
                    Ver Detalhes
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  );
}
