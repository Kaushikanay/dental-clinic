import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Dental Care Patient",
        review:
            "The entire treatment experience was comfortable and professional. The doctor explained everything clearly and made me feel completely at ease.",
    },
    {
        name: "Rahul Verma",
        role: "Dental Treatment Patient",
        review:
            "I really appreciated the friendly environment and attention to detail. The treatment was smooth, and the overall experience was excellent.",
    },
    {
        name: "Neha Singh",
        role: "Smile Care Patient",
        review:
            "The clinic has a very welcoming atmosphere. The team was supportive throughout the treatment and helped me feel confident about my smile.",
    },
];

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="
                relative
                overflow-hidden
                bg-[var(--page-bg)]
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
                        -left-32
                        top-20
                        h-72
                        w-72
                        rounded-full
                        bg-[var(--accent)]
                        opacity-[0.035]
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        -right-32
                        bottom-10
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
                            Testimonials
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
                        What Our Patients{" "}
                        <span className="text-[var(--accent)]">
                            Say
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
                        A comfortable experience and quality dental care are
                        at the heart of everything we do.
                    </p>
                </motion.div>

                {/* Testimonials */}
                <div
                    className="
                        grid
                        gap-6
                        md:grid-cols-3
                    "
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={testimonial.name}
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
                                delay: index * 0.12,
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
                                shadow-sm
                                transition-all
                                duration-500
                                ease-[cubic-bezier(0.22,1,0.36,1)]
                                hover:-translate-y-2
                                hover:border-[var(--accent)]
                                hover:shadow-xl
                            "
                        >
                            {/* Top Accent */}
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
                                    group-hover:scale-x-100
                                "
                            />

                            {/* Quote Icon */}
                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[var(--primary-light)]
                                    transition-all
                                    duration-500
                                    group-hover:scale-110
                                    group-hover:bg-[var(--primary)]
                                "
                            >
                                <Quote
                                    size={23}
                                    strokeWidth={1.8}
                                    className="
                                        text-[var(--accent)]
                                    "
                                />
                            </div>

                            {/* Stars */}
                            <div className="mt-6 flex gap-1">
                                {[...Array(5)].map((_, starIndex) => (
                                    <Star
                                        key={starIndex}
                                        size={17}
                                        strokeWidth={1.8}
                                        fill="currentColor"
                                        className="
                                            text-[var(--accent)]
                                        "
                                    />
                                ))}
                            </div>

                            {/* Review */}
                            <p
                                className="
                                    mt-5
                                    text-sm
                                    leading-7
                                    text-[var(--doctor-muted)]
                                    sm:text-base
                                "
                            >
                                “{testimonial.review}”
                            </p>

                            {/* Patient */}
                            <div
                                className="
                                    mt-7
                                    flex
                                    items-center
                                    gap-4
                                "
                            >
                                {/* Initials */}
                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[var(--primary-light)]
                                        text-sm
                                        font-bold
                                        text-[var(--accent)]
                                        transition-all
                                        duration-500
                                        group-hover:bg-[var(--primary)]
                                    "
                                >
                                    {testimonial.name
                                        .split(" ")
                                        .map((word) => word[0])
                                        .join("")}
                                </div>

                                <div>
                                    <h3
                                        className="
                                            text-sm
                                            font-semibold
                                            text-[var(--doctor-text)]
                                            transition-colors
                                            duration-500
                                            group-hover:text-[var(--accent)]
                                        "
                                    >
                                        {testimonial.name}
                                    </h3>

                                    <p
                                        className="
                                            mt-1
                                            text-xs
                                            text-[var(--doctor-muted)]
                                        "
                                    >
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Accent */}
                            <div
                                className="
                                    mt-7
                                    h-px
                                    w-10
                                    bg-[var(--accent)]
                                    opacity-50
                                    transition-all
                                    duration-500
                                    group-hover:w-full
                                    group-hover:opacity-100
                                "
                            />
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;