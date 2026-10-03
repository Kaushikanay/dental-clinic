import { motion } from "framer-motion";
import {
    ArrowRight,
    Award,
    GraduationCap,
    HeartPulse,
} from "lucide-react";

const DoctorSection = () => {
    return (
        <section
            id="doctor"
            className="relative overflow-hidden bg-[var(--doctor-bg)] py-20 transition-colors duration-500 sm:py-24 lg:py-28"
        >
            {/* Decorative background */}

            <div className="absolute -left-40 top-10 h-80 w-80 rounded-full border-[60px] border-[var(--primary-light)] opacity-10" />

            <div className="absolute -right-32 bottom-[-80px] h-96 w-96 rounded-full bg-[var(--primary-light)] opacity-10" />

            <div className="absolute right-[20%] top-20 hidden h-4 w-4 rotate-45 bg-[var(--accent)] opacity-50 lg:block" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

                {/* Section Heading */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
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
                    className="mx-auto mb-14 max-w-2xl text-center"
                >
                    <div className="mb-4 flex items-center justify-center gap-3">

                        <span className="h-[2px] w-8 bg-[var(--accent)]" />

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                            Meet The Doctor
                        </span>

                        <span className="h-[2px] w-8 bg-[var(--accent)]" />

                    </div>

                    <h2 className="text-3xl font-bold leading-tight text-[var(--doctor-text)] transition-colors duration-500 sm:text-4xl lg:text-5xl">

                        Dedicated to Creating{" "}

                        <span className="text-[var(--accent)]">
                            Beautiful Smiles
                        </span>

                    </h2>

                    <p className="mt-5 text-sm leading-7 text-[var(--doctor-muted)] transition-colors duration-500 sm:text-base">
                        Compassionate care, advanced dental expertise and a
                        personalized approach to help every patient achieve
                        a healthier and more confident smile.
                    </p>
                </motion.div>

                {/* Doctor Content */}

                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Doctor Image */}

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
                        className="relative mx-auto w-full max-w-[520px]"
                    >

                        {/* Image background */}

                        <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] bg-[var(--primary-light)] opacity-20" />

                        {/* Main image */}

                        <div className="relative z-10 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--card-bg)]">

                            <img
                                src="/images/doctor.png"
                                alt="Dental doctor"
                                className="h-[480px] w-full object-cover sm:h-[560px]"
                            />

                        </div>

                        {/* Experience Badge */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.8,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.3,
                            }}
                            className="absolute bottom-7 left-[-12px] z-20 rounded-2xl bg-[var(--accent)] px-5 py-4 shadow-xl sm:left-[-20px]"
                        >
                            <div className="flex items-center gap-3">

                                <Award
                                    size={28}
                                    className="text-white"
                                />

                                <div>
                                    <p className="text-xl font-bold text-white">
                                        10+
                                    </p>

                                    <p className="text-[11px] text-white/80">
                                        Years Experience
                                    </p>
                                </div>

                            </div>
                        </motion.div>

                    </motion.div>

                    {/* Doctor Details */}

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

                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--accent)]">
                            Dental Surgeon
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-[var(--doctor-text)] transition-colors duration-500 sm:text-4xl">
                            Dr. Anay Kumar
                        </h3>

                        <p className="mt-2 text-sm text-[var(--doctor-muted)] transition-colors duration-500">
                            BDS, MDS — Cosmetic & Restorative Dentistry
                        </p>

                        <p className="mt-6 text-sm leading-7 text-[var(--doctor-muted)] transition-colors duration-500 sm:text-base">
                            With years of experience in modern dentistry, our
                            approach focuses on providing comfortable,
                            personalized and clinically effective dental care.
                            Every treatment plan is designed around the
                            individual needs and goals of the patient.
                        </p>

                        {/* Doctor Highlights */}

                        <div className="mt-8 grid gap-5 sm:grid-cols-3">

                            {/* Qualified */}

                            <div className="rounded-xl border border-[var(--border)] bg-[var(--doctor-card)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                                <GraduationCap
                                    size={22}
                                    className="text-[var(--accent)]"
                                />

                                <p className="mt-3 text-sm font-semibold text-[var(--doctor-text)]">
                                    Qualified
                                </p>

                                <p className="mt-1 text-xs leading-5 text-[var(--doctor-muted)]">
                                    Advanced dental education
                                </p>

                            </div>

                            {/* Experienced */}

                            <div className="rounded-xl border border-[var(--border)] bg-[var(--doctor-card)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                                <Award
                                    size={22}
                                    className="text-[var(--accent)]"
                                />

                                <p className="mt-3 text-sm font-semibold text-[var(--doctor-text)]">
                                    Experienced
                                </p>

                                <p className="mt-1 text-xs leading-5 text-[var(--doctor-muted)]">
                                    Years of clinical practice
                                </p>

                            </div>

                            {/* Patient First */}

                            <div className="rounded-xl border border-[var(--border)] bg-[var(--doctor-card)] p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                                <HeartPulse
                                    size={22}
                                    className="text-[var(--accent)]"
                                />

                                <p className="mt-3 text-sm font-semibold text-[var(--doctor-text)]">
                                    Patient First
                                </p>

                                <p className="mt-1 text-xs leading-5 text-[var(--doctor-muted)]">
                                    Personalized treatment
                                </p>

                            </div>

                        </div>

                        {/* CTA */}

                        <a
                            href="/contact"
                            className="group mt-9 inline-flex items-center gap-2 rounded-md bg-[var(--primary)] px-6 py-3 text-sm font-semibold !text-white shadow-md transition-all duration-300 hover:bg-[var(--primary-light)]"
                        >
                            <span className="!text-white">
                                Book Consultation
                            </span>

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

export default DoctorSection;