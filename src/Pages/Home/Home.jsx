import About from "./About";
import FeatureTests from "./FeatureTests";
import Hero from "./Hero";
import OurDoctors from "./OurDoctors";
import Testimonials from "./Testimonials";

const Home = () => {
    return (
        <>
            <Hero></Hero>
            <div className="container">
                <FeatureTests></FeatureTests>
                <About></About>
                <OurDoctors></OurDoctors>
            </div>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;