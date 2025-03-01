import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "../../Provider/UserProvider";

const AdminSidebar = () => {
    const { data } = useContext(UserContext);
    const items = <>
        <NavLink to='/admin-dashboard' end className={({ isActive }) => isActive ?  'text-myBlue bg-white text-sm px-4 py-2 font-semibold text-center w-[80%] ml-12' : 'lg:text-white text-sm px-4 py-2 font-semibold text-center w-[80%] ml-12'}><button>All Users</button></NavLink>
        <NavLink to='add-test' className={({ isActive }) => isActive ?  'text-myBlue bg-white text-sm px-4 py-2 font-semibold text-center w-[80%] ml-12' : 'lg:text-white text-sm px-4 py-2 font-semibold text-center w-[80%] ml-12'}><button>Add Test</button></NavLink>
        <NavLink to='all-test' className={({ isActive }) => isActive ?  'text-myBlue bg-white text-sm px-4 py-2 font-semibold text-center w-[80%] ml-12' : 'lg:text-white text-sm px-4 py-2 font-semibold text-center w-[80%] ml-12'}><button>All Test</button></NavLink>
        <NavLink to='reservation' className={({ isActive }) => isActive ?  'text-myBlue bg-white text-sm px-4 py-2 font-semibold text-center w-[80%] ml-12' : 'lg:text-white text-sm px-4 py-2 font-semibold text-center w-[80%] ml-12'}><button>Reservation</button></NavLink>
    </>

    return (
        <>
            <div className="dropdown px-4 sm:px-0">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>

                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-3">
                    {items}
                    <div className="text-center">
                    <Link to='/'><button className=" bg-myBlue px-4 py-2 rounded-xl text-white">Back Home</button></Link>
                    </div>
                </ul>
            </div>
            <div className="hidden sm:flex sm:flex-col justify-between bg-myBlue text-white min-h-screen w-52 py-5">
                <div className="flex flex-col items-center gap-3">
                    <div>
                        <img className="w-[150px] h-[150px] rounded-full border-4 border-white  mx-auto" src={data?.photo} alt="" />
                        <h3 className="text-sm font-bold  text-white text-center mt-2 ">{data?.name}</h3>
                        <h2  className="text-xl font-bold  text-white text-center ">Admin</h2>
                    </div>
                    {items}
                </div>
                <div className="text-center">
                    <Link to='/'>Home</Link>
                </div>
            </div>
        </>
    );
};

export default AdminSidebar;