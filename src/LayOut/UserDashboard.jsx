import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/UserDashboard.jsx/Sidebar";

const userDashboard = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row">
                <Sidebar></Sidebar>
                <div className="flex-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default userDashboard;