import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";
import { useEffect, useState } from "react";
import { CreateLinkModal } from "./create-link-modal";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface Links {
  id: string;
  title: string;
  url: string;
  trip_id: string;
}

export function ImportantLinks() {

  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false)
  const [links, setLinks] = useState<Links[]>([])
  const { tripId } = useParams()

  useEffect(() => {
    api.get(`/trips/${tripId}/links`).then(response => setLinks(response.data.links))
  }, [tripId])

  function openCreateLinkModal() {
    setIsCreateLinkModalOpen(true)
  }

  function closeCreateLinkModal() {
    setIsCreateLinkModalOpen(false)
  }

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>

      <div className="space-y-5">
        {links.length > 0 ? (
          links.map((link) => (
            <div key={link.id} className="flex items-center justify-center gap-4">
              <div className="space-y-1.5 flex-1">
                <span className="block font-medium text-zinc-100">{link.title}</span>
                <a
                  href={link.url}
                  className="block font-xs text-zinc-400 truncate hover:text-zinc-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.url}
                </a>
              </div>
              <Link2 className="text-zinc-400 size-5" />
            </div>
          ))
        ) : (
          <p className="text-zinc-400 text-center">Nenhum link cadastrado ainda.</p>
        )}
      </div>

      <Button variant="secundary" size="full" onClick={openCreateLinkModal}>
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>

      {isCreateLinkModalOpen && (
        <CreateLinkModal closeCreateLinkModal={closeCreateLinkModal} />
      )}
    </div>
  );
}