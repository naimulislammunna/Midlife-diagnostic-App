import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";

const UserLayout = () => {
    return (
        <>
            <div className="container">
            <Navber></Navber>
            <Outlet></Outlet>
            </div>
        </>
    );
};

export default UserLayout;