import SEO from "../components/SEO/SEO";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import DoctorSection from "../components/home/DoctorSection";
import Recognition from "../components/home/Recognition";
import Features from "../components/home/Features";
import Treatments from "../components/home/Treatments";
import ProfessionalResults from "../components/home/ProfessionalResults";
import Testimonials from "../components/home/Testimonials";
import YoutubeSection from "../components/home/YoutubeSection";


const Home = () => {
    return (
        <>
            <SEO
                title="The SmileMax Dental Clinic | Dentist in Muzaffarpur"
                description="The SmileMax Dental Clinic in Muzaffarpur provides professional dental care including dental check-ups, teeth whitening, root canal treatment, dental implants and more."
                path="/"
            />
            <Hero />
            <About />
            <DoctorSection />
            <Recognition />
            <Features />
            <Treatments />
            <ProfessionalResults />
            <Testimonials />
            <YoutubeSection />
        </>
    );
};

export default Home;