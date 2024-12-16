import { ClipboardList, Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { ToastContainer } from "react-toastify";

export function TripDetails() {

  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] = useState(false)
  // const userId = localStorage.getItem("userId")

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true)
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false)
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8 bg-pattner bg-no-repeat bg-center">

      <ToastContainer />

      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">

        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h2 className="text-3xl font-semibold">Atividades</h2>
              <ClipboardList className="ml-2"/>
            </div>
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