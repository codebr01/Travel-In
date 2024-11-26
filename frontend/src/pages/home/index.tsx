import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export function HomePage() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {

    if (token) {

      setIsAuthenticated(true)

    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Login realizado com sucesso...</h1>
        </div>
      ) : (
        <h1>Redirecionando para o login...</h1>
      )}
    </div>
  );
}
