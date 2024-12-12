import { MapPin } from "lucide-react";

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
  return (
    <>
      <h2 className="mt-2 text-2xl font-semibold text-white">Suas Viagens</h2>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="bg-[#121212] p-1 w-auto rounded-md border border-[#222222] max-w-xs"
          >
            <div className="flex flex-col items-center p-2 max-w-xs">
              <div className="m-1 flex flex-col items-center justify-center w-full">
                <h3 className="text-lg text-white text-center font-semibold mb-2 overflow-hidden whitespace-nowrap text-ellipsis max-w-xs">
                  Viagem para {trip.destination}
                </h3>
              </div>

              <div>
                <p className="text-white mb-2">
                  <strong>Data:</strong> {formatarData(trip.starts_at)} até{" "}
                  {formatarData(trip.ends_at)}
                </p>
              </div>

              <div className="flex items-center">
                <a
                  href={`/trips/${trip.id}`}
                  className="bg-lime-300 text-lime-950 hover:bg-lime-400 py-2 px-4 rounded-md text-center text-sm transition duration-300 flex items-center"
                >
                  <MapPin className="mr-2 size-5" />
                  Ver Detalhes
                </a>
              </div>

            </div>
          </div>
        ))}
      </div >
    </>
  );
}
