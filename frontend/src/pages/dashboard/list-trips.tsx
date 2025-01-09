import { Map, MapPin, Plane } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Trip {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
}

interface ListTripsProps {
  trips: Trip[];
  formatarData: (date: string) => string;
}

export function ListTrips({
  trips,
  formatarData
}: ListTripsProps) {

  const [showTooltip, setShowTooltip] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-2 flex items-center">
        <h2 className="text-2xl font-semibold text-white">Suas Viagens
        </h2>
        <Plane className="ml-2" />
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-[#121212] p-1 w-auto rounded-md border border-[#222222] max-w-xs"
          >
            <div className="flex flex-col items-center p-2 max-w-xs justify-between">
              <div className="m-1 flex flex-col items-center justify-center w-full"
                onClick={() => setShowTooltip(!showTooltip)}
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
              >
                <div className="group relative">
                  <span className="absolute left-0 right-0 bottom-11 hidden group-hover:block bg-[#121212] text-white text-sm p-2 rounded shadow-lg border border-white max-w-[300px] text-center">
                    Viagem para {trip.destination}
                  </span>
                  <h3 className="text-lg text-white text-center font-semibold mb-2 overflow-hidden whitespace-nowrap text-ellipsis max-w-[200px]">
                    Viagem para {trip.destination}
                  </h3>
                </div>

              </div>

              <div>
                <p className="text-white mb-2">
                  <strong>Data:</strong> {formatarData(trip.starts_at)} até{" "}
                  {formatarData(trip.ends_at)}
                </p>
              </div>

              <div className="flex items-center">
                <button
                  onClick={() => navigate(`/trips/${trip.id}`)}
                  className="bg-lime-300 text-lime-950 hover:bg-lime-400 py-2 px-4 rounded-md text-center text-sm transition duration-300 flex items-center"
                >
                  <Map className="mr-2 size-5" />
                  Ver Detalhes
                </button>
              </div>

            </div>
          </div>
        ))}
      </div >
    </>
  );
}
