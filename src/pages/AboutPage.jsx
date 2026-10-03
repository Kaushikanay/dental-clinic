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
        <main
            className="
                min-h-screen
                bg-[var(--page-bg)]
                text-[var(--text)]
                transition-colors
                duration-500
            "
        >

            {/* =====================================================
                HERO
            ===================================================== */}

            <section
                className="
                    relative
                    overflow-hidden
                    bg-[var(--section-bg)]
                    py-24
                    transition-[background-color]
                    duration-500
                    sm:py-28
                    lg:py-32
                "
            >
                {/* Decorative Circle */}

                <div
                    className="
                        absolute
                        -left-32
                        top-10
                        h-72
                        w-72
                        rounded-full
                        bg-[var(--primary-light)]
                        opacity-10
                        transition-all
                        duration-700
                    "
                />

                {/* Decorative Ring */}

                <div
                    className="
                        absolute
                        -right-32
                        bottom-[-100px]
                        h-96
                        w-96
                        rounded-full
                        border-[60px]
                        border-[var(--accent)]
                        opacity-10
                        transition-all
                        duration-700
                    "
                />

                {/* Small Decorative Shape */}

                <div
                    className="
                        absolute
                        right-[20%]
                        top-24
                        hidden
                        h-5
                        w-5
                        rotate-45
                        bg-[var(--accent)]
                        opacity-20
                        transition-all
                        duration-500
                        lg:block
                    "
                />

                <div
                    className="
                        relative
                        mx-auto
                        max-w-7xl
                        px-6
                        lg:px-10
                    "
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                        }}
                        className="max-w-3xl"
                    >
                        {/* Label */}

                        <div className="mb-5 flex items-center gap-3">
                            <span
                                className="
                                    h-[2px]
                                    w-8
                                    bg-[var(--accent)]
                                    transition-colors
                                    duration-500
                                "
                            />

                            <p
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.3em]
                                    text-[var(--accent)]
                                    transition-colors
                                    duration-500
                                "
                            >
                                About Dental Clinic Studio
                            </p>
                        </div>

                        {/* Main Heading */}

                        <h1
                            className="
                                text-4xl
                                font-bold
                                leading-[1.1]
                                text-[var(--text)]
                                transition-colors
                                duration-500
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            Excellence in Dental

                            <span
                                className="
                                    block
                                    text-[var(--accent)]
                                    transition-colors
                                    duration-500
                                "
                            >
                                Care & Compassion
                            </span>
                        </h1>

                        {/* Description */}

                        <p
                            className="
                                mt-6
                                max-w-2xl
                                text-sm
                                leading-7
                                text-[var(--muted)]
                                transition-colors
                                duration-500
                                sm:text-base
                            "
                        >
                            We are dedicated to creating healthy, confident
                            smiles through personalized dental care, modern
                            technology and a comfortable patient experience.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                ABOUT CONTENT
            ===================================================== */}

            <section
                className="
                    relative
                    overflow-hidden
                    bg-[var(--section-bg)]
                    py-20
                    transition-colors
                    duration-500
                    sm:py-24
                    lg:py-28
                "
            >
                {/* Background Decoration */}

                <div
                    className="
                        absolute
                        -right-32
                        top-20
                        h-72
                        w-72
                        rounded-full
                        bg-[var(--primary-light)]
                        opacity-10
                        transition-all
                        duration-700
                    "
                />

                <div
                    className="
                        relative
                        mx-auto
                        grid
                        max-w-7xl
                        items-center
                        gap-12
                        px-6
                        lg:grid-cols-2
                        lg:gap-20
                        lg:px-10
                    "
                >
                    {/* =================================================
                        IMAGE
                    ================================================= */}

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
                        }}
                        className="relative mx-auto w-full max-w-[560px]"
                    >
                        {/* Decorative Circle */}

                        <div
                            className="
                                absolute
                                -left-4
                                -top-4
                                h-24
                                w-24
                                rounded-full
                                bg-[var(--accent-light)]
                                opacity-20
                                transition-colors
                                duration-500
                            "
                        />

                        {/* Image */}

                        <div
                            className="
                                relative
                                z-10
                                overflow-hidden
                                rounded-[2rem]
                                border
                                border-[var(--border)]
                                bg-[var(--card-bg)]
                                shadow-xl
                                transition-colors
                                duration-500
                            "
                        >
                            <img
                                src="/images/about-dental.jpg"
                                alt="Dental Clinic Studio"
                                className="
                                    h-[420px]
                                    w-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    hover:scale-[1.02]
                                    sm:h-[500px]
                                "
                            />
                        </div>

                        {/* Experience Badge */}

                        <div
                            className="
                                absolute
                                bottom-[-20px]
                                right-[-10px]
                                z-20
                                rounded-2xl
                                bg-[var(--primary)]
                                px-7
                                py-5
                                shadow-xl
                                transition-all
                                duration-500
                                sm:right-[-20px]
                            "
                        >
                            <p
                                className="
                                    text-3xl
                                    font-bold
                                    text-[var(--accent)]
                                "
                            >
                                10+
                            </p>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    text-white/70
                                "
                            >
                                Years of Dental Care
                            </p>
                        </div>
                    </motion.div>

                    {/* =================================================
                        CONTENT
                    ================================================= */}

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
                        }}
                    >
                        {/* Label */}

                        <div className="flex items-center gap-3">
                            <span
                                className="
                                    h-[2px]
                                    w-8
                                    bg-[var(--accent)]
                                "
                            />

                            <p
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[var(--accent)]
                                "
                            >
                                Who We Are
                            </p>
                        </div>

                        {/* Heading */}

                        <h2
                            className="
                                mt-4
                                text-3xl
                                font-bold
                                leading-tight
                                text-[var(--text)]
                                transition-colors
                                duration-500
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Your Smile Is Our

                            <span
                                className="
                                    text-[var(--accent)]
                                "
                            >
                                {" "}Commitment
                            </span>
                        </h2>

                        {/* Paragraph */}

                        <p
                            className="
                                mt-6
                                text-sm
                                leading-7
                                text-[var(--muted)]
                                transition-colors
                                duration-500
                                sm:text-base
                            "
                        >
                            At Dental Clinic Studio, we believe dental care
                            should be comfortable, personalized and
                            accessible. Our goal is not only to treat dental
                            problems but also to help every patient maintain a
                            healthy and confident smile.
                        </p>

                        <p
                            className="
                                mt-4
                                text-sm
                                leading-7
                                text-[var(--muted)]
                                transition-colors
                                duration-500
                                sm:text-base
                            "
                        >
                            From routine dental check-ups to advanced
                            restorative and cosmetic treatments, our approach
                            combines modern dentistry with genuine care for
                            every patient.
                        </p>

                        {/* Statistics */}

                        <div className="mt-8 grid grid-cols-2 gap-5">

                            {/* Patients */}

                            <div
                                className="
                                    group
                                    rounded-xl
                                    border
                                    border-[var(--border)]
                                    bg-[var(--card-bg)]
                                    p-5
                                    shadow-sm
                                    transition-all
                                    duration-500
                                    hover:-translate-y-1
                                    hover:shadow-lg
                                "
                            >
                                <p
                                    className="
                                        text-2xl
                                        font-bold
                                        text-[var(--text)]
                                        transition-colors
                                        duration-500
                                        group-hover:text-[var(--accent)]
                                    "
                                >
                                    500+
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-[var(--muted)]
                                    "
                                >
                                    Happy Patients
                                </p>
                            </div>

                            {/* Treatments */}

                            <div
                                className="
                                    group
                                    rounded-xl
                                    border
                                    border-[var(--border)]
                                    bg-[var(--card-bg)]
                                    p-5
                                    shadow-sm
                                    transition-all
                                    duration-500
                                    hover:-translate-y-1
                                    hover:shadow-lg
                                "
                            >
                                <p
                                    className="
                                        text-2xl
                                        font-bold
                                        text-[var(--text)]
                                        transition-colors
                                        duration-500
                                        group-hover:text-[var(--accent)]
                                    "
                                >
                                    15+
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-xs
                                        text-[var(--muted)]
                                    "
                                >
                                    Treatments
                                </p>
                            </div>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                VALUES / WHY CHOOSE US
            ===================================================== */}

            <section
                className="
                    relative
                    overflow-hidden
                    bg-[var(--page-bg)]
                    py-20
                    transition-colors
                    duration-500
                    sm:py-24
                "
            >
                {/* Decorative Background */}

                <div
                    className="
                        absolute
                        -left-32
                        top-20
                        h-72
                        w-72
                        rounded-full
                        bg-[var(--primary-light)]
                        opacity-10
                    "
                />

                <div
                    className="
                        absolute
                        -right-32
                        bottom-[-80px]
                        h-80
                        w-80
                        rounded-full
                        border-[50px]
                        border-[var(--accent)]
                        opacity-10
                    "
                />

                <div
                    className="
                        relative
                        mx-auto
                        max-w-7xl
                        px-6
                        lg:px-10
                    "
                >
                    {/* Heading */}

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
                        className="
                            mx-auto
                            max-w-2xl
                            text-center
                        "
                    >
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
                                    h-[2px]
                                    w-8
                                    bg-[var(--accent)]
                                "
                            />

                            <p
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[var(--accent)]
                                "
                            >
                                Why Choose Us
                            </p>

                            <span
                                className="
                                    h-[2px]
                                    w-8
                                    bg-[var(--accent)]
                                "
                            />
                        </div>

                        <h2
                            className="
                                text-3xl
                                font-bold
                                leading-tight
                                text-[var(--text)]
                                transition-colors
                                duration-500
                                sm:text-4xl
                            "
                        >
                            Dental Care Built Around You
                        </h2>

                        <p
                            className="
                                mt-4
                                text-sm
                                leading-7
                                text-[var(--muted)]
                                transition-colors
                                duration-500
                                sm:text-base
                            "
                        >
                            Our philosophy is simple — provide quality dental
                            care while making every patient feel comfortable
                            and respected.
                        </p>
                    </motion.div>

                    {/* Feature Cards */}

                    <div
                        className="
                            mt-12
                            grid
                            gap-6
                            sm:grid-cols-2
                            lg:grid-cols-4
                        "
                    >
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
                                    viewport={{
                                        once: true,
                                        amount: 0.15,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.08,
                                    }}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-[var(--border)]
                                        bg-[var(--card-bg)]
                                        p-7
                                        shadow-sm
                                        transition-[transform,box-shadow,border-color,background-color]
                                        duration-500
                                        ease-[cubic-bezier(0.22,1,0.36,1)]
                                        hover:-translate-y-2
                                        hover:shadow-xl
                                    "
                                >
                                    {/* Top Accent */}

                                    <div
                                        className="
                                            absolute
                                            left-0
                                            top-0
                                            h-1
                                            w-0
                                            bg-[var(--accent)]
                                            transition-[width]
                                            duration-500
                                            ease-[cubic-bezier(0.22,1,0.36,1)]
                                            group-hover:w-full
                                        "
                                    />

                                    {/* Icon */}

                                    <div
                                        className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-[var(--accent-light)]
                                            text-[var(--accent)]
                                            transition-all
                                            duration-500
                                            group-hover:scale-110
                                            group-hover:bg-[var(--accent)]
                                            group-hover:text-white
                                        "
                                    >
                                        <Icon size={22} />
                                    </div>

                                    {/* Title */}

                                    <h3
                                        className="
                                            mt-6
                                            text-lg
                                            font-bold
                                            text-[var(--text)]
                                            transition-colors
                                            duration-500
                                            group-hover:text-[var(--accent)]
                                        "
                                    >
                                        {feature.title}
                                    </h3>

                                    {/* Description */}

                                    <p
                                        className="
                                            mt-3
                                            text-sm
                                            leading-7
                                            text-[var(--muted)]
                                            transition-colors
                                            duration-500
                                        "
                                    >
                                        {feature.description}
                                    </p>

                                    {/* Bottom Line */}

                                    <div
                                        className="
                                            mt-6
                                            h-px
                                            w-10
                                            bg-[var(--accent)]
                                            transition-[width]
                                            duration-500
                                            group-hover:w-20
                                        "
                                    />
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