import { motion } from "framer-motion";
import {
    Award,
    HeartPulse,
    ShieldCheck,
    Users,
} from "lucide-react";

const AboutPage = () => {
    const features = [
        {
            icon: HeartPulse,
            title: "Patient First",
            description:
                "Every treatment is planned around your comfort, needs and long-term oral health.",
        },
        {
            icon: ShieldCheck,
            title: "Safe & Trusted",
            description:
                "We follow modern clinical practices with a strong focus on safety and hygiene.",
        },
        {
            icon: Award,
            title: "Modern Dentistry",
            description:
                "Advanced dental technology helps us provide precise and comfortable treatments.",
        },
        {
            icon: Users,
            title: "Experienced Team",
            description:
                "Our dental team is committed to providing professional and compassionate care.",
        },
    ];

    return (
        <main>

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden bg-[#281238] py-24 sm:py-28 lg:py-32">

                <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#3b1c50]" />

                <div className="absolute -right-32 bottom-[-100px] h-96 w-96 rounded-full border-[60px] border-[#3b1c50]" />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#ff6b35]">
                            About Dental Clinic Studio
                        </p>

                        <h1 className="text-4xl font-bold leading-tight !text-white sm:text-5xl lg:text-6xl">
                            Excellence in Dental
                            <span className="block text-[#ff6b35]">
                                Care & Compassion
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm leading-7 !text-white/70 sm:text-base">
                            We are dedicated to creating healthy, confident
                            smiles through personalized dental care, modern
                            technology and a comfortable patient experience.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* ================= ABOUT CONTENT ================= */}
            <section className="bg-white py-20 sm:py-24 lg:py-28">

                <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-10">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[#fff0e9]" />

                        <img
                            src="/images/about-dental.jpg"
                            alt="Zen Dental Studio"
                            className="relative h-[420px] w-full rounded-[2rem] object-cover shadow-xl"
                        />

                        <div className="absolute -bottom-6 -right-4 rounded-2xl bg-[#281238] px-7 py-5 text-white shadow-xl">
                            <p className="text-3xl font-bold text-[#ff6b35]">
                                10+
                            </p>

                            <p className="mt-1 text-xs text-white/70">
                                Years of Dental Care
                            </p>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff6b35]">
                            Who We Are
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight text-[#281238] sm:text-4xl">
                            Your Smile Is Our
                            <span className="text-[#ff6b35]">
                                {" "}Commitment
                            </span>
                        </h2>

                        <p className="mt-6 text-sm leading-7 text-gray-500">
                            At Zen Dental Studio, we believe dental care should
                            be comfortable, personalized and accessible.
                            Our goal is not only to treat dental problems but
                            also to help every patient maintain a healthy and
                            confident smile.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-gray-500">
                            From routine dental check-ups to advanced
                            restorative and cosmetic treatments, our approach
                            combines modern dentistry with genuine care for
                            every patient.
                        </p>

                        <div className="mt-8 grid grid-cols-2 gap-5">

                            <div className="rounded-xl bg-[#f7f3f8] p-5">
                                <p className="text-2xl font-bold text-[#281238]">
                                    500+
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                    Happy Patients
                                </p>
                            </div>

                            <div className="rounded-xl bg-[#f7f3f8] p-5">
                                <p className="text-2xl font-bold text-[#281238]">
                                    15+
                                </p>

                                <p className="mt-1 text-xs text-gray-500">
                                    Treatments
                                </p>
                            </div>

                        </div>
                    </motion.div>

                </div>
            </section>

            {/* ================= VALUES ================= */}
            <section className="bg-[#f7f3f8] py-20 sm:py-24">

                <div className="mx-auto max-w-7xl px-6 lg:px-10">

                    <div className="mx-auto max-w-2xl text-center">

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff6b35]">
                            Why Choose Us
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-[#281238] sm:text-4xl">
                            Dental Care Built Around You
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-gray-500">
                            Our philosophy is simple — provide quality dental
                            care while making every patient feel comfortable
                            and respected.
                        </p>

                    </div>

                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.08,
                                    }}
                                    className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff0e9] text-[#ff6b35]">
                                        <Icon size={22} />
                                    </div>

                                    <h3 className="mt-6 text-lg font-bold text-[#281238]">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-7 text-gray-500">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            );
                        })}

                    </div>

                </div>
            </section>

        </main>
    );
};

export default AboutPage;