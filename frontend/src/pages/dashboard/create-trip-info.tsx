import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CreateTripInfoProps {
  userId: string
}

export function CreateTripInfo({
  userId,
}: CreateTripInfoProps) {
  
  const navigate = useNavigate()

  return (
    <>
      <h2 className="text-3xl font-semibold text-white">Comece sua viagem</h2>
      <div className="flex items-center gap-3">
        <p className="">Você ainda não tem viagens. <br/> Que tal começar uma agora?</p>
        <div className="flex items-center">
          <button
            onClick={() => navigate(`/${userId}/trip/create`)}
            className="flex items-center bg-lime-300 text-lime-950 hover:bg-lime-400 py-2 px-2 mb-3 mt-3 rounded-md text-sm transition duration-300"
            id="add-trip-btn"
          >
            <Plus className="mr-2 size-5" />
            Criar Viagem
          </button>
        </div>
      </div>
    </>
  )
}