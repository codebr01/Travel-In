import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo1.png';

export function Header() {

  const navigate = useNavigate();

  function handleInicio() {
    navigate('/')
  }

  function handleAboutUs() {
    navigate('/sobre')
  }

  function handleContato() {
    navigate('/contato')
  }

  function handleLogin() {
    navigate('/login')
  }

  return (

    <header className="header">
      <div className="logo"><img src={logo} alt="logo" /></div>
      <nav className="nav">
        <div className="button bg-lime-300 text-lime-950 hover:bg-lime-400" onClick={handleInicio} >Inicio</div>
        <div className="button bg-lime-300 text-lime-950 hover:bg-lime-400" onClick={handleAboutUs} >Sobre nós</div>
        <div className="button bg-lime-300 text-lime-950 hover:bg-lime-400" onClick={handleContato} >Contato</div>
        <div className="button bg-lime-300 text-lime-950 hover:bg-lime-400" onClick={handleLogin} >Login</div>
      </nav>
    </header>

  )
}