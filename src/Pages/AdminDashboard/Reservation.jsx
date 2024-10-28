import { useQuery } from "react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Components/Loader/Loading";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useState } from "react";

const Reservation = () => {
    const axiosSecure = useAxiosSecure();
    const [id, setId] = useState();
    const { data, loading} = useQuery({
        queryKey: ['all-booking'],
        queryFn: async () => {
            const response = await axiosSecure.get(`/all-booking`);
            return response.data;
        }
    })

    const {
        register,
        handleSubmit,
    } = useForm();

    const handleAddResult = (id) => {
        setId(id);
    }

    const onSubmit = async (data) => {
        const { diabetes, bloodHb, CBC, date, MCV1c } = data;

        const test = {
            diabetes,
            bloodHb,
            CBC,
            date,
            MCV1c
        }

        const res = await axiosSecure.patch(`/booking/${id}`, test);
        if (res.data?.modifiedCount > 0) {
            toast.success("Result Added")
        }
        console.log(res);

    }

    if (loading) return <Loading />
    return (<>
        <div className="overflow-x-auto text-myBlue bg-teal-100/50 px-5">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-lg font-bold text-myBlue">
                        <th>Patient</th>
                        <th>Test Details</th>
                        <th>Price</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Table row  */}
                    {
                        data?.map(test =>
                            <tr key={test._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={test?.userPhoto}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{test?.name}</div>
                                            <div className="text-sm opacity-50">{test?.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-sm font-bold text-myBlue">
                                    {test?.title}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{test?.date}</span>
                                </td>
                                <td>$ {test?.price}</td>
                                <th>
                                    <button onClick={() => { document.getElementById('my_modal_1').showModal(); handleAddResult(test._id) }} className="bg-myBlue text-sm font-semibold px-4 py-2 rounded-full text-white">Add Result</button>
                                </th>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
        {/* Modal */}
        <dialog id="my_modal_1" className="modal">
        <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="modal-box max-w-[75%] max-h-[90%] py-4">
                <form method="dialog" className="text-end">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                <div className="my-2">
                    <div className="mx-auto w-full max-w-3xl space-y-2 rounded-lg border bg-white px-10 py-5 shadow-lg dark:border-cyan-700 dark:bg-cyan-900  shadow-cyan-500/50">

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                            <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                                <label htmlFor="username_2" className="block font-medium">
                                    Diabetes
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                    id="username_2"
                                    placeholder="Enter Test diabetes"
                                    type="text"
                                    required
                                    {...register('diabetes')}
                                />
                            </div>
                            <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                <label htmlFor="email" className="block font-medium">
                                    CBC
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                    id="email"
                                    placeholder="Enter CBC"
                                    name="CBC"
                                    type="text"
                                    required
                                    {...register('CBC')}
                                />
                            </div>
                            <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                <label htmlFor="email" className="block font-medium">
                                    Delivery Date
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                    id="email"
                                    placeholder="date"
                                    type="date"
                                    required
                                    {...register('date')}
                                />
                            </div>
                            <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                <label htmlFor="email" className="block font-medium">
                                    BloodHb
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                    id="email"
                                    placeholder="bloodHb "
                                    type="text"
                                    required
                                    {...register('bloodHb')}
                                />
                            </div>

                            <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                <label htmlFor="password_2" className="block font-medium">
                                    MCV1c
                                </label>
                                <input
                                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                    id="password_2"
                                    placeholder="Enter MCV1c"
                                    type="text"
                                    required
                                    {...register('MCV1c')}
                                />
                            </div>
                            <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">

                            </div>
                            <input type="submit" value='Add Result' className="w- rounded-md bg-cyan-700 px-4 py-2 text-white transition-colors hover:bg-cyan-900 dark:bg-cyan-700 cursor-pointer" />
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    </>
    );
};

export default Reservation;