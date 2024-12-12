import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { api } from '../../lib/axios';
import { toast, ToastContainer } from "react-toastify";
import './styles.css';
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";
import { Sections } from "./sections";

export function HomePage() {

  // const [isAuthenticated, setIsAuthenticated] = useState(true);

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId")

  const navigate = useNavigate();

  useEffect(() => {
    const validToken = async () => {

      const response = await api.post("/validate", { token });
      const isValid = response.data.valid;

      console.log(response.data.message)

      if (isValid) {
        // setIsAuthenticated(true);
        navigate(`/dashboard/${userId}`)
      } else {
        toast.error(`${response.data.message}`)
      }
    };
    validToken();
  }, [navigate, token]);

  return (
    <div>

      <ToastContainer />

      <Header />

      <Main />

      <Sections />

      <Footer />

    </div>
  );
}