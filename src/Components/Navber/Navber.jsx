import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import toast, { Toaster } from "react-hot-toast";


const Navber = () => {
    const navigate = useNavigate();
    const { userInfo, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success('Log Out')
                navigate('/')
            })
    }


    const items = <>
        <NavLink to='/'><button className="text-gray text-lg font-semibold hover:border-b-2 hover:border-mySky">Home</button></NavLink>
        <NavLink to='/all-tests'><button className="text-gray text-lg font-semibold hover:border-b-2 hover:border-mySky">All Tests</button></NavLink>
        {
            userInfo?.email && <NavLink to='/user-dashboard'><button className="text-gray text-lg font-semibold hover:border-b-2 hover:border-mySky">My Dashboard</button></NavLink>
        }
    </>
    return (
        <div className="bg-white flex">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="navbar container flex justify-between">
                <div>
                    <div className="dropdown">
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {items}
                        </ul>
                    </div>
                    <div className="flex ml-5 lg:ml-0">
                        <Link to='/'>
                            <a className="logo text-4xl text-mySky">Mid<span className="text-myBlue logo">Life</span></a>
                            <p className="text-myBlue text-center font-semibold">Diagnostic</p>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                        {items}
                    </ul>
                </div>
                <div className="flex-none">
                    {
                        userInfo?.email || <Link to='/register'>
                            <button className="button">Register</button>
                        </Link>
                    }

                    {userInfo?.email && <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={userInfo?.photoURL} />

                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                {userInfo?.displayName}
                            </li>
                            <li className="my-1"><Link to='/admin-dashboard'><button className="px-4 py-2 rounded-full">Admin-dashboard</button></Link></li>
                            <li>{userInfo && <button onClick={handleLogOut} className="my-1 px-4 py-2 rounded-full bg-white">Sign Out</button>}</li>
                        </ul>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Navber;