import Hero from "../components/home/Hero";
import About from "../components/home/About";
import DoctorSection from "../components/home/DoctorSection";
import Features from "../components/home/Features";
import Treatments from "../components/home/Treatments";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <DoctorSection />
            <Features />
            <Treatments />
        </>
    );
};

export default Home;