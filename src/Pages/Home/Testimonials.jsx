import Marquee from "react-fast-marquee";
import Testimonial from "../../Components/Testimonial/Testimonial";
const Testimonials = () => {
    return (
        <div className="py-32 my-10 bg-myBlue">
            <p className="text-lg font-bold text-center text-white">Testimonial</p>
            <h1 className="text-4xl text-center font-bold text-mySky mb-16">What our patients say</h1>
            <Marquee>
                <Testimonial></Testimonial>
                <Testimonial></Testimonial>
                <Testimonial></Testimonial>
                <Testimonial></Testimonial>
            </Marquee>
        </div>
    );
};

export default Testimonials;