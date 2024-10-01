import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/UserDashboard.jsx/Sidebar";

const UserDashboardLayout = () => {
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

export default UserDashboardLayout;