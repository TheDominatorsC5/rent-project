import { createBrowserRouter,RouterProvider } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About";
import AdminLogin from "./pages/Admin/AdminLogin";
import AdminReview from "./pages/Admin/AdminReview";
import AdminAllReview from "./pages/Admin/AdminAllReview";
import AdminDashboard from "./pages/AdminDashboard";
import AllListings from "./pages/Admin/AllListings";
import FlaggedPosts from "./pages/Admin/FlaggedPosts";
import PendingReviews from "./pages/Admin/PendingReviews";
import UserManagement from "./pages/Admin/UserManagement";
import UserDashboard from "./pages/UserDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";
import OwnerListingForm from "./pages/OwnerListingForm";
import UpdateListingForm from "./pages/UpdateListingForm";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import RentListings from "./pages/RentListings";
import RentListingDetail from "./pages/RentListingDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { AdminDataProvider } from "./context/AdminDataContext";
import ListingGallery from "./pages/ListingGallery";
import OwnerContact from "./pages/OwnerContact";


  const rentingAppRouther = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/signup', element: <Signup /> },
    { path: '/login', element: <Login /> },
    { path: '/About', element: <About /> },
    { path: '/admin', element: <AdminDashboard /> },
    { path: '/admin/login', element: <AdminLogin /> },
    { path: '/admin/review', element: <AdminReview /> },
    { path: '/admin/all/review', element: <AdminAllReview /> },
    { path: '/admin/listings', element: <AllListings /> },
    { path: '/admin/flagged', element: <FlaggedPosts /> },
    { path: '/admin/pending', element: <PendingReviews /> },
    { path: '/admin/users', element: <UserManagement /> },
    { path: '/user-dashboard', element: <UserDashboard /> },
    { path: '/owner-dashboard', element: <OwnerDashboard /> },
    { path: '/owner-listing-form', element: <OwnerListingForm /> },
    { path: '/update-listing-form', element: <UpdateListingForm /> },
    { path: '/rent-listings', element: <RentListings /> },
    { path: '/rent-listing-detail', element: <RentListingDetail /> },
    { path: '/listing-gallery', element: <ListingGallery /> },
    { path: '/contact', element: <Contact /> },
    { path: '*', element: <NotFound /> },
    { path: '/owner-contact', element: <OwnerContact />},

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

