import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../LayOut/UserLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
// import SignIn from "../Pages/SignIn/SignIn";

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
            // {
            //     path: '/sign-in',
            //     element: <SignIn></SignIn>
            // }
        ]
    }
])

export default router;