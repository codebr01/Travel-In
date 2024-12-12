import { ArrowLeftCircleIcon, Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { useNavigate } from "react-router-dom";

export function TripDetails() {

  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
  const userId = localStorage.getItem("userId")
  const navigate = useNavigate();


  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8 bg-pattner bg-no-repeat bg-center">


      <DestinationAndDateHeader />

      <div>
        <a
          className="py-2 w-[100px] rounded-lg px-3 font-medium flex items-center justify-center gap-2 bg-lime-300 text-lime-950 hover:bg-lime-400"
          href={`/dashboard/${userId}`}
        >
          <ArrowLeftCircleIcon />
          Voltar
        </a>
      </div>

      <main className="flex gap-16 px-4">

        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button onClick={openCreateActivityModal} className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-centes gap-2 hover:bg-lime-400'>
              <Plus className='size-5' />
              Cadastrar atividade
            </button>
          </div>

          <Activities />

        </div>

        <div className="w-80 space-y-6">

          <ImportantLinks />

          <div className='w-full h-px bg-zinc-800' />

          <Guests />

        </div>

      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  )
}