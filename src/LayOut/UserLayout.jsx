import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";

const UserLayout = () => {
    return (
        <>
            <Navber></Navber>
            <Outlet></Outlet>
        </>
    );
};

export default UserLayout;