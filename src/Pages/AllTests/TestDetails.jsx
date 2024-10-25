import { useLoaderData } from "react-router-dom";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import { CiCalendarDate } from "react-icons/ci";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useEffect, useState } from "react";

const TestDetails = () => {
    const [paymentValue, setPaymentValue] = useState(false);
    const { userInfo } = useAuth();
    const test = useLoaderData();
    const axiosSecure = useAxiosSecure();

    const bookInfo = {
        email: userInfo.email,
        title: test.title,
        date: test.date,
        image: test.image,
        price: test.price
    }

    const handleBook = (value) => {
        setPaymentValue(value);
    }

    useEffect(() => {
        const handleBooking = async () => {
            if (paymentValue) {
                const { data } = await axiosSecure.post(`/booking`, bookInfo);
                if (data.insertedId) {
                    return toast.success('Test Booked')
                }
            }
        }
        handleBooking();
    }, [paymentValue])

    // Payment method
    const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Api_Key);

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
                        <button onClick={() => { document.getElementById('my_modal_1').showModal() }} className="btn btn-primary">Book Now</button>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_1" className="modal">
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div className="modal-box max-w-[60%] max-h-[90%] p-10">
                    <form method="dialog" className="text-end">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                    <div className="my-2">
                        <div className="mx-auto w-full max-w-3xl space-y-2 rounded-lg border bg-white px-10 py-5 shadow-lg dark:border-cyan-700 dark:bg-cyan-900  shadow-cyan-500/50">

                            <Elements stripe={stripePromise}>
                                <CheckoutForm price={test?.price} handleBook={handleBook} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default TestDetails;