import { motion } from "framer-motion";
import {
    ShieldCheck,
    HeartHandshake,
    Microscope,
    Clock3,
    Sparkles,
    Stethoscope,
} from "lucide-react";

const Features = () => {
    const features = [
        {
            icon: Microscope,
            title: "Advanced Technology",
            description:
                "Modern dental equipment and digital technology for accurate diagnosis and effective treatment.",
        },
        {
            icon: HeartHandshake,
            title: "Personalized Care",
            description:
                "Every treatment plan is designed around your individual dental needs, comfort and goals.",
        },
        {
            icon: Stethoscope,
            title: "Experienced Professionals",
            description:
                "Professional dental care delivered with clinical expertise and attention to detail.",
        },
        {
            icon: ShieldCheck,
            title: "Safe & Comfortable",
            description:
                "A clean, welcoming and comfortable environment designed to make your dental visit easier.",
        },
        {
            icon: Clock3,
            title: "Convenient Care",
            description:
                "Flexible appointment scheduling and a smooth experience from consultation to treatment.",
        },
        {
            icon: Sparkles,
            title: "Beautiful Results",
            description:
                "Our focus is on creating healthy, natural-looking smiles that give you confidence.",
        },
    ];

    return (
        <section
            id="features"
            className="relative overflow-hidden bg-[var(--section-bg)] py-20 transition-colors duration-500 sm:py-24 lg:py-28"
        >
            {/* Decorative Background */}

            <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[var(--primary-light)] opacity-10 transition-all duration-700 ease-out" />

            <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full border-[50px] border-[var(--accent)] opacity-10 transition-all duration-700 ease-out" />

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

                        <span className="h-[2px] w-8 bg-[var(--accent)]" />

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                            Why Choose Us
                        </span>

                        <span className="h-[2px] w-8 bg-[var(--accent)]" />

                    </div>

                    <h2 className="text-3xl font-bold leading-tight text-[var(--text)] transition-colors duration-500 sm:text-4xl lg:text-5xl">
                        Dental Care Designed
                        <span className="text-[var(--accent)]">
                            {" "}Around You
                        </span>
                    </h2>

                    <p className="mt-5 text-sm leading-7 text-[var(--muted)] transition-colors duration-500 sm:text-base">
                        From advanced technology to personalized treatment,
                        we focus on providing a comfortable experience and
                        quality dental care at every stage.
                    </p>
                </motion.div>

                {/* Feature Grid */}

                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <motion.div
                                key={feature.title}
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
                                    amount: 0.15,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-7 shadow-sm transition-[transform,box-shadow,border-color,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Top Accent */}

                                <div className="absolute left-0 top-0 h-1 w-0 bg-[var(--accent)] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />

                                {/* Icon */}

                                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--primary-light)] opacity-90 transition-[background-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:bg-[var(--primary)]">

                                    <Icon
                                        size={27}
                                        strokeWidth={1.7}
                                        className="text-[var(--accent)] transition-[color,transform] duration-500 ease-out group-hover:scale-110 group-hover:text-[var(--accent-light)]"
                                    />

                                </div>

                                {/* Content */}

                                <h3 className="mt-6 text-xl font-bold text-[var(--text)] transition-colors duration-500">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[var(--muted)] transition-colors duration-500">
                                    {feature.description}
                                </p>

                                {/* Bottom Line */}
                                <div className="mt-6 h-px w-10 bg-[var(--accent)] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-20" />
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
};

export default Features;