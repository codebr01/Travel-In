import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { api } from '../../lib/axios';
import { toast, ToastContainer } from "react-toastify";
import './styles.css';
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";
import { Sections } from "./sections";

export function HomePage() {

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  useEffect(() => {
    const validToken = async () => {
      try {
        if (!token) {
          setIsAuthenticated(false);
          navigate('/');
          return;
        }

        const response = await api.post("/validate", { token });
        const isValid = response.data.valid;

        if (isValid) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          toast.error(`${response.data.message}`);
          setTimeout(() => {
            navigate('/');
          }, 2000);
        }
      } catch (error) {
        setIsAuthenticated(false);
        navigate('/');
      }
    };
    validToken();
  }, [navigate, token]);

  return (
    <div>
      {isAuthenticated ? (
        <h1>Redirecionando para o darshboard...</h1>
      ) : (
        <div>

          <ToastContainer />

          <Header />

          <Main/>

          <Sections/>

          <Footer/>
          
        </div>
      )}
    </div>
  );
}