import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Award,
    ArrowUpRight,
    X,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

const certificates = [
    {
        id: 1,
        title: "Professional Recognition",
        image: "/images/Recognition-1.PNG",
    },
    {
        id: 2,
        title: "Dental Excellence",
        image: "/images/Recognition-2.PNG",
    },
    {
        id: 3,
        title: "Clinical Recognition",
        image: "/images/Recognition-3.PNG",
    },
    {
        id: 4,
        title: "Professional Achievement",
        image: "/images/Recognition-4.PNG",
    },
];

const Recognition = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openCertificate = (index) => {
        setSelectedIndex(index);
    };

    const closeCertificate = () => {
        setSelectedIndex(null);
    };

    const showPrevious = () => {
        setSelectedIndex((current) =>
            current === 0 ? certificates.length - 1 : current - 1
        );
    };

    const showNext = () => {
        setSelectedIndex((current) =>
            current === certificates.length - 1 ? 0 : current + 1
        );
    };

    return (
        <>
            {/* =========================================================
                RECOGNITION SECTION
            ========================================================= */}

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
                {/* =====================================================
                    DECORATIVE BACKGROUND
                ===================================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -left-32
                        top-20
                        h-72
                        w-72
                        rounded-full
                        bg-[var(--accent)]
                        opacity-[0.04]
                        blur-3xl
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-32
                        bottom-10
                        h-80
                        w-80
                        rounded-full
                        bg-[var(--primary-light)]
                        opacity-[0.06]
                        blur-3xl
                    "
                />

                <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
                    {/* =================================================
                        SECTION HEADER
                    ================================================= */}

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
                                "
                            >
                                Recognition
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
                                text-[var(--text)]
                                transition-colors
                                duration-500
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Our{" "}
                            <span className="text-[var(--accent)]">
                                Recognition
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
                                text-[var(--muted)]
                                transition-colors
                                duration-500
                                sm:text-base
                            "
                        >
                            A collection of professional certifications,
                            achievements and recognitions reflecting our
                            commitment to quality dental care and
                            professional excellence.
                        </p>
                    </motion.div>

                    {/* =================================================
                        CERTIFICATE GRID / MOBILE SLIDER
                    ================================================= */}

                    <div
                        className="
                            flex
                            snap-x
                            snap-mandatory
                            gap-5
                            overflow-x-auto
                            overscroll-x-contain
                            pb-4
                            [scrollbar-width:none]
                            [&::-webkit-scrollbar]:hidden

                            sm:grid
                            sm:grid-cols-2
                            sm:gap-6
                            sm:overflow-visible
                            sm:pb-0

                            lg:grid-cols-4
                        "
                    >
                        {certificates.map((certificate, index) => (
                            <motion.article
                                key={certificate.id}
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
                                    delay: index * 0.1,
                                }}
                                className="
                                    group
                                    relative
                                    min-w-[86%]
                                    snap-center
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-[var(--border)]
                                    bg-[var(--card-bg)]
                                    shadow-sm
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:border-[var(--accent)]
                                    hover:shadow-2xl

                                    sm:min-w-0
                                "
                            >
                                {/* =====================================
                                    CERTIFICATE IMAGE
                                ===================================== */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        openCertificate(index)
                                    }
                                    className="
                                        relative
                                        block
                                        w-full
                                        cursor-pointer
                                        overflow-hidden
                                        text-left
                                    "
                                    aria-label={`View ${certificate.title}`}
                                >
                                    <div
                                        className="
                                            relative
                                            aspect-[3/4]
                                            overflow-hidden
                                            bg-white
                                        "
                                    >
                                        <img
                                            src={certificate.image}
                                            alt={certificate.title}
                                            className="
                                                h-full
                                                w-full
                                                object-cover
                                                transition-transform
                                                duration-700
                                                ease-out
                                                group-hover:scale-[1.04]
                                            "
                                        />

                                        {/* Hover Overlay */}

                                        <div
                                            className="
                                                absolute
                                                inset-0
                                                flex
                                                items-center
                                                justify-center
                                                bg-black/0
                                                transition-all
                                                duration-500
                                                group-hover:bg-black/30
                                            "
                                        >
                                            <div
                                                className="
                                                    flex
                                                    h-12
                                                    w-12
                                                    scale-75
                                                    items-center
                                                    justify-center
                                                    rounded-full
                                                    bg-white
                                                    text-[var(--primary)]
                                                    opacity-0
                                                    shadow-xl
                                                    transition-all
                                                    duration-500
                                                    group-hover:scale-100
                                                    group-hover:opacity-100
                                                "
                                            >
                                                <ArrowUpRight
                                                    size={20}
                                                />
                                            </div>
                                        </div>

                                        {/* Number */}

                                        <div
                                            className="
                                                absolute
                                                left-4
                                                top-4
                                                flex
                                                h-9
                                                w-9
                                                items-center
                                                justify-center
                                                rounded-full
                                                border
                                                border-white/30
                                                bg-black/35
                                                text-[10px]
                                                font-bold
                                                text-white
                                                backdrop-blur-md
                                            "
                                        >
                                            0{index + 1}
                                        </div>
                                    </div>
                                </button>

                                {/* =====================================
                                    CARD FOOTER
                                ===================================== */}

                                <div className="p-5">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-[var(--primary)]
                                                text-white
                                                transition-all
                                                duration-300
                                                group-hover:bg-[var(--accent)]
                                                group-hover:scale-105
                                            "
                                        >
                                            <Award
                                                size={18}
                                                className="text-white"
                                            />
                                        </div>

                                        <div>
                                            <p
                                                className="
                                                    text-[10px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.16em]
                                                    text-[var(--accent)]
                                                "
                                            >
                                                Recognition 0{index + 1}
                                            </p>

                                            <h3
                                                className="
                                                    mt-1
                                                    text-sm
                                                    font-semibold
                                                    text-[var(--text)]
                                                "
                                            >
                                                {certificate.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* =================================================
                        MOBILE SWIPE HINT
                    ================================================= */}

                    <div
                        className="
                            mt-4
                            flex
                            items-center
                            justify-center
                            gap-2
                            text-xs
                            text-[var(--muted)]
                            sm:hidden
                        "
                    >
                        <ChevronLeft
                            size={14}
                            className="text-[var(--accent)]"
                        />

                        <span>
                            Swipe to view more
                        </span>

                        <ChevronRight
                            size={14}
                            className="text-[var(--accent)]"
                        />
                    </div>

                    {/* =================================================
                        BOTTOM TRUST LINE
                    ================================================= */}

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
                            delay: 0.2,
                        }}
                        className="
                            mx-auto
                            mt-12
                            max-w-2xl
                            text-center
                        "
                    >
                        <p
                            className="
                                text-xs
                                leading-6
                                text-[var(--muted)]
                                sm:text-sm
                            "
                        >
                            Professional recognition that reflects our
                            dedication to{" "}
                            <span
                                className="
                                    font-semibold
                                    text-[var(--text)]
                                "
                            >
                                quality, trust and excellence.
                            </span>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* =========================================================
                CERTIFICATE LIGHTBOX
            ========================================================= */}

            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        exit={{
                            opacity: 0,
                        }}
                        className="
                            fixed
                            inset-0
                            z-[100]
                            flex
                            items-center
                            justify-center
                            bg-black/85
                            p-4
                            backdrop-blur-md
                        "
                        onClick={closeCertificate}
                    >
                        {/* =============================================
                            CLOSE BUTTON
                        ============================================= */}

                        <button
                            type="button"
                            onClick={closeCertificate}
                            className="
                                absolute
                                right-5
                                top-5
                                z-20
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                bg-white/10
                                text-white
                                transition-all
                                duration-300
                                hover:scale-110
                                hover:bg-[var(--accent)]
                            "
                            aria-label="Close certificate"
                        >
                            <X size={22} />
                        </button>

                        {/* =============================================
                            PREVIOUS BUTTON
                        ============================================= */}

                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                showPrevious();
                            }}
                            className="
                                absolute
                                left-3
                                z-20
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                bg-white/10
                                text-white
                                transition-all
                                duration-300
                                hover:scale-110
                                hover:bg-[var(--accent)]
                                sm:left-6
                            "
                            aria-label="Previous certificate"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        {/* =============================================
                            IMAGE
                        ============================================= */}

                        <motion.div
                            key={selectedIndex}
                            initial={{
                                opacity: 0,
                                scale: 0.92,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.92,
                            }}
                            transition={{
                                duration: 0.3,
                            }}
                            className="
                                relative
                                max-h-[90vh]
                                max-w-[90vw]
                                overflow-hidden
                                rounded-2xl
                                bg-white
                                shadow-2xl
                            "
                            onClick={(event) =>
                                event.stopPropagation()
                            }
                        >
                            <img
                                src={
                                    certificates[selectedIndex]
                                        .image
                                }
                                alt={
                                    certificates[selectedIndex]
                                        .title
                                }
                                className="
                                    max-h-[90vh]
                                    max-w-[90vw]
                                    object-contain
                                "
                            />
                        </motion.div>

                        {/* =============================================
                            NEXT BUTTON
                        ============================================= */}

                        <button
                            type="button"
                            onClick={(event) => {
                                event.stopPropagation();
                                showNext();
                            }}
                            className="
                                absolute
                                right-3
                                z-20
                                flex
                                h-11
                                w-11
                                items-center
                                justify-center
                                rounded-full
                                bg-white/10
                                text-white
                                transition-all
                                duration-300
                                hover:scale-110
                                hover:bg-[var(--accent)]
                                sm:right-6
                            "
                            aria-label="Next certificate"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* =============================================
                            COUNTER
                        ============================================= */}

                        <div
                            className="
                                absolute
                                bottom-5
                                left-1/2
                                -translate-x-1/2
                                rounded-full
                                border
                                border-white/20
                                bg-black/40
                                px-4
                                py-2
                                text-xs
                                font-semibold
                                text-white
                                backdrop-blur-md
                            "
                        >
                            {String(selectedIndex + 1).padStart(
                                2,
                                "0"
                            )}{" "}
                            /{" "}
                            {String(certificates.length).padStart(
                                2,
                                "0"
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Recognition;