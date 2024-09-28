import { createBrowserRouter } from "react-router-dom";
import UserLayout from "../LayOut/UserLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout></UserLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            }
        ]
    }
])

export default router;