import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="lg:h-[100vh] bg-teal-100/50 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
                <div className="w-full py-12 pl-12">
                    <h1 className="text-4xl text-center lg:text-left lg:text-5xl  text-myBlue font-bold lg:leading-tight">Our diagnostic services<br /> can help you take control of your health</h1>
                    <p className="my-5 text-gray-700">Our experienced team of board-certified physicians and state-of-the-art technology ensure that we deliver the highest quality diagnostic services possible. We offer a wide range of services, including diagnostic imaging, laboratory testing, and other advanced diagnostics</p>
                    <Link to='/all-tests'>
                        <button className="button my-10"><span>All Tests </span><svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 74 74"
                            height="34"
                            width="34"
                        >
                            <circle strokeWidth="3" stroke="white" r="35.5" cy="37" cx="37"></circle>
                            <path
                                fill="white"
                                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                            ></path>
                        </svg></button>
                    </Link>
                </div>
            </div>

            {/* img part */}
            <div className="w-full lg:w-1/2 flex justify-end items-center">
                <div className="relative">
                    <img className="w-[75%] ml-20" src="https://i.postimg.cc/76gdy8Zj/mri.png" alt="" />
                    <img className="w-1/2  absolute top-8 bottom-0 right-10" src="https://i.postimg.cc/pVJ4GH7F/beautiful-young-female-doctor-looking-camera-office.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;

