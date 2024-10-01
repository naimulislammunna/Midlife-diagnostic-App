import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";


const Navber = () => {
    const { logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    }


    const items = <>
        <NavLink to='/'><button className="text-gray text-lg font-semibold hover:border-b-2 hover:border-orange">Home</button></NavLink>
        <NavLink to='/user-dashboard'><button className="text-gray text-lg font-semibold hover:border-b-2 hover:border-orange">My Dashboard</button></NavLink>
    </>
    return (
        <div className="home-container flex bg-white border-b-2 border-blue-800">
            <div className="navbar flex justify-between">
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
                    <div className="flex">
                        <Link to='/'>
                            <a className="btn btn-ghost text-2xl lg:text-4xl logo gap-0 p-1">Mid<span className="text-myBlue logo">Life</span></a>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-4">
                        {items}
                    </ul>
                </div>
                <div className="flex-none">
                    {/* {
                        userInfo?.email || <Link to='/register'>
                            <button className="button">Register</button>
                        </Link>
                    } */}
                    <Link to='/register'>
                        <button className="button">Register</button>
                    </Link>
                    {/* {userInfo && <div className="dropdown dropdown-end">
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
                            <li className="my-3"><Link to='/dashboard'>Dashboard</Link></li>
                            <li className="my-3"><Link to='/admin-dashboard'>Admin-dashboard</Link></li>
                            <li>{userInfo && <button onClick={handleLogOut} className="px-4 py-2 rounded-full bg-white">Sign Out</button>}</li>
                        </ul>
                    </div>} */}
                    <button onClick={handleLogOut} className="button">Sign Out</button>
                </div>
            </div>

        </div>
    );
};

export default Navber;