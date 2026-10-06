import { motion } from "framer-motion";
import {
    ArrowRight,
    Award,
    GraduationCap,
    HeartPulse,
    Sparkles,
} from "lucide-react";

const doctors = [
    {
        name: "Dr. Arya",
        gender: "Female Dental Surgeon",
        image: "/images/Dr. Aarya.PNG",
        qualification: "Dental Surgeon",
        description:
            "Dedicated to providing gentle, personalized and comfortable dental care with a patient-first approach. Every treatment is planned with attention to individual needs and long-term oral health.",
        highlights: [
            {
                icon: GraduationCap,
                title: "Qualified",
                description: "Professional dental care",
            },
            {
                icon: Award,
                title: "Experienced",
                description: "Focused clinical approach",
            },
            {
                icon: HeartPulse,
                title: "Patient First",
                description: "Comfort-focused treatment",
            },
        ],
    },
    {
        name: "Dr. Nitesh Paul",
        gender: "Male Dental Surgeon",
        image: "/images/Dr. Nitesh Paul.PNG",
        qualification: "Dental Surgeon",
        description:
            "Committed to modern, clinically effective dentistry with a focus on accurate diagnosis, comfortable treatment and helping every patient achieve a healthier, more confident smile.",
        highlights: [
            {
                icon: GraduationCap,
                title: "Qualified",
                description: "Professional dental care",
            },
            {
                icon: Award,
                title: "Experienced",
                description: "Focused clinical approach",
            },
            {
                icon: HeartPulse,
                title: "Patient First",
                description: "Personalized treatment",
            },
        ],
    },
];

const DoctorCard = ({ doctor, index }) => {
    return (
        <motion.article
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
                amount: 0.15,
            }}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
            }}
            className="
                group
                relative
                overflow-hidden
                rounded-[2rem]
                border
                border-[var(--border)]
                bg-[var(--doctor-card)]
                shadow-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-2xl
            "
        >
            {/* Decorative Glow */}
            <div
                className="
                    pointer-events-none
                    absolute
                    -right-20
                    -top-20
                    h-52
                    w-52
                    rounded-full
                    bg-[var(--accent)]
                    opacity-[0.06]
                    blur-3xl
                    transition-all
                    duration-700
                    group-hover:opacity-[0.12]
                "
            />

            {/* Doctor Image */}
            <div className="relative p-4 sm:p-5">
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[1.5rem]
                        bg-[var(--primary-light)]
                    "
                >
                    <img
                        src={doctor.image}
                        alt={`${doctor.name} - ${doctor.gender}`}
                        className="
                            h-[380px]
                            w-full
                            object-cover
                            object-top
                            transition-transform
                            duration-700
                            ease-out
                            group-hover:scale-[1.04]
                            sm:h-[440px]
                        "
                    />

                    {/* Image Overlay */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            inset-0
                            bg-gradient-to-t
                            from-black/35
                            via-transparent
                            to-transparent
                        "
                    />

                    {/* Doctor Number */}
                    <div
                        className="
                            absolute
                            left-5
                            top-5
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/20
                            bg-black/25
                            text-xs
                            font-bold
                            text-white
                            backdrop-blur-md
                            transition-all
                            duration-300
                            group-hover:scale-105
                            group-hover:bg-[var(--accent)]
                        "
                    >
                        0{index + 1}
                    </div>

                    {/* Specialty Badge */}
                    <div
                        className="
                            absolute
                            bottom-5
                            left-5
                            rounded-full
                            border
                            border-white/20
                            bg-black/30
                            px-4
                            py-2
                            text-xs
                            font-semibold
                            text-white
                            backdrop-blur-md
                            transition-all
                            duration-300
                            group-hover:-translate-y-1
                            group-hover:bg-[var(--accent)]
                        "
                    >
                        {doctor.gender}
                    </div>
                </div>
            </div>

            {/* Doctor Details */}
            <div className="px-6 pb-7 sm:px-7 sm:pb-8">
                {/* Label */}
                <p
                    className="
                        text-xs
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[var(--accent)]
                    "
                >
                    Meet Your Dentist
                </p>

                {/* Name */}
                <h3
                    className="
                        mt-2
                        text-2xl
                        font-bold
                        text-[var(--doctor-text)]
                        transition-colors
                        duration-500
                        sm:text-3xl
                    "
                >
                    {doctor.name}
                </h3>

                {/* Qualification */}
                <p
                    className="
                        mt-2
                        text-sm
                        font-medium
                        text-[var(--doctor-muted)]
                    "
                >
                    {doctor.qualification}
                </p>

                {/* Description */}
                <p
                    className="
                        mt-5
                        text-sm
                        leading-7
                        text-[var(--doctor-muted)]
                        transition-colors
                        duration-500
                    "
                >
                    {doctor.description}
                </p>

                {/* Highlights */}
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                    {doctor.highlights.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="
                                    rounded-xl
                                    border
                                    border-[var(--border)]
                                    bg-[var(--doctor-bg)]
                                    p-3
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-[var(--accent)]
                                    hover:shadow-md
                                "
                            >
                                <Icon
                                    size={20}
                                    className="
                                        text-[var(--accent)]
                                        transition-transform
                                        duration-300
                                        group-hover:scale-110
                                    "
                                />

                                <p
                                    className="
                                        mt-2
                                        text-xs
                                        font-semibold
                                        text-[var(--doctor-text)]
                                    "
                                >
                                    {item.title}
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-[10px]
                                        leading-4
                                        text-[var(--doctor-muted)]
                                    "
                                >
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <a
                    href="/contact"
                    className="
                        group/cta
                        mt-7
                        inline-flex
                        items-center
                        gap-2
                        rounded-lg
                        bg-[var(--primary)]
                        px-5
                        py-3
                        text-sm
                        font-semibold
                        !text-white
                        shadow-md
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:bg-[var(--accent)]
                        hover:shadow-lg
                    "
                >
                    <span className="!text-white">
                        Book Consultation
                    </span>

                    <ArrowRight
                        size={17}
                        className="
                            !text-white
                            transition-transform
                            duration-300
                            group-hover/cta:translate-x-1
                        "
                    />
                </a>
            </div>
        </motion.article>
    );
};

