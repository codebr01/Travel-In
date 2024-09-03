import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

export function ImportantLinks() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center justify-center gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnb
            </span>
            <a href="#" className="block font-xs text-zinc-400 truncate hover:text-zinc-200">
              https://www.airbnb.com.br/rooms/23412342341234132412341324123412
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5" />
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="space-y-1.5 flex-1">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnb
            </span>
            <a href="#" className="block font-xs text-zinc-400 truncate hover:text-zinc-200">
              https://www.airbnb.com.br/rooms/23412342341234132412341324123412
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5" />
        </div>

      </div>

      <Button variant="secundary" size="full" >
        <Plus className='size-5' />
        Cadastrar novo link
      </Button>
    </div>
  )
}