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
                element: <AllTests/>
            },
            {
                path: '/test/:id',
                element: <TestDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/test/${params.id}`)
            }
        ]
    },
    {
        path: '/user-dashboard',
        element: <PrivateRoutes><UserDashboardLayout/></PrivateRoutes>,
        children: [
            {
                index: true,
                element: <MyProfile></MyProfile>
            },
            {
                path: 'my-appointments',
                element: <MyAppointment/>
            },
            {
                path: 'test-results',
                element: <TestResult/>
            }
        ]
    },
    {
        path: '/admin-dashboard',
        element: <AdminDashboardLayout/>,
        children: [
            {
                index: true,
                element: <AllUsers/>
            }
        ]
    }
])

export default router;