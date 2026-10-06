import { motion } from "framer-motion";
import {
    CheckCircle2,
    Play,
    ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const YoutubeSection = () => {
    return (
        <section
            id="youtube"
            className="
                relative
                overflow-hidden
                bg-[var(--section-bg)]
                py-20
                sm:py-24
                lg:py-28
            "
        >
            {/* Background Decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div
                    className="
                        absolute
                        -left-40
                        top-1/2
                        h-96
                        w-96
                        -translate-y-1/2
                        rounded-full
                        bg-[var(--accent)]
                        opacity-[0.035]
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        -right-40
                        top-10
                        h-80
                        w-80
                        rounded-full
                        bg-[var(--primary-light)]
                        opacity-[0.05]
                        blur-3xl
                    "
                />
            </div>

            <div
                className="
                    relative
                    mx-auto
                    max-w-7xl
                    px-5
                    sm:px-6
                    lg:px-8
                "
            >
                <div
                    className="
                        grid
                        items-center
                        gap-10
                        lg:grid-cols-2
                        lg:gap-16
                    "
                >
                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -40,
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
                            duration: 0.7,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {/* Section Label */}
                        <div
                            className="
                                mb-5
                                flex
                                items-center
                                gap-3
                            "
                        >
                            <span
                                className="
                                    h-px
                                    w-7
                                    bg-[var(--accent)]
                                "
                            />

                            <span
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[var(--accent)]
                                    transition-colors
                                    duration-500
                                "
                            >
                                Inside Our Clinic
                            </span>

                            <span
                                className="
                                    h-px
                                    w-7
                                    bg-[var(--accent)]
                                "
                            />
                        </div>

                        {/* Heading */}
                        <h2
                            className="
                                max-w-xl
                                text-3xl
                                font-bold
                                leading-tight
                                text-[var(--doctor-text)]
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Modern Dental Care for a{" "}
                            <span className="text-[var(--accent)]">
                                Confident Smile
                            </span>
                        </h2>

                        {/* Description */}
                        <p
                            className="
                                mt-5
                                max-w-xl
                                text-sm
                                leading-7
                                text-[var(--doctor-muted)]
                                sm:text-base
                            "
                        >
                            Take a closer look at our approach to modern
                            dentistry. We combine professional expertise,
                            advanced treatment techniques, and a comfortable
                            patient experience.
                        </p>

                        {/* Benefits */}
                        <div className="mt-7 space-y-4">
                            {[
                                "Advanced dental treatment approach",
                                "Comfort-focused patient experience",
                                "Professional and personalised dental care",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                        text-sm
                                        font-medium
                                        text-[var(--doctor-text)]
                                    "
                                >
                                    <CheckCircle2
                                        size={20}
                                        strokeWidth={1.8}
                                        className="
                                            shrink-0
                                            text-[var(--accent)]
                                        "
                                    />

                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <Link
                            to="/contact"
                            className="
                                group
                                mt-8
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                bg-[var(--accent)]
                                px-6
                                py-3.5
                                text-sm
                                font-semibold
                                text-white
                                shadow-lg
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:bg-[var(--accent-light)]
                                hover:shadow-xl
                            "
                        >
                            Book an Appointment

                            <ArrowRight
                                size={18}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-1
                                "
                            />
                        </Link>
                    </motion.div>

                    {/* RIGHT VIDEO */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
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
                            duration: 0.7,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group"
                    >
                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-3xl
                                border
                                border-[var(--border)]
                                bg-[var(--doctor-card)]
                                p-2
                                shadow-xl
                                transition-all
                                duration-500
                                group-hover:-translate-y-1
                                group-hover:border-[var(--accent)]
                                group-hover:shadow-2xl
                            "
                        >
                            {/* Local MP4 Video */}
                            <div
                                className="
                                    relative
                                    aspect-video
                                    overflow-hidden
                                    rounded-2xl
                                    bg-black
                                "
                            >
                                <video
                                    className="
                                        absolute
                                        inset-0
                                        h-full
                                        w-full
                                        object-cover
                                    "
                                    controls
                                    playsInline
                                    preload="metadata"
                                >
                                    <source
                                        src="/videos/dental-clinic.mp4"
                                        type="video/mp4"
                                    />

                                    Your browser does not support
                                    the video tag.
                                </video>

                                {/* Play Accent */}
                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        left-5
                                        top-5
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[var(--accent)]
                                        text-white
                                        opacity-0
                                        shadow-lg
                                        transition-all
                                        duration-500
                                        group-hover:opacity-100
                                    "
                                >
                                    <Play
                                        size={18}
                                        fill="currentColor"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Video Caption */}
                        <p
                            className="
                                mt-4
                                text-center
                                text-xs
                                text-[var(--doctor-muted)]
                            "
                        >
                            Take a look inside The SmileMax
                            Dentistry
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default YoutubeSection;