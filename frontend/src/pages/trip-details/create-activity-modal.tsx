import { Calendar, Tag, X } from "lucide-react"
import { Button } from "../../components/button"
import { FormEvent } from "react"
import { api } from "../../lib/axios"
import { useParams } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void
}

export function CreateActivityModal({
  closeCreateActivityModal
}: CreateActivityModalProps) {

  const { tripId } = useParams()

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)

    const title = data.get('title')?.toString()
    const occurs_at = data.get('occours_at')?.toString()

    try{
      const response = await api.post(`/trips/${tripId}/activities`, {
        title,
        occurs_at
      })
  
      if (response.status === 400) {
        toast.error(response.data.message || 'Erro ao criar a atividade')
        return;
      }

      toast.success('Atividade criada com sucesso!')

      window.document.location.reload()

    }catch(error: any) {
      toast.error(error.response?.data?.message || 'Ocorreu um erro ao criar a atividade.');
    }

  }

  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <ToastContainer autoClose={8000} />
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Cadastrar atividade</h2>
            <button type='button' onClick={closeCreateActivityModal}>
              <X className='size-5 text-zinc-400' />
            </button>
          </div>
          <p className='text-sm text-zinc-400'>
            Todos convidados podem ver as atividades.
          </p>
        </div>

        <form onSubmit={createActivity} className="space-y-3" >

          <div className='h-14 px-4 border border-zinc-800 bg-zinc-950 rounded-lg flex items-center gap-2'>
            <Tag className='text-zinc-400 size-5' />
            <input
              type="text"
              name='title'
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            />
          </div>

          <div className='h-14 flex-1 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2'>
            <Calendar className='text-zinc-400 size-5' />
            <input
              type="datetime-local"
              name="occours_at"
              placeholder="Data e Horário da atividade"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 [color-scheme:dark]"
            />
          </div>

          <Button variant="primary" size="full" >
            Salvar atividade
          </Button>

        </form>
      </div>
    </div>
  )
}