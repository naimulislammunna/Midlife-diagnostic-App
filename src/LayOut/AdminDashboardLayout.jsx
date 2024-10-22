import { Outlet } from "react-router-dom";
import AdminSidebar from "../Pages/AdminDashboard/AdminSidebar";

const AdminDashboardLayout = () => {
    return (
        <>
            <div className="lg:w-[90%] mx-auto bg-white">
                <div className="flex flex-col sm:flex-row">
                    <AdminSidebar/>
                    <div className="flex-1">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboardLayout;