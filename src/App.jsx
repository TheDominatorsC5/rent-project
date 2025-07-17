import { createBrowserRouter,RouterProvider } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDashboard";
import AllListings from "./pages/Admin/AllListings";
import FlaggedPosts from "./pages/Admin/FlaggedPosts";
import PendingReviews from "./pages/Admin/PendingReviews";
import UserManagement from "./pages/Admin/UserManagement";
import UserDashboard from "./pages/UserDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Otp from "./pages/Otp";
import RentListings from "./pages/RentListings";
import RentListingDetail from "./pages/RentListingDetail";
import NotFound from "./pages/NotFound";
import { AdminDataProvider } from "./context/AdminDataContext";


  const rentingAppRouther = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/signup', element: <Signup /> },
    { path: '/login', element: <Login /> },
    { path: '/otp', element: <Otp /> },
    { path: '/About', element: <About /> },
    { path: '/admin', element: <AdminDashboard /> },
    { path: '/admin/listings', element: <AllListings /> },
    { path: '/admin/flagged', element: <FlaggedPosts /> },
    { path: '/admin/pending', element: <PendingReviews /> },
    { path: '/admin/users', element: <UserManagement /> },
    { path: '/user-dashboard', element: <UserDashboard /> },
    { path: '/owner-dashboard', element: <OwnerDashboard /> },
    { path: '/rent-listings', element: <RentListings /> },
    { path: '/rent-listing-detail', element: <RentListingDetail /> },
    { path: '*', element: <NotFound /> },
  ]);

  export default function App() {

  return (
    <>
    <AdminDataProvider>
      <RouterProvider router={rentingAppRouther} />
    </AdminDataProvider>
    </>
  )
}

