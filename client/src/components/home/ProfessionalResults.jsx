import { motion } from "framer-motion";
import {
    Award,
    Users,
    Smile,
    Stethoscope,
} from "lucide-react";

const results = [
    {
        icon: Award,
        value: "10+",
        label: "Years of Experience",
        description:
            "Providing trusted and professional dental care.",
    },
    {
        icon: Users,
        value: "5K+",
        label: "Happy Patients",
        description:
            "Thousands of patients treated with care and comfort.",
    },
    {
        icon: Stethoscope,
        value: "10+",
        label: "Dental Treatments",
        description:
            "Comprehensive solutions for every dental need.",
    },
    {
        icon: Smile,
        value: "98%",
        label: "Patient Satisfaction",
        description:
            "Focused on comfortable treatment and beautiful smiles.",
    },
];

const ProfessionalResults = () => {
    return (
        <section
            id="results"
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
                        -right-32
                        -top-32
                        h-80
                        w-80
                        rounded-full
                        bg-[var(--accent)]
                        opacity-[0.04]
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        -bottom-32
                        -left-32
                        h-80
                        w-80
                        rounded-full
                        bg-[var(--primary-light)]
                        opacity-[0.06]
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
                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="
                        mx-auto
                        mb-14
                        max-w-3xl
                        text-center
                    "
                >
                    {/* Section Label */}
                    <div
                        className="
                            mb-4
                            flex
                            items-center
                            justify-center
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
                            Professional Results
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
                            text-3xl
                            font-bold
                            leading-tight
                            text-[var(--doctor-text)]
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        Experience You Can{" "}
                        <span className="text-[var(--accent)]">
                            Trust
                        </span>
                    </h2>

                    {/* Description */}
                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-sm
                            leading-7
                            text-[var(--doctor-muted)]
                            sm:text-base
                        "
                    >
                        Our commitment to quality dental care, modern
                        treatment techniques, and patient comfort helps us
                        create healthier and more confident smiles.
                    </p>
                </motion.div>

                {/* Results Grid */}
                <div
                    className="
                        grid
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {results.map((result, index) => {
                        const Icon = result.icon;

                        return (
                            <motion.div
                                key={result.label}
                                initial={{
                                    opacity: 0,
                                    y: 35,
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
                                    duration: 0.6,
                                    delay: index * 0.1,
                                    ease: [
                                        0.22,
                                        1,
                                        0.36,
                                        1,
                                    ],
                                }}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-[var(--border)]
                                    bg-[var(--doctor-card)]
                                    p-7
                                    text-center
                                    shadow-sm
                                    transition-all
                                    duration-500
                                    ease-[cubic-bezier(0.22,1,0.36,1)]
                                    hover:-translate-y-2
                                    hover:border-[var(--accent)]
                                    hover:shadow-xl
                                "
                            >
                                {/* Top Accent Line */}
                                <div
                                    className="
                                        absolute
                                        left-0
                                        right-0
                                        top-0
                                        h-0.5
                                        origin-left
                                        scale-x-0
                                        bg-[var(--accent)]
                                        transition-transform
                                        duration-500
                                        ease-out
                                        group-hover:scale-x-100
                                    "
                                />

                                {/* Icon */}
                                <div
                                    className="
                                        mx-auto
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-[var(--primary-light)]
                                        transition-all
                                        duration-500
                                        ease-[cubic-bezier(0.22,1,0.36,1)]
                                        group-hover:scale-110
                                        group-hover:bg-[var(--primary)]
                                    "
                                >
                                    <Icon
                                        size={28}
                                        strokeWidth={1.7}
                                        className="
                                            text-[var(--accent)]
                                            transition-transform
                                            duration-500
                                            group-hover:scale-110
                                        "
                                    />
                                </div>

                                {/* Number */}
                                <div
                                    className="
                                        mt-6
                                        text-4xl
                                        font-bold
                                        tracking-tight
                                        text-[var(--doctor-text)]
                                        transition-colors
                                        duration-500
                                        group-hover:text-[var(--accent)]
                                        sm:text-5xl
                                    "
                                >
                                    {result.value}
                                </div>

                                {/* Label */}
                                <h3
                                    className="
                                        mt-3
                                        text-base
                                        font-semibold
                                        text-[var(--doctor-text)]
                                        transition-colors
                                        duration-500
                                        group-hover:text-[var(--accent)]
                                    "
                                >
                                    {result.label}
                                </h3>

                                {/* Description */}
                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        leading-6
                                        text-[var(--doctor-muted)]
                                    "
                                >
                                    {result.description}
                                </p>

                                {/* Bottom Accent */}
                                <div
                                    className="
                                        mx-auto
                                        mt-6
                                        h-px
                                        w-10
                                        bg-[var(--accent)]
                                        opacity-50
                                        transition-all
                                        duration-500
                                        group-hover:w-20
                                        group-hover:opacity-100
                                    "
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProfessionalResults;