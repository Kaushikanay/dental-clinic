import { useState } from "react";
import SEO from "../components/SEO/SEO";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    CalendarCheck,
    Check,
    ChevronDown,
    Clock3,
    ShieldCheck,
    Sparkles,
} from "lucide-react";

import treatmentData from "../services/treatmentData";

const TreatmentDetails = () => {
    const { slug } = useParams();

    const treatment = treatmentData[slug];

    const [openFaq, setOpenFaq] = useState(null);

    /*
    ============================================================
    DYNAMIC SEO
    ============================================================
    */

    const treatmentSEO = {
        orthodontics: {
            title: "Orthodontics Treatment | The SmileMax Dental Clinic",
            description:
                "Explore orthodontic treatment at The SmileMax Dental Clinic in Muzaffarpur, Bihar, for healthier alignment and a confident smile.",
        },

        pedodontics: {
            title: "Pedodontics Treatment | The SmileMax Dental Clinic",
            description:
                "The SmileMax Dental Clinic provides professional pediatric dental care and pedodontic treatments for children in Muzaffarpur, Bihar.",
        },

        periodontics: {
            title: "Periodontics Treatment | The SmileMax Dental Clinic",
            description:
                "Get professional periodontal care at The SmileMax Dental Clinic in Muzaffarpur, Bihar, for healthy gums and better oral health.",
        },

        "root-canal-treatment": {
            title: "Root Canal Treatment | The SmileMax Dental Clinic",
            description:
                "Learn about root canal treatment at The SmileMax Dental Clinic in Muzaffarpur, Bihar, with professional dental care focused on comfort and oral health.",
        },

        "dental-implants": {
            title: "Dental Implants | The SmileMax Dental Clinic",
            description:
                "Explore professional dental implant treatment at The SmileMax Dental Clinic in Muzaffarpur, Bihar, for restoring missing teeth and your smile.",
        },

        "teeth-whitening": {
            title: "Teeth Whitening | The SmileMax Dental Clinic",
            description:
                "Discover professional teeth whitening treatment at The SmileMax Dental Clinic in Muzaffarpur, Bihar, for a brighter and more confident smile.",
        },
    };

    const seo = treatmentSEO[slug];

    /*
    ============================================================
    TREATMENT NOT FOUND
    ============================================================
    */

    if (!treatment) {
        return (
            <main className="min-h-screen bg-[var(--page-bg)] px-6 py-32 text-[var(--text)] transition-colors duration-500">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--primary-light)]">
                        <Sparkles
                            size={32}
                            className="text-[var(--accent)]"
                        />
                    </div>

                    <h1 className="text-4xl font-bold text-[var(--text)]">
                        Treatment Not Found
                    </h1>

                    <p className="mx-auto mt-4 max-w-xl leading-7 text-[var(--muted)]">
                        The treatment you are looking for does not exist or
                        may have been moved.
                    </p>

                    <Link
                        to="/#features"
                        className="
                            mt-8
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-[var(--accent)]
                            px-6
                            py-3
                            font-semibold
                            text-white
                            shadow-lg
                            transition-all
                            duration-500
                            hover:-translate-y-1
                            hover:bg-[var(--accent-light)]
                        "
                    >
                        <ArrowLeft size={18} />
                        Back to Treatments
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <div
            className="
                min-h-screen
                bg-[var(--page-bg)]
                text-[var(--text)]
                transition-colors
                duration-500
            "
        >
            <SEO
                title={
                    seo?.title ||
                    `${treatment.title} | The SmileMax Dental Clinic`
                }
                description={
                    seo?.description ||
                    `${treatment.title} treatment at The SmileMax Dental Clinic in Muzaffarpur, Bihar. Explore professional dental care and treatment options.`
                }
                path={`/services/${slug}`}
            />
            {/* =====================================================
                HERO
            ====================================================== */}

            <section
                className="
                    relative
                    overflow-hidden
                    border-b
                    border-[var(--border)]
                    bg-[var(--section-bg)]
                    transition-colors
                    duration-500
                "
            >
                {/* Background Decoration */}

                <div
                    className="
                        absolute
                        -left-32
                        top-20
                        h-72
                        w-72
                        rounded-full
                        bg-[var(--accent)]
                        opacity-10
                        blur-3xl
                    "
                />

                <div
                    className="
                        absolute
                        -right-32
                        bottom-0
                        h-80
                        w-80
                        rounded-full
                        bg-[var(--primary-light)]
                        opacity-20
                        blur-3xl
                    "
                />

                <div
                    className="
                        relative
                        mx-auto
                        max-w-7xl
                        px-6
                        pb-20
                        pt-28
                        lg:px-8
                        lg:pb-28
                        lg:pt-36
                    "
                >
                    {/* Back */}

                    <Link
                        to="/#features"
                        className="
                            group
                            mb-8
                            inline-flex
                            items-center
                            gap-2
                            text-sm
                            font-semibold
                            text-[var(--muted)]
                            transition-colors
                            duration-300
                            hover:text-[var(--accent)]
                        "
                    >
                        <ArrowLeft
                            size={17}
                            className="
                                transition-transform
                                duration-300
                                group-hover:-translate-x-1
                            "
                        />

                        Back to Treatments
                    </Link>

                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                        {/* HERO CONTENT */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -30,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.7,
                            }}
                        >
                            {/* Treatment Number */}

                            <div className="mb-6 flex items-center gap-3">
                                <span
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-[var(--accent)]
                                        text-sm
                                        font-bold
                                        text-white
                                    "
                                >
                                    {String(treatment.id).padStart(2, "0")}
                                </span>

                                <span
                                    className="
                                        text-sm
                                        font-semibold
                                        uppercase
                                        tracking-[0.2em]
                                        text-[var(--accent)]
                                    "
                                >
                                    Dental Treatment
                                </span>
                            </div>

                            <h1
                                className="
                                    max-w-2xl
                                    text-4xl
                                    font-bold
                                    leading-tight
                                    text-[var(--text)]
                                    sm:text-5xl
                                    lg:text-6xl
                                "
                            >
                                {treatment.title}
                            </h1>

                            <p
                                className="
                                    mt-6
                                    max-w-xl
                                    text-lg
                                    leading-8
                                    text-[var(--muted)]
                                "
                            >
                                {treatment.subtitle}
                            </p>

                            <p
                                className="
                                    mt-5
                                    max-w-xl
                                    leading-7
                                    text-[var(--muted)]
                                "
                            >
                                {treatment.description}
                            </p>

                            {/* Buttons */}

                            <div className="mt-8 flex flex-wrap gap-4">

                                <Link
                                    to="/contact"
                                    className="
                                        group
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        bg-[var(--accent)]
                                        px-6
                                        py-3.5
                                        font-semibold
                                        text-white
                                        shadow-lg
                                        transition-all
                                        duration-500
                                        hover:-translate-y-1
                                        hover:bg-[var(--accent-light)]
                                    "
                                >
                                    <CalendarCheck size={19} />

                                    Book Appointment

                                    <ArrowRight
                                        size={18}
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:translate-x-1
                                        "
                                    />
                                </Link>

                                <Link
                                    to="/contact"
                                    className="
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-[var(--border)]
                                        bg-[var(--card-bg)]
                                        px-6
                                        py-3.5
                                        font-semibold
                                        text-[var(--text)]
                                        transition-all
                                        duration-500
                                        hover:-translate-y-1
                                        hover:border-[var(--accent)]
                                        hover:text-[var(--accent)]
                                    "
                                >
                                    Contact Us
                                </Link>
                            </div>
                        </motion.div>

                        {/* HERO IMAGE */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 30,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.15,
                            }}
                            className="relative"
                        >
                            <div
                                className="
                                    absolute
                                    -inset-3
                                    rounded-[2rem]
                                    bg-[var(--accent)]
                                    opacity-10
                                    blur-2xl
                                "
                            />

                            <div
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[2rem]
                                    border
                                    border-[var(--border)]
                                    bg-[var(--card-bg)]
                                    shadow-2xl
                                "
                            >
                                <img
                                    src={treatment.image}
                                    alt={treatment.title}
                                    className="
                                        h-[360px]
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:scale-105
                                        sm:h-[430px]
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        inset-0
                                        bg-gradient-to-t
                                        from-black/40
                                        via-transparent
                                        to-transparent
                                    "
                                />

                                <div
                                    className="
                                        absolute
                                        bottom-5
                                        left-5
                                        flex
                                        items-center
                                        gap-3
                                        rounded-xl
                                        border
                                        border-white/20
                                        bg-black/40
                                        px-4
                                        py-3
                                        backdrop-blur-md
                                    "
                                >
                                    <ShieldCheck
                                        size={21}
                                        className="text-[var(--accent-light)]"
                                    />

                                    <span className="text-sm font-medium text-white">
                                        Personalized Dental Care
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                OVERVIEW
            ====================================================== */}

            <section
                className="
                    bg-[var(--page-bg)]
                    py-20
                    transition-colors
                    duration-500
                    lg:py-24
                "
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div
                        className="
                            grid
                            gap-12
                            lg:grid-cols-[0.85fr_1.15fr]
                            lg:items-start
                            lg:gap-20
                        "
                    >
                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <span className="h-px w-10 bg-[var(--accent)]" />

                                <span
                                    className="
                                        text-sm
                                        font-bold
                                        uppercase
                                        tracking-[0.18em]
                                        text-[var(--accent)]
                                    "
                                >
                                    Overview
                                </span>
                            </div>

                            <h2
                                className="
                                    text-3xl
                                    font-bold
                                    leading-tight
                                    text-[var(--text)]
                                    sm:text-4xl
                                "
                            >
                                About {treatment.title}
                            </h2>
                        </div>

                        <div>
                            <p
                                className="
                                    text-lg
                                    leading-8
                                    text-[var(--muted)]
                                "
                            >
                                {treatment.overview}
                            </p>

                            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                <InfoCard
                                    icon={Clock3}
                                    title="Personalized Care"
                                    text="Treatment planned according to your individual dental needs."
                                />

                                <InfoCard
                                    icon={ShieldCheck}
                                    title="Professional Approach"
                                    text="Focused on comfort, safety and quality dental care."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                BENEFITS
            ====================================================== */}

            <section
                className="
                    bg-[var(--section-bg)]
                    py-20
                    transition-colors
                    duration-500
                    lg:py-24
                "
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-2xl text-center">
                        <span
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-[var(--accent)]
                            "
                        >
                            Benefits
                        </span>

                        <h2
                            className="
                                mt-3
                                text-3xl
                                font-bold
                                text-[var(--text)]
                                sm:text-4xl
                            "
                        >
                            Why Choose {treatment.title}?
                        </h2>

                        <p
                            className="
                                mt-4
                                leading-7
                                text-[var(--muted)]
                            "
                        >
                            Our treatment approach is designed around your
                            individual dental requirements and long-term oral
                            health.
                        </p>
                    </div>

                    {/* Benefits Grid */}

                    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {treatment.benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
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
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-[var(--primary-light)]
                                        opacity-90
                                        transition-[background-color,transform]
                                        duration-500
                                        ease-[cubic-bezier(0.22,1,0.36,1)]
                                        group-hover:scale-105
                                        group-hover:bg-[var(--primary)]
                                    "
                                >
                                    <Check
                                        size={27}
                                        strokeWidth={1.7}
                                        className="
                                            text-[var(--accent)]
                                            transition-[color,transform]
                                            duration-500
                                            ease-out
                                            group-hover:scale-110
                                            group-hover:text-[var(--accent-light)]
                                        "
                                    />
                                </div>

                                {/* Title */}

                                <h3
                                    className="
                                        mt-6
                                        text-xl
                                        font-bold
                                        text-[var(--text)]
                                        transition-colors
                                        duration-500
                                        group-hover:text-[var(--accent)]
                                    "
                                >
                                    {benefit}
                                </h3>

                                {/* Bottom Line */}

                                <div
                                    className="
                                        mt-6
                                        h-px
                                        w-10
                                        bg-[var(--accent)]
                                        transition-[width]
                                        duration-500
                                        ease-[cubic-bezier(0.22,1,0.36,1)]
                                        group-hover:w-20
                                    "
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                PROCESS
            ====================================================== */}

            <section
                className="
                    bg-[var(--page-bg)]
                    py-20
                    transition-colors
                    duration-500
                    lg:py-24
                "
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-8">

                    <div className="mx-auto max-w-2xl text-center">
                        <span
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-[var(--accent)]
                            "
                        >
                            Treatment Process
                        </span>

                        <h2
                            className="
                                mt-3
                                text-3xl
                                font-bold
                                text-[var(--text)]
                                sm:text-4xl
                            "
                        >
                            How It Works
                        </h2>
                    </div>

                    <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {treatment.process.map((step, index) => (
                            <motion.div
                                key={step.number}
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

                                <div className="mb-5 flex items-center justify-between">

                                    {/* Step Number */}

                                    <div
                                        className="
                                            flex
                                            h-12
                                            w-12
                                            items-center
                                            justify-center
                                            rounded-xl
                                            bg-[var(--primary-light)]
                                            text-sm
                                            font-bold
                                            text-[var(--accent)]
                                            transition-[background-color,transform]
                                            duration-500
                                            ease-[cubic-bezier(0.22,1,0.36,1)]
                                            group-hover:scale-105
                                            group-hover:bg-[var(--primary)]
                                        "
                                    >
                                        {step.number}
                                    </div>

                                    {index < treatment.process.length - 1 && (
                                        <ArrowRight
                                            size={20}
                                            className="
                                                hidden
                                                text-[var(--border)]
                                                transition-all
                                                duration-500
                                                lg:block
                                                group-hover:translate-x-1
                                                group-hover:text-[var(--accent)]
                                            "
                                        />
                                    )}
                                </div>

                                {/* Title */}

                                <h3
                                    className="
                                        text-lg
                                        font-semibold
                                        text-[var(--text)]
                                        transition-colors
                                        duration-500
                                        group-hover:text-[var(--accent)]
                                    "
                                >
                                    {step.title}
                                </h3>

                                {/* Description */}

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        leading-6
                                        text-[var(--muted)]
                                    "
                                >
                                    {step.description}
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
                                        ease-[cubic-bezier(0.22,1,0.36,1)]
                                        group-hover:w-20
                                    "
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
                FAQ
            ====================================================== */}

            <section
                className="
                    bg-[var(--section-bg)]
                    py-20
                    transition-colors
                    duration-500
                    lg:py-24
                "
            >
                <div className="mx-auto max-w-4xl px-6 lg:px-8">

                    <div className="text-center">
                        <span
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-[var(--accent)]
                            "
                        >
                            FAQ
                        </span>

                        <h2
                            className="
                                mt-3
                                text-3xl
                                font-bold
                                text-[var(--text)]
                                sm:text-4xl
                            "
                        >
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="mt-12 space-y-4">
                        {treatment.faqs.map((faq, index) => {
                            const isOpen = openFaq === index;

                            return (
                                <div
                                    key={faq.question}
                                    className="
                                        group
                                        overflow-hidden
                                        rounded-2xl
                                        border
                                        border-[var(--border)]
                                        bg-[var(--card-bg)]
                                        transition-all
                                        duration-500
                                        hover:border-[var(--accent)]
                                    "
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setOpenFaq(
                                                isOpen ? null : index
                                            )
                                        }
                                        className="
                                            flex
                                            w-full
                                            items-center
                                            justify-between
                                            gap-6
                                            px-6
                                            py-5
                                            text-left
                                        "
                                    >
                                        <span
                                            className="
                                                font-semibold
                                                text-[var(--text)]
                                                transition-colors
                                                duration-300
                                                group-hover:text-[var(--accent)]
                                            "
                                        >
                                            {faq.question}
                                        </span>

                                        <span
                                            className={`
                                                flex
                                                h-9
                                                w-9
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-lg
                                                bg-[var(--primary-light)]
                                                text-[var(--accent)]
                                                transition-all
                                                duration-300
                                                ${isOpen
                                                    ? "rotate-180 bg-[var(--primary)]"
                                                    : ""
                                                }
                                            `}
                                        >
                                            <ChevronDown size={18} />
                                        </span>
                                    </button>

                                    <div
                                        className={`
                                            grid
                                            transition-all
                                            duration-300
                                            ${isOpen
                                                ? "grid-rows-[1fr]"
                                                : "grid-rows-[0fr]"
                                            }
                                        `}
                                    >
                                        <div className="overflow-hidden">
                                            <p
                                                className="
                                                    px-6
                                                    pb-6
                                                    leading-7
                                                    text-[var(--muted)]
                                                "
                                            >
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =====================================================
                CTA
            ====================================================== */}

            <section
                className="
                    bg-[var(--page-bg)]
                    py-20
                    transition-colors
                    duration-500
                    lg:py-24
                "
            >
                <div className="mx-auto max-w-5xl px-6 lg:px-8">

                    <div
                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-3xl
                            bg-[var(--primary)]
                            px-6
                            py-14
                            text-center
                            shadow-2xl
                            transition-transform
                            duration-500
                            hover:-translate-y-1
                            sm:px-12
                        "
                    >
                        <div
                            className="
                                absolute
                                -right-20
                                -top-20
                                h-60
                                w-60
                                rounded-full
                                bg-[var(--accent)]
                                opacity-20
                                blur-3xl
                                transition-transform
                                duration-700
                                group-hover:scale-125
                            "
                        />

                        <div
                            className="
                                absolute
                                -bottom-24
                                -left-20
                                h-60
                                w-60
                                rounded-full
                                bg-white
                                opacity-5
                                blur-3xl
                                transition-transform
                                duration-700
                                group-hover:scale-125
                            "
                        />

                        <div className="relative">

                            <Sparkles
                                size={28}
                                className="
                                    mx-auto
                                    text-[var(--accent-light)]
                                    transition-transform
                                    duration-500
                                    group-hover:scale-110
                                "
                            />

                            <h2
                                className="
                                    mt-5
                                    text-3xl
                                    font-bold
                                    text-white
                                    sm:text-4xl
                                "
                            >
                                Ready to Take Care of Your Smile?
                            </h2>

                            <p
                                className="
                                    mx-auto
                                    mt-4
                                    max-w-2xl
                                    leading-7
                                    text-white/70
                                "
                            >
                                Schedule a consultation and let our dental
                                team create a treatment plan tailored to your
                                needs.
                            </p>

                            <Link
                                to="/contact"
                                className="
                                    group/button
                                    mt-8
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-[var(--accent)]
                                    px-7
                                    py-3.5
                                    font-semibold
                                    text-white
                                    transition-all
                                    duration-500
                                    hover:-translate-y-1
                                    hover:bg-[var(--accent-light)]
                                "
                            >
                                <CalendarCheck size={19} />

                                Make an Appointment

                                <ArrowRight
                                    size={18}
                                    className="
                                        transition-transform
                                        duration-300
                                        group-hover/button:translate-x-1
                                    "
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

/*
============================================================
INFO CARD
Same hover language as Features.jsx
============================================================
*/

const InfoCard = ({ icon: Icon, title, text }) => {
    return (
        <div
            className="
                group
                relative
                flex
                gap-4
                overflow-hidden
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--card-bg)]
                p-5
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
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[var(--primary-light)]
                    opacity-90
                    transition-[background-color,transform]
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-105
                    group-hover:bg-[var(--primary)]
                "
            >
                <Icon
                    size={27}
                    strokeWidth={1.7}
                    className="
                        text-[var(--accent)]
                        transition-[color,transform]
                        duration-500
                        ease-out
                        group-hover:scale-110
                        group-hover:text-[var(--accent-light)]
                    "
                />
            </div>

            {/* Content */}

            <div>
                <h3
                    className="
                        font-semibold
                        text-[var(--text)]
                        transition-colors
                        duration-500
                        group-hover:text-[var(--accent)]
                    "
                >
                    {title}
                </h3>

                <p
                    className="
                        mt-1
                        text-sm
                        leading-6
                        text-[var(--muted)]
                    "
                >
                    {text}
                </p>
            </div>

            {/* Bottom Line */}

            <div
                className="
                    absolute
                    bottom-0
                    left-5
                    h-px
                    w-10
                    bg-[var(--accent)]
                    transition-[width]
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:w-20
                "
            />
        </div>
    );
};

export default TreatmentDetails;