import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";

const UserLayout = () => {
    return (
        <>
            <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
        </>
    );
};

export default UserLayout;