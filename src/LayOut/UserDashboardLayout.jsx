import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/UserDashboard.jsx/Sidebar";

const UserDashboardLayout = () => {
    return (
        <>
            <div className="lg:w-[90%] mx-auto bg-white">
                <div className="flex flex-col sm:flex-row">
                    <Sidebar></Sidebar>
                    <div className="flex-1">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDashboardLayout;