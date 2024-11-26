import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CreateTripPage } from "./pages/create-trip"
import { TripDetails } from "./pages/trip-details"
import { LoginPage } from "./pages/login"
import { HomePage } from "./pages/home"
import { RegisterPage } from "./pages/register"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
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
    path: "/trip/create",
    element: <CreateTripPage/>
  },
  {
    path: "/trips/:tripId",
    element: <TripDetails/>
  },
])

export function App() {

  return <RouterProvider router={router}/>
  
}
