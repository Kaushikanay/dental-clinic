import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Sparkles,
} from "lucide-react";

const Hero = () => {
    const services = [
        "Tooth whitening",
        "Dental check ups",
        "Missing teeth",
        "Dental implants",
    ];

    return (
        <section
            id="home"
            className="relative min-h-[680px] overflow-hidden bg-[var(--page-bg)] transition-colors duration-500"
        >
            {/* =========================================
                BACKGROUND DECORATIVE CIRCLES
            ========================================= */}

            <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[var(--primary-light)] opacity-20 transition-colors duration-500" />

            <div className="absolute -right-40 top-[-100px] h-[550px] w-[550px] rounded-full border-[80px] border-[var(--primary-light)] opacity-20 transition-colors duration-500" />

            <div className="absolute bottom-[-150px] left-[35%] h-[300px] w-[600px] rounded-full bg-[var(--dark)] opacity-10 transition-colors duration-500" />

            {/* =========================================
                SMALL DECORATIVE SHAPES
            ========================================= */}

            <div className="absolute left-[40%] top-24 hidden md:block">
                <Sparkles
                    size={32}
                    strokeWidth={1}
                    className="text-[var(--primary)] opacity-30"
                />
            </div>

            <div className="absolute right-[15%] top-32 hidden md:block">
                <div className="h-8 w-8 rotate-45 rounded-sm bg-[var(--accent-light)] opacity-20" />
            </div>

            <div className="absolute bottom-28 left-[48%] hidden md:block">
                <div className="h-7 w-7 rotate-45 rounded-sm border border-[var(--accent-light)] opacity-40" />
            </div>

            {/* =========================================
                MAIN CONTAINER
            ========================================= */}

            <div className="relative z-10 mx-auto flex min-h-[680px] max-w-7xl items-center px-6 py-28 lg:px-10">

                <div className="grid w-full items-center gap-14 lg:grid-cols-2">

                    {/* =========================================
                        LEFT CONTENT
                    ========================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className="pt-10 lg:pt-0"
                    >
                        {/* Small heading */}

                        <div className="mb-5 flex items-center gap-3">

                            <span className="h-[2px] w-8 bg-[var(--accent)]" />

                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                                Welcome to The Smile Max Dentistry
                            </span>

                        </div>

                        {/* Main heading */}

                        <h1 className="max-w-2xl text-4xl font-bold leading-[1.1] text-[var(--text)] sm:text-5xl lg:text-6xl">

                            Transforming{" "}

                            <span className="text-[var(--accent)]">
                                Smiles
                            </span>

                        </h1>

                        {/* Description */}

                        <p className="mt-6 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                            Our goal is to provide outstanding dental care
                            that is tailored to every individual needs of each
                            patient, ensuring that every visit leaves you with
                            a brighter smile and increased confidence.
                        </p>

                        {/* Services */}

                        <div className="mt-7 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">

                            {services.map((service) => (
                                <div
                                    key={service}
                                    className="flex items-center gap-2 text-sm text-[var(--text)]"
                                >
                                    <CheckCircle2
                                        size={16}
                                        className="shrink-0 text-[var(--accent)]"
                                    />

                                    <span>{service}</span>
                                </div>
                            ))}

                        </div>

                        {/* CTA */}

                        <div className="mt-9 flex flex-wrap items-center gap-4">

                            <a
                                href="/contact"
                                className="group inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-semibold !text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[var(--accent-light)]"
                            >
                                <span className="!text-white">
                                    Book Appointment
                                </span>

                                <ArrowRight
                                    size={17}
                                    className="!text-white transition-transform group-hover:translate-x-1"
                                />
                            </a>

                            <a
                                href="#services"
                                className="group relative z-50 mt-4 inline-flex items-center text-sm font-medium text-[var(--muted)] opacity-100 transition-all duration-300 hover:!text-[var(--accent)]"
                            >
                                <span>
                                    Explore Services
                                </span>

                                <span className="ml-2 h-[1px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-5" />
                            </a>

                        </div>
                    </motion.div>

                    {/* =========================================
                        RIGHT IMAGE AREA
                    ========================================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.9,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 0.2,
                        }}
                        className="relative mx-auto h-[420px] w-full max-w-[560px] lg:h-[520px]"
                    >

                        {/* Large circular image */}

                        <div className="absolute right-0 top-2 h-[360px] w-[360px] overflow-hidden rounded-full border-[14px] border-[#315f88] bg-[var(--primary-light)] shadow-2xl transition-colors duration-500 sm:h-[430px] sm:w-[430px] lg:h-[470px] lg:w-[470px]">

                            <img
                                src="/images/Dr. Nitesh Paul.PNG"
                                alt="Dr. Nitesh Paul - Dental Surgeon"
                                className="h-full w-full object-cover object-top"
                            />

                        </div>

                        {/* Image overlay */}

                        <div className="absolute right-0 top-2 h-[360px] w-[360px] rounded-full bg-[var(--primary)] opacity-10 sm:h-[430px] sm:w-[430px] lg:h-[470px] lg:w-[470px]" />

                        {/* Small circular image */}

                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute bottom-4 left-2 z-20 h-[180px] w-[180px] overflow-hidden rounded-full border-[12px] border-[#315f88] bg-[var(--primary-light)] shadow-2xl transition-colors duration-500 sm:h-[210px] sm:w-[210px]"
                        >

                            <img
                                src="/images/Dr. Aarya.PNG"
                                alt="Dr. Aarya - Dental Surgeon"
                                className="h-full w-full object-cover object-top"
                            />

                        </motion.div>

                        {/* Medical plus badge */}

                        <div className="absolute bottom-24 right-[-5px] z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--accent)] text-white shadow-xl transition-colors duration-300 sm:right-[-10px]">

                            <span className="text-3xl font-light">
                                +
                            </span>

                        </div>

                        {/* Floating dental icon */}

                        <motion.div
                            animate={{
                                rotate: [0, 8, -8, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                            }}
                            className="absolute left-8 top-14 z-30 hidden rounded-full bg-[var(--primary)]/10 p-4 backdrop-blur-sm sm:block"
                        >
                            <Sparkles
                                size={28}
                                className="text-[var(--accent)]"
                            />
                        </motion.div>

                    </motion.div>

                </div>

            </div>

            {/* =========================================
                BOTTOM CURVED EDGE
            ========================================= */}

            <div className="absolute bottom-[-1px] left-0 h-10 w-full overflow-hidden">
                <div className="absolute bottom-[-35px] left-[-5%] h-20 w-[110%] rounded-[50%] bg-[var(--section-bg)]" />
            </div>

        </section>
    );
};

export default Hero;