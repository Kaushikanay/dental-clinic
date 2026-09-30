import { motion } from "framer-motion";
import TreatmentCard from "./TreatmentCard";

const Treatments = () => {
    const treatments = [
        {
            id: 1,
            title: "Orthodontics",
            slug: "orthodontics",
            description:
                "Personalized orthodontic treatments designed to improve alignment, function and the appearance of your smile.",
            image: "/images/treatment-orthodontics.jpg",
        },
        {
            id: 2,
            title: "Pedodontics",
            slug: "pedodontics",
            description:
                "Gentle and friendly dental care designed specifically for children and their developing smiles.",
            image: "/images/treatment-pedodontics.png",
        },
        {
            id: 3,
            title: "Periodontics",
            slug: "periodontics",
            description:
                "Comprehensive gum care focused on maintaining healthy gums and supporting long-term oral health.",
            image: "/images/treatment-periodontics.png",
        },
        {
            id: 4,
            title: "Root Canal Treatment",
            slug: "root-canal-treatment",
            description:
                "Modern root canal treatment focused on relieving discomfort and preserving your natural tooth.",
            image: "/images/treatment-root-canal.png",
        },
        {
            id: 5,
            title: "Dental Implants",
            slug: "dental-implants",
            description:
                "Natural-looking tooth replacement solutions designed to restore function, confidence and your smile.",
            image: "/images/treatment-implants.png",
        },
        {
            id: 6,
            title: "Teeth Whitening",
            slug: "teeth-whitening",
            description:
                "Professional whitening treatments to help brighten your smile and improve its overall appearance.",
            image: "/images/treatment-whitening.png",
        },
    ];

    return (
        <section
            id="services"
            className="relative overflow-hidden bg-[#f7f3f8] py-20 sm:py-24 lg:py-28"
        >
            {/* Decorative background */}
            <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#eee1f3]" />

            <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full border-[55px] border-[#fff0e9]" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

                {/* Heading */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="mx-auto max-w-2xl text-center"
                >

                    <div className="mb-4 flex items-center justify-center gap-3">

                        <span className="h-[2px] w-8 bg-[#ff6b35]" />

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff6b35]">
                            Our Treatments
                        </span>

                        <span className="h-[2px] w-8 bg-[#ff6b35]" />

                    </div>

                    <h2 className="text-3xl font-bold leading-tight text-[#281238] sm:text-4xl lg:text-5xl">
                        Major Treatments for a
                        <span className="text-[#ff6b35]">
                            {" "}Healthy Smile
                        </span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-gray-500 sm:text-base">
                        Explore our range of dental treatments designed to
                        support your oral health and help you feel confident
                        about your smile.
                    </p>

                </motion.div>

                {/* Treatment Grid */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                    {treatments.map((treatment, index) => (
                        <motion.div
                            key={treatment.id}
                            initial={{
                                opacity: 0,
                                y: 40,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.1,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.08,
                            }}
                        >
                            <TreatmentCard treatment={treatment} />
                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Treatments;