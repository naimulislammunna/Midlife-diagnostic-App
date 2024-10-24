import { useLoaderData } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { CiCalendarDate } from "react-icons/ci";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const TestDetails = () => {
    // const { userInfo } = useAuth();
    const test = useLoaderData();
    // const axiosSecure = useAxiosSecure();

    // const bookInfo = {
    //     email: userInfo.email,
    //     title: test.title,
    //     date: test.date,
    //     image: test.image,
    //     price: test.price
    // }

    // const handleBook = async () => {
    //     const { data } = await axiosSecure.post(`/booking`, bookInfo);
    //     if (data.insertedId) {
    //         return toast.success('Test Booked')
    //     }
    // }


    return (
        <div className="p-20">
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="w-1/2">
                    <div>
                        <img
                            src={test?.image}
                            alt="Movie" />
                    </div>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{test?.title}</h2>
                    <p>{test?.description}</p>
                    <div className="flex gap-10 my-5">
                        <p className="flex gap-2 items-center"><CiCalendarDate /> {test.date}</p>
                        <p>Slots Available: {test.slots}</p>
                    </div>
                    <div className="card-actions justify-between">
                        <p className="flex gap-2 items-center"><HiOutlineCurrencyDollar /> {test.price}</p>
                        <button onClick={() => { document.getElementById('my_modal_1').showModal()}}className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
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

                            <form className="space-y-2 grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300 mt-5">
                                    <label htmlFor="username_2" className="block font-medium">
                                        Tk
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                        id="username_2"
                                        placeholder="Enter Test diabetes"
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="space-y-2 text-sm text-cyan-700 dark:text-cyan-300">
                                    <label htmlFor="email" className="block font-medium">
                                        Amount
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:ring-1 focus-visible:outline-none dark:border-cyan-700"
                                        id="email"
                                        placeholder="Enter CBC"
                                        name="CBC"
                                        type="text"
                                        required
                                    />
                                </div>
                                <input type="submit" value='Add Result' className="w- rounded-md bg-cyan-700 px-4 py-2 text-white transition-colors hover:bg-cyan-900 dark:bg-cyan-700 cursor-pointer" />
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default TestDetails;