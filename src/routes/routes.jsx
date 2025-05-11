import {
    createBrowserRouter,
} from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import MyBookings from "../pages/MyBookings";
import Blogs from "../pages/Blogs";
import ErrorPage from "../pages/ErrorPage";
import Loader from "../components/ui/Loader";
import ViewDetails from "../pages/viewDetails/ViewDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                hydrateFallbackElement: <Loader />,
                loader: () => fetch('../lawyers.json'),
                Component: Home
            },
            {
                path: '/lawyer-details/:lawyerLicense',
                hydrateFallbackElement: <Loader />,
                loader: () => fetch('../lawyers.json'),
                Component: ViewDetails
            },

            {
                path: '/my-bookings',
                hydrateFallbackElement: <Loader />,
                loader: () => fetch('../lawyers.json'),
                Component: MyBookings
            },
            {
                path: '/blogs',
                hydrateFallbackElement: <Loader />,
                loader: () => fetch('../blogs.json'),
                Component: Blogs
            },

        ]
    },
]);
export default router