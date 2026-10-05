import Hero from "../components/home/Hero";
import About from "../components/home/About";
import DoctorSection from "../components/home/DoctorSection";
import Features from "../components/home/Features";
import Treatments from "../components/home/Treatments";
import ProfessionalResults from "../components/home/ProfessionalResults";
import Testimonials from "../components/home/Testimonials";
import YoutubeSection from "../components/home/YoutubeSection";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <DoctorSection />
            <Features />
            <Treatments />
            <ProfessionalResults />
            <Testimonials />
            <YoutubeSection />
        </>
    );
};

export default Home;