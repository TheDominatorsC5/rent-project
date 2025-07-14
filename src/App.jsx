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
import NotFound from "./pages/NotFound";

function App() {

  const rentingAppRouther = createBrowserRouter([
    {path: '/', element: <Home />},
    {path: '/signup', element: <Signup />},
    {path: '/login', element: <Login />},
    {path: '/otp', element: <Otp />},
    {path: '/About', element: <About />},
    {path: '/admin-dashboard', element: <AdminDashboard />},
    {path: '/user-dashboard', element: <UserDashboard />},
    {path: '/owner-dashboard', element: <OwnerDashboard />},
    {path: '/rent-listings', element: <RentListings />},
    {path: '/rent-listing-detail', element: <RentListingDetail />},
    {path: '*', element: <NotFound />},
  ]);

  return (
    <>
    <RouterProvider router={rentingAppRouther} />
    </>
  )
}

export default App
