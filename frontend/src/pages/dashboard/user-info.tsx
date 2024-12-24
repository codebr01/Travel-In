import { LucideLogOut, SquareUser, UserPen } from "lucide-react";

interface UnserInfoProps {
  user_name: string
  logout: () => void 
}

export function UserInfo({
  user_name,
  logout
}: UnserInfoProps) {
  return (
    <div className="flex-1 text-white rounded-lg shadow-md text-center">
      <SquareUser className="w-[200px] h-[200px] mx-auto" />
      <h2 className="text-xl mt-5 font-semibold">Bem-vindo</h2>
      <h3 className='text-2xl font-semibold mb-1'>{user_name}</h3>
      {/* <p className="mb-5">Gerencie seu perfil.</p> */}
      <div className="flex items-center gap-4 justify-center">
        {/* <div className="flex items-center">
          <button
            className="flex items-center bg-lime-300 text-lime-950 hover:bg-lime-400 py-2 px-4 rounded-md text-sm transition duration-300"
          >
            <UserPen className="size-5 mr-2" />
            Editar Perfil
          </button>
        </div> */}

        <div className="flex items-center">
          <button
            onClick={logout}
            className="flex items-center bg-zinc-800 text-zinc-200 hover:bg-zinc-700 py-2 px-4 rounded-md text-sm transition duration-300"
          >
            <LucideLogOut className="mr-2 size-5" />
            Sair
          </button>
        </div>
      </div>
    </div>
  )
}