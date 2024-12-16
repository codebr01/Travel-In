import { MapPin, Calendar, Settings2, ChevronLeft } from "lucide-react";
import { Button } from "../../components/button";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { format } from "date-fns";

interface Trip {
  id: string
  destination: string
  starts_at: string
  ends_at: string
  is_confirmed: boolean
}

export function DestinationAndDateHeader() {

  const { tripId } = useParams()
  const [trip, setTrip] = useState<Trip | undefined>()
  const navigate = useNavigate();

  useEffect(() => {
    api.get(`/trips/${tripId}`).then(response => setTrip(response.data.trip))
  }, [tripId])

  const displayedDate = trip
    ? format(trip.starts_at, "d' de 'LLL").concat(' até ').concat(format(trip.ends_at, "d' de 'LLL"))
    : null

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div>
        <button
          className="py-2 w-[70px] rounded-lg px-3 font-medium flex items-center justify-center gap-2 bg-lime-300 text-lime-950 hover:bg-lime-400"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft />
        </button>
      </div>
      <div className="flex items-center justify-start">
        <div className="flex items-center gap-2 mr-10">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-lg text-zinc-100">{trip?.destination}</span>
        </div>

        <div className="flex items-center gap-2 mr-10">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-lg text-zinc-100">{displayedDate}</span>
          </div>

          {/* <div className='w-px h-6 bg-zinc-800' /> */}

          {/* <Button variant="secundary"
          disabled={true}
        >
          Alterar local/data
          <Settings2 className='size-5' />
        </Button> */}
        </div>
      </div>
    </div>
  )
}