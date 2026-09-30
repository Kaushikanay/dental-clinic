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
            className="relative overflow-hidden bg-[#281238] py-20 sm:py-24 lg:py-28"
        >
            {/* Decorative background */}
            <div className="absolute -left-40 top-10 h-80 w-80 rounded-full border-[60px] border-white/5" />

            <div className="absolute -right-32 bottom-[-80px] h-96 w-96 rounded-full bg-[#3d1d52]/60" />

            <div className="absolute right-[20%] top-20 hidden h-4 w-4 rotate-45 bg-[#ff6b35]/50 lg:block" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

                {/* Section heading */}
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

                        <span className="h-[2px] w-8 bg-[#ff6b35]" />

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff8a5c]">
                            Meet The Doctor
                        </span>

                        <span className="h-[2px] w-8 bg-[#ff6b35]" />

                    </div>

                    <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                        Dedicated to Creating
                        <span className="text-[#ff8a5c]">
                            {" "}Beautiful Smiles
                        </span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                        Compassionate care, advanced dental expertise and a
                        personalized approach to help every patient achieve
                        a healthier and more confident smile.
                    </p>
                </motion.div>

                {/* Doctor content */}
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Doctor image */}
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
                        <div className="absolute inset-0 translate-x-5 translate-y-5 rounded-[2rem] bg-[#3d1d52]" />

                        {/* Main image */}
                        <div className="relative z-10 overflow-hidden rounded-[2rem] border border-white/10 bg-[#3d1d52]">

                            <img
                                src="/images/doctor.png"
                                alt="Dental doctor"
                                className="h-[480px] w-full object-cover sm:h-[560px]"
                            />

                        </div>

                        {/* Experience badge */}
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
                            className="absolute bottom-7 left-[-12px] z-20 rounded-2xl bg-[#ff6b35] px-5 py-4 shadow-xl sm:left-[-20px]"
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

                    {/* Doctor details */}
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

                        <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#ff8a5c]">
                            Dental Surgeon
                        </p>

                        <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                            Dr. Anay Kumar
                        </h3>

                        <p className="mt-2 text-sm text-white/50">
                            BDS, MDS — Cosmetic & Restorative Dentistry
                        </p>

                        <p className="mt-6 text-sm leading-7 text-white/65 sm:text-base">
                            With years of experience in modern dentistry, our
                            approach focuses on providing comfortable,
                            personalized and clinically effective dental care.
                            Every treatment plan is designed around the individual
                            needs and goals of the patient.
                        </p>

                        {/* Doctor highlights */}
                        <div className="mt-8 grid gap-5 sm:grid-cols-3">

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <GraduationCap
                                    size={22}
                                    className="text-[#ff8a5c]"
                                />

                                <p className="mt-3 text-sm font-semibold text-white">
                                    Qualified
                                </p>

                                <p className="mt-1 text-xs leading-5 text-white/45">
                                    Advanced dental education
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <Award
                                    size={22}
                                    className="text-[#ff8a5c]"
                                />

                                <p className="mt-3 text-sm font-semibold text-white">
                                    Experienced
                                </p>

                                <p className="mt-1 text-xs leading-5 text-white/45">
                                    Years of clinical practice
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <HeartPulse
                                    size={22}
                                    className="text-[#ff8a5c]"
                                />

                                <p className="mt-3 text-sm font-semibold text-white">
                                    Patient First
                                </p>

                                <p className="mt-1 text-xs leading-5 text-white/45">
                                    Personalized treatment
                                </p>
                            </div>

                        </div>

                        {/* CTA */}
                        <a
                            href="#appointment"
                            className="group mt-9 inline-flex items-center gap-2 rounded-md bg-[#ff6b35] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff8a5c]"
                        >
                            Book Consultation

                            <ArrowRight
                                size={17}
                                className="transition-transform group-hover:translate-x-1"
                            />
                        </a>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default DoctorSection;