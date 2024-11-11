
import jsPDF from "jspdf";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { MdAdminPanelSettings, MdBloodtype, MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import Modal from "../../Components/Modal/Modal";

const User = ({ user, refetch }) => {
    const axiosSecure = useAxiosSecure();
    const [userInformation, setUserInformation] = useState({});

    const handleDwonload = () => {
        const doc = new jsPDF();
        doc.setFontSize(26);
        doc.text("Mid Life Diagnostic Center", 105, 30, null, null, "center");
        doc.setFontSize(18);

        doc.text(`Name: ${user?.name}`, 105, 40, null, null, "center");

        doc.text(`Email: ${user?.email}`, 105, 50, null, null, "center");

        doc.text(`Blood group: ${user?.blood}`, 105, 60, null, null, "center");
        doc.save("a4.pdf");
    }

    const handleBlock = async (id) => {
        const res = await axiosSecure.patch(`/block-users/${id}`);
        if (res.data?.modifiedCount > 0) {
            toast.success('User Blocked',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
            refetch();
        }
    }
    const handleActive = async (id) => {

        const res = await axiosSecure.patch(`/active-users/${id}`);
        if (res.data?.modifiedCount > 0) {
            toast.success('User Active');
            refetch();
        }
    }
    const handleRole = async (id) => {
        const res = await axiosSecure.patch(`/users-role/${id}`);
        console.log(res);

        if (res.data?.modifiedCount > 0) {
            toast.success('Make Admin Succesfully',
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
            refetch();
        }
    }
    const handleuserInformation = (user) => {
        setUserInformation(user)    
    }
    
    return (
        <>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <Modal id={'my_modal_5'} userInformation={userInformation}></Modal>
            <tr>
                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <div className="inline-flex items-center gap-x-3">
                        <div className="flex items-center gap-x-2">
                            <img className="object-cover w-10 h-10 rounded-full" src={user?.photo} alt="" />
                            <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">{user?.name}</h2>
                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{user?.email}</p>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                    <div className={`${user.status === 'Blocked' ? 'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-red-100/60 dark:bg-gray-800' : 'inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800'}`}>
                        {
                            user.status === 'Blocked' ? '' : <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        }

                        <h2 className={`${user.status === 'Blocked' ? 'text-red-500' : 'text-sm font-normal text-emerald-500'}`}>{user?.status}</h2>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    <div onClick={() => handleRole(user._id)} className="cursor-pointer">
                        {
                            user?.role === 'Admin' ? <>
                                <p className="flex justify-center text-xl text-emerald-600"><MdAdminPanelSettings /></p>
                                <p className="text-center"><span>Admin</span></p>
                            </>
                                : <>
                                    <p className="flex justify-center"><FaUser /> </p>
                                    <p className="text-center"><span>User</span></p>
                                </>
                        }
                    </div>
                </td>
                <td onClick={() => { document.getElementById('my_modal_5').showModal(); handleuserInformation(user) }} className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                    <div className="flex items-center gap-x-2">
                        <p className="px-3 py-2 text-xs text-indigo-500 rounded-full dark:bg-gray-800 border border-blue-600 cursor-pointer">User Info</p>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="flex items-center gap-x-2">
                        <button onClick={() => handleDwonload(user._id)} className="px-3 py-1 text-xs text-indigo-500 rounded-full dark:bg-gray-800 bg-indigo-100/60">Dwonload</button>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div className="flex items-center">

                        {
                            user?.status === 'Active' ? <p onClick={() => handleBlock(user._id)} className=' px-4 py-2 text-xs text-red-500 rounded-full dark:bg-gray-800 bg-red-100/60 cursor-pointer' >Block</p>
                                :
                                <p onClick={() => handleActive(user._id)} className='px-4 py-2 text-xs text-emerald-500 rounded-full dark:bg-gray-800 bg-emerald-100/60 cursor-pointer' >Active</p>
                        }


                    </div>
                </td>
            </tr>
        </>

    );
};

export default User;

