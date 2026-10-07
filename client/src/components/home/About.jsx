import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const About = () => {
    const benefits = [
        "Personalized dental care",
        "Advanced dental technology",
        "Experienced dental professionals",
        "Comfortable and friendly environment",
    ];

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[var(--section-bg)] py-20 transition-colors duration-500 sm:py-24 lg:py-28"
        >
            {/* Decorative background */}

            <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-[var(--primary-light)] opacity-10 transition-colors duration-500" />

            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[var(--accent-light)] opacity-10 transition-colors duration-500" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
                    {/* ================= IMAGE AREA ================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        className="relative mx-auto w-full max-w-[560px]"
                    >
                        {/* Main image */}

                        <div className="relative z-10 overflow-hidden rounded-[2rem] bg-[var(--card-bg)] transition-colors duration-500">
                            <img
                                src="/images/about-dental.jpeg"
                                alt="The Smile Max Dentistry - About Us"
                                className="h-[460px] w-full object-cover sm:h-[520px]"
                            />
                        </div>

                        {/* Decorative circle */}

                        <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full border-[18px] border-[var(--accent)] opacity-10" />

                        {/* Small floating card */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                            }}
                            className="absolute bottom-8 right-[-15px] z-20 hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-5 shadow-xl transition-colors duration-500 sm:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]">
                                    <Sparkles size={22} className="text-[var(--accent-light)]" />
                                </div>

                                <div>
                                    <p className="text-2xl font-bold text-[var(--text)]">10+</p>

                                    <p className="text-xs text-[var(--muted)]">
                                        Years of Experience
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* ================= CONTENT ================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                    >
                        {/* Section label */}

                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-[2px] w-8 bg-[var(--accent)]" />

                            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                                About The Smile Max Dentistry
                            </span>
                        </div>

                        {/* Heading */}

                        <h2 className="max-w-xl text-3xl font-bold leading-tight text-[var(--text)] transition-colors duration-500 sm:text-4xl lg:text-5xl">
                            Excellence in Dental Care is Our{" "}
                            <span className="text-[var(--accent)]">Commitment</span>
                        </h2>

                        {/* Description */}

                        <p className="mt-6 text-sm leading-7 text-[var(--muted)] transition-colors duration-500 sm:text-base">
                            At The Smile Max Dentistry, we believe that exceptional dental care
                            is about more than just treating teeth. Our approach combines
                            modern technology, clinical expertise and personalized attention
                            to create a comfortable experience for every patient.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-[var(--muted)] transition-colors duration-500 sm:text-base">
                            From routine dental care to advanced treatments, our goal is to
                            help you maintain a healthy smile while making every visit as
                            comfortable and stress-free as possible.
                        </p>

                        {/* Benefits */}

                        <div className="mt-7 grid gap-3 sm:grid-cols-2">
                            {benefits.map((benefit) => (
                                <div key={benefit} className="flex items-start gap-3">
                                    <CheckCircle2
                                        size={19}
                                        className="mt-0.5 shrink-0 text-[var(--accent)]"
                                    />

                                    <span className="text-sm font-medium text-[var(--text)] transition-colors duration-500">
                                        {benefit}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}

                        <a
                            href="/contact"
                            className="group mt-9 inline-flex items-center gap-2 rounded-md bg-[var(--primary)] px-6 py-3 text-sm font-semibold !text-white shadow-md transition-all duration-300 hover:bg-[var(--primary-light)]"
                        >
                            <span className="!text-white">Learn More</span>

                            <ArrowRight
                                size={17}
                                className="!text-white transition-transform group-hover:translate-x-1"
                            />
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
