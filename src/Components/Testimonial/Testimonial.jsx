import { FaQuoteRight } from "react-icons/fa";

const Testimonial = () => {
    return (
        <>
            <div className="w-[450px] mx-5 bg-white text-secondary shadow-2xl rounded-lg p-6 relative">
                <FaQuoteRight className="text-[4rem] text-mySky absolute top-[10%] right-[10%] " />
                <div className="flex items-center gap-4 mt-4">
                    <img
                        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R134535407&ga=GA1.1.71340048.1688965399&semt=sph"
                        alt="demo/image"
                        className="w-[40px] h-[40px] object-cover rounded-full"
                    />
                    <div>
                        <h2 className="text-myBlue text-xl font-bold">Jhone Dehon</h2>
                        <p className="text-myBlue font-semibold">CEO of Miracle</p>
                    </div>
                </div>

                <p className=" text-justify text-gray-700 my-4">
                A testimonial is a statement from a past customer that describes how a product or service helped them. Testimonials are often written by the business based on specific questions they ask satisfied customers. They usually show impact through before-and-after comparisons or provide specific improvement statistics
                </p>
            </div>
        </>
    );
};

export default Testimonial;