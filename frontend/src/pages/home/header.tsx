import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo1.png';

export function Header() {

  const navigate = useNavigate();

  function handleLogin() {
    navigate('/login')
  }

  return (

    <header className="header">
      <div className="logo"><img src={logo} alt="logo" /></div>
      <nav className="nav">
        <div className="nav-item"><a href="/">Início</a></div>
        <div className="nav-item"><a href="/sobre">Sobre nós</a></div>
        <div className="nav-item"><a href="/contato">Contato</a></div>
        <div className="button bg-lime-300 text-lime-950 hover:bg-lime-400" onClick={handleLogin} >Login</div>
      </nav>
    </header>

  )
}