const DoctorSection = () => {
    return (
        <section
            id="doctor"
            className="
                relative
                overflow-hidden
                bg-[var(--doctor-bg)]
                py-20
                transition-colors
                duration-500
                sm:py-24
                lg:py-28
            "
        >
            {/* Decorative Background */}

            <div
                className="
                    absolute
                    -left-40
                    top-10
                    h-80
                    w-80
                    rounded-full
                    border-[60px]
                    border-[var(--primary-light)]
                    opacity-10
                "
            />

            <div
                className="
                    absolute
                    -right-32
                    bottom-[-80px]
                    h-96
                    w-96
                    rounded-full
                    bg-[var(--primary-light)]
                    opacity-10
                "
            />

            <div
                className="
                    absolute
                    right-[20%]
                    top-20
                    hidden
                    h-4
                    w-4
                    rotate-45
                    bg-[var(--accent)]
                    opacity-50
                    lg:block
                "
            />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                {/* Section Header */}
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
                    className="mx-auto mb-14 max-w-3xl text-center"
                >
                    {/* Section Label */}
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <span
                            className="
                                h-[2px]
                                w-7
                                bg-[var(--accent)]
                                transition-colors
                                duration-500
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
                            Meet Our Doctors
                        </span>

                        <span
                            className="
                                h-[2px]
                                w-7
                                bg-[var(--accent)]
                                transition-colors
                                duration-500
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
                            transition-colors
                            duration-500
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        Your Smile,
                        <span className="text-[var(--accent)]">
                            {" "}Our Expertise
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
                            transition-colors
                            duration-500
                            sm:text-base
                        "
                    >
                        Meet the dental professionals behind The
                        SmileMax. With a patient-first approach, our
                        doctors focus on comfortable care, personalized
                        treatment and healthier smiles.
                    </p>
                </motion.div>

                {/* Doctor Cards */}
                <div
                    className="
                        grid
                        gap-8
                        lg:grid-cols-2
                        lg:gap-10
                    "
                >
                    {doctors.map((doctor, index) => (
                        <DoctorCard
                            key={doctor.name}
                            doctor={doctor}
                            index={index}
                        />
                    ))}
                </div>

                {/* Bottom Trust Message */}
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
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.2,
                    }}
                    className="
                        mx-auto
                        mt-12
                        flex
                        max-w-2xl
                        items-center
                        justify-center
                        gap-3
                        text-center
                    "
                >
                    <Sparkles
                        size={18}
                        className="
                            shrink-0
                            text-[var(--accent)]
                        "
                    />

                    <p
                        className="
                            text-xs
                            leading-5
                            text-[var(--doctor-muted)]
                            sm:text-sm
                        "
                    >
                        Compassionate care. Modern dentistry.
                        <span
                            className="
                                font-semibold
                                text-[var(--doctor-text)]
                            "
                        >
                            {" "}A smile you can trust.
                        </span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default DoctorSection;