import { Mail, User, X } from "lucide-react"
import { FormEvent } from "react"
import { Button } from "../../components/button"

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
  destination: string
  starts_at: Date | null
  ends_at: Date | null
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
  setOwnerEmail,
  setOwnerName,
  destination,
  starts_at,
  ends_at
}: ConfirmTripModalProps) {

  return (
    <div className='fixed inset-0 bg-black/60 flex items-center justify-center'>
      <div className='w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between'>
            <h2 className='text-lg font-semibold'>Confirmar criação de viagem</h2>
            <button type='button' onClick={closeConfirmTripModal}>
              <X className='size-5 text-zinc-400' />
            </button>
          </div>
          <p className='text-sm text-zinc-400'>
            Para concluir a criação da viagem para <span className='font-semibold text-zinc-100'>{destination}</span> nas datas <span className='font-semibold text-zinc-100'>
              {starts_at ? starts_at.toLocaleDateString() : "Data inicial não definida"} até {ends_at ? ends_at.toLocaleDateString() : "Data final não definida"}
            </span> preencha os seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3" >

          <div className='h-14 px-4 border border-zinc-800 bg-zinc-950 rounded-lg flex items-center gap-2'>
            <User className='text-zinc-400 size-5' />
            <input
              type="text"
              name='name'
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              onChange={event => setOwnerName(event.target.value)}
            />
          </div>

          <div className='h-14 px-4 border border-zinc-800 bg-zinc-950 rounded-lg flex items-center gap-2'>
            <Mail className='text-zinc-400 size-5' />
            <input
              type="email"
              name='owner_email'
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              onChange={event => setOwnerEmail(event.target.value)}
            />
          </div>

          <div className='space-y-2'>
            <p className='text-center text-lg text-zinc-400'>
              Ao clicar em <span className='font-semibold text-zinc-100'>"Confirmar criação da viagem"</span> será enviado um link de confirmação ao email preenchido.
            </p>
          </div>

          <Button type="submit" variant="primary" size="full" >
            Confirmar criação da viagem
          </Button>

        </form>
      </div>
    </div>
  )
}