import { createBrowserRouter,RouterProvider } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Otp from "./pages/Otp";
import RentListings from "./pages/RentListings";
import RentListingDetail from "./pages/RentListingDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";


  const rentingAppRouther = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/signup', element: <Signup /> },
    { path: '/login', element: <Login /> },
    { path: '/otp', element: <Otp /> },
    { path: '/About', element: <About /> },
    { path: '/admin-dashboard', element: <AdminDashboard /> },
    { path: '/user-dashboard', element: <UserDashboard /> },
    { path: '/owner-dashboard', element: <OwnerDashboard /> },
    { path: '/rent-listings', element: <RentListings /> },
    { path: '/rent-listing-detail', element: <RentListingDetail /> },
    {path: '/contact', element: <Contact /> },
    { path: '*', element: <NotFound /> },

  ]);

  export default function App() {

  return (
    <>
    <RouterProvider router={rentingAppRouther} />
    </>
  )
}

