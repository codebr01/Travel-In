import { CheckCircle2, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState, FormEvent } from "react";
import { api } from "../../lib/axios";
import { ChangeParticipantsModal } from "./change-participants";


interface Participant {
  id: string
  name: string | null
  email: string
  is_confirmed: boolean
}

export function Guests() {

  const { tripId } = useParams()
  const [isGuestsModalOpen, setIsGuestsModalOpen] = useState(false)
  const [participants, setParticipants] = useState<Participant[]>([])
  const [emailsToInvite, setEmailsToInvite] = useState<string[]>([])

  useEffect(() => {
    api.get(`/trips/${tripId}/participants`).then(response => {
      setParticipants(response.data.participants);
      const emails = response.data.participants.map((participant: Participant) => participant.email);
      setEmailsToInvite(emails);
    });
  }, [tripId])

  function openGuestsModel() {
    setIsGuestsModalOpen(true)
  }

  function closeGuestsModel() {
    setIsGuestsModalOpen(false)
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {

    event.preventDefault()

    const data = new FormData(event.currentTarget)
    const email = data.get('email')?.toString()

    if (!email) {
      return
    }

    if (emailsToInvite.includes(email)) {
      return
    }

    setEmailsToInvite([
      ...emailsToInvite, email
    ])

    event.currentTarget.reset()
  }

  function removeEmailFromInvites(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(email => email !== emailToRemove)

    setEmailsToInvite(newEmailList)
  }

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">

        {participants.map((participant, index) => {
          return (
            <div key={participant.id} className="flex items-center justify-center gap-4">
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium text-zinc-100">
                  {participant.name ?? `Convidado ${index}`}
                </span>
                <span className="block font-sm text-zinc-400 truncate">
                  {participant.email}
                </span>
              </div>
              {participant.is_confirmed ? (
                <CheckCircle2 className="text-green-400 size-5 shrink-0" />
              ) : (
                <CircleDashed className="text-zinc-400 size-5" />
              )}
            </div>
          )
        })}

      </div>

      <Button variant="secundary" onClick={openGuestsModel} size="full" >
        <UserCog className='size-5' />
        Gerenciar convidados
      </Button>

      {isGuestsModalOpen && (
        <ChangeParticipantsModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestsModel={closeGuestsModel}
          removeEmailFromInvites={removeEmailFromInvites}
        />
      )}

    </div>
  )
}
