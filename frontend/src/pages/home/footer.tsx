import logo from '../../assets/logo1.png';

export function Footer() {
  return (
    <footer className="flex items-center justify-center footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo Trip Planner" />
      </div>
      <div className="footer-links">
        <div className="link"></div>
        <div className="link"></div>
        <div className="link"></div>
      </div>
      <div className="footer-icons">
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
      </div>
    </footer>
  )
}