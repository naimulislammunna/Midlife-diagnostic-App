import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../LayOut/UserLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import UserDashboardLayout from "../LayOut/UserDashboardLayout";
import MyProfile from "../Pages/UserDashboard.jsx/MyProfile";
import MyAppointment from "../Pages/UserDashboard.jsx/MyAppointment";
import TestResult from "../Pages/UserDashboard.jsx/TestResult";
import AllTests from "../Pages/AllTests/AllTests";
import TestDetails from "../Pages/AllTests/TestDetails";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Pages/AdminDashboard/AllUsers";
import AdminDashboardLayout from "../LayOut/AdminDashboardLayout";
import AddTest from "../Pages/AdminDashboard/AddTest";
import TotalTests from "../Pages/AdminDashboard/TotalTests";
import Reservation from "../Pages/AdminDashboard/Reservation";
import AdminRoutes from "./AdminRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout></UserLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: '/all-tests',
                element: <AllTests />
            },
            {
                path: '/test/:id',
                element: <PrivateRoutes><TestDetails /></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://midlife-diagnostic-server.vercel.app/test/${params.id}`)
            }
        ]
    },
    {
        path: '/user-dashboard',
        element: <PrivateRoutes><UserDashboardLayout /></PrivateRoutes>,
        children: [
            {
                index: true,
                element: <PrivateRoutes><MyProfile></MyProfile></PrivateRoutes>
            },
            {
                path: 'my-appointments',
                element: <MyAppointment />
            },
            {
                path: 'test-results',
                element: <TestResult />
            }
        ]
    },
    {
        path: '/admin-dashboard',
        element: <PrivateRoutes><AdminRoutes><AdminDashboardLayout /></AdminRoutes></PrivateRoutes>,
        children: [
            {
                index: true,
                element: <AllUsers />
            },
            {
                path: 'add-test',
                element: <AddTest />
            },
            {
                path: 'all-test',
                element: <TotalTests />
            },
            {
                path: 'reservation',
                element: <Reservation />
            }
        ]
    }
])

export default router;