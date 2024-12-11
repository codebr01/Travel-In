import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Button } from '../../components/button';
import { api } from '../../lib/axios';
import { ArrowLeftCircleIcon } from 'lucide-react';

export function RegisterPage() {

  const navigate = useNavigate()

  async function createUser(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const name = data.get('name')?.toString();
    const email = data.get('email')?.toString();
    const password = data.get('password')?.toString();

    try {
      const response = await api.post('/register', {
        user_name: name,
        user_email: email,
        user_password: password
      });

      const { userId } = response.data;

      toast.success('Usuário registrado com sucesso!');

      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        toast.error(error.response.data.message || 'Erro ao registrar o usuário');
      } else {
        toast.error('Erro inesperado. Tente novamente mais tarde.');
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-zinc-950">
      <ToastContainer />
      <div className="w-full max-w-md p-8 space-y-6 bg-zinc-800 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-semibold">Cadastro</h2>
        <form onSubmit={createUser} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-300">
              Nome
            </label>
            <input
              type="text"
              name='name'
              className="w-full px-3 py-2 mt-1 border border-gray-300 text-zinc-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite seu nome"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300">
              Email
            </label>
            <input
              type="email"
              name='email'
              className="w-full px-3 py-2 mt-1 border border-gray-300 text-zinc-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite seu email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300">
              Senha
            </label>
            <input
              type="password"
              name='password'
              className="w-full px-3 py-2 mt-1 border border-gray-300 text-zinc-800 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <Button type="submit" variant="primary" size="full" >
            Cadastrar
          </Button>
        </form>
        <p className="text-sm text-center text-gray-300">
          Já tem uma conta? <a href="/login" className="text-lime-200 underline">Faça login</a>
        </p>
        <div>
          <a
            className="flex items-center gap-2 text-sm text-lime-200 hover:text-lime-600 underline"
            href="/"
          >
            <ArrowLeftCircleIcon />
            Voltar
          </a>
        </div>
      </div>
    </div>
  );
};
