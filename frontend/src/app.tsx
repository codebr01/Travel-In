import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CreateTripPage } from "./pages/create-trip"
import { TripDetails } from "./pages/trip-details"
import { LoginPage } from "./pages/login"
import { HomePage } from "./pages/home"
import { RegisterPage } from "./pages/register"
import { AboustUsPage } from "./pages/sobre-nos/about-us"
import { ContatoPage } from "./pages/contato/contato"
import { Dashboard } from "./pages/dashboard"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/sobre",
    element: <AboustUsPage/>
  },
  {
    path: "/contato",
    element: <ContatoPage/>
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
  {
    path: "/:owner/trip/create",
    element: <CreateTripPage/>
  },
  {
    path: "/dashboard/:userId",
    element: <Dashboard/>
  },
  {
    path: "/trips/:tripId",
    element: <TripDetails/>
  },
])

export function App() {

  return <RouterProvider router={router}/>
  
}
