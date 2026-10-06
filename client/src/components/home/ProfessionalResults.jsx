import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    ScanLine,
    Scissors,
    Stethoscope,
} from "lucide-react";

/* =========================================
   TREATMENT CARDS
========================================= */

const treatmentCards = [
    {
        title: "Dental Check-ups",
        description:
            "Daily check-ups keep your mouth healthy by catching problems early.",
        image: "/images/pedodontics.png",
        icon: Stethoscope,
    },
    {
        title: "Root Canal Treatment",
        description:
            "Remove infected pulp, seal the tooth, and preserve your natural smile.",
        image: "/images/root-canal-treatment.png",
        icon: Stethoscope,
    },
    {
        title: "Digital X-Ray",
        description:
            "Clear internal images of teeth and jaw with low radiation exposure.",
        image: "/images/dental-implants.png",
        icon: ScanLine,
    },
    {
        title: "Surgical Removal of Tooth",
        description:
            "Precision extraction removes problematic teeth and promotes swift healing.",
        image: "/images/periodontics.png",
        icon: Scissors,
    },
];

/* =========================================
   BEFORE / AFTER PAIRS
========================================= */

const resultImages = [
    {
        pair: "01",

        before: {
            type: "Before Treatment",
            image: "/images/professional-after-1.jpg",
        },

        after: {
            type: "After Treatment",
            image: "/images/professional-before-1.jpg",
        },
    },

    {
        pair: "02",

        before: {
            type: "Before Treatment",
            image: "/images/professional-before-2.jpg",
        },

        after: {
            type: "After Treatment",
            image: "/images/professional-after-2.jpg",
        },
    },

    {
        pair: "03",

        before: {
            type: "Before Treatment",
            image: "/images/professional-before-3.jpg",
        },

        after: {
            type: "After Treatment",
            image: "/images/professional-after-3.jpg",
        },
    },
];

/* =========================================
   COMPONENT
========================================= */

const ProfessionalResults = () => {
    const [activePair, setActivePair] = useState(0);
    const [direction, setDirection] = useState(1);

    /* =========================================
         NEXT PAIR
      ========================================== */

    const nextImage = () => {
        setDirection(1);

        setActivePair((current) =>
            current === resultImages.length - 1 ? 0 : current + 1,
        );
    };

    /* =========================================
         PREVIOUS PAIR
      ========================================== */

    const previousImage = () => {
        setDirection(-1);

        setActivePair((current) =>
            current === 0 ? resultImages.length - 1 : current - 1,
        );
    };

    const currentResult = resultImages[activePair];

    return (
        <section
            id="results"
            className="
        relative
        overflow-hidden
        bg-[var(--section-bg)]
        py-16
        transition-colors
        duration-500
        sm:py-20
        lg:py-24
      "
        >
            {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

            <div
                className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
            >
                <div
                    className="
            absolute
            -left-24
            top-20
            h-52
            w-52
            rounded-full
            bg-[var(--accent)]
            opacity-[0.035]
            blur-3xl
          "
                />

                <div
                    className="
            absolute
            -right-24
            top-0
            h-64
            w-64
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
                {/* =========================================
            SECTION HEADING
        ========================================== */}

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
            mb-8
            max-w-4xl
            text-center
            sm:mb-10
          "
                >
                    {/* Label */}

                    <div
                        className="
              mb-3
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
                tracking-[0.2em]
                text-[var(--accent)]
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
              font-extrabold
              leading-tight
              tracking-tight
              text-[var(--doctor-text)]
              sm:text-4xl
              lg:text-5xl
            "
                    >
                        The Best Possible{" "}
                        <span className="text-[var(--accent)]">Results</span>
                    </h2>

                    {/* Description */}

                    <p
                        className="
              mx-auto
              mt-3
              max-w-3xl
              text-sm
              leading-6
              text-[var(--doctor-muted)]
              sm:text-base
            "
                    >
                        Experience the confidence and freshness of a bright, healthy smile
                        after your professional dental treatment.
                    </p>
                </motion.div>

                {/* =========================================
            BEFORE / AFTER SECTION
        ========================================== */}

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
                        amount: 0.15,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
            mx-auto
            max-w-6xl
          "
                >
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={activePair}
                            custom={direction}
                            initial={{
                                opacity: 0,
                                x: direction * 35,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                            }}
                            exit={{
                                opacity: 0,
                                x: direction * -35,
                            }}
                            transition={{
                                duration: 0.45,
                                ease: "easeOut",
                            }}
                        >
                            {/* =====================================
                  IMAGE CONTAINER
              ====================================== */}

                            <div
                                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--doctor-card)]
                  shadow-xl
                "
                            >
                                {/* =================================
                    IMAGE GRID
                ================================== */}

                                <div
                                    className="
                    grid
                    md:grid-cols-2
                  "
                                >
                                    {/* =================================
                      BEFORE IMAGE
                  ================================== */}

                                    <div
                                        className="
                      relative
                      aspect-[4/3]
                      overflow-hidden
                      bg-black
                      md:aspect-[16/10]
                    "
                                    >
                                        <img
                                            src={currentResult.before.image}
                                            alt="Before Treatment"
                                            draggable="false"
                                            className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                                        />

                                        {/* Overlay */}

                                        <div
                                            className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/60
                        via-transparent
                        to-black/10
                      "
                                        />

                                        {/* Before Label */}

                                        <div
                                            className="
                        absolute
                        left-5
                        top-5
                        rounded-full
                        bg-black/65
                        px-4
                        py-2
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-white
                        backdrop-blur-md
                        sm:left-6
                        sm:top-6
                      "
                                        >
                                            Before Treatment
                                        </div>
                                    </div>

                                    {/* =================================
                      AFTER IMAGE
                  ================================== */}

                                    <div
                                        className="
                      relative
                      aspect-[4/3]
                      overflow-hidden
                      bg-black
                      md:aspect-[16/10]
                    "
                                    >
                                        <img
                                            src={currentResult.after.image}
                                            alt="After Treatment"
                                            draggable="false"
                                            className="
                        absolute
                        inset-0
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-105
                      "
                                        />

                                        {/* Overlay */}

                                        <div
                                            className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/45
                        via-transparent
                        to-black/10
                      "
                                        />

                                        {/* After Label */}

                                        <div
                                            className="
                        absolute
                        right-5
                        top-5
                        rounded-full
                        bg-[var(--accent)]
                        px-4
                        py-2
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-white
                        shadow-lg
                        sm:right-6
                        sm:top-6
                      "
                                        >
                                            After Treatment
                                        </div>
                                    </div>
                                </div>

                                {/* =================================
                    CENTER SEPARATOR
                ================================== */}

                                <div
                                    className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    z-20
                    hidden
                    h-full
                    w-[3px]
                    -translate-x-1/2
                    bg-white
                    shadow-[0_0_14px_rgba(0,0,0,0.45)]
                    md:block
                  "
                                >
                                    {/* Center Handle */}

                                    <div
                                        className="
                      absolute
                      left-1/2
                      top-1/2
                      flex
                      h-12
                      w-12
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-white
                      bg-white
                      text-[var(--primary)]
                      shadow-xl
                    "
                                    >
                                        <ArrowLeft size={15} strokeWidth={2.5} />

                                        <ArrowRight size={15} strokeWidth={2.5} />
                                    </div>
                                </div>

                                {/* =================================
                    MOBILE SEPARATOR
                ================================== */}

                                <div
                                    className="
                    relative
                    block
                    h-[3px]
                    w-full
                    bg-white
                    shadow-[0_0_10px_rgba(0,0,0,0.35)]
                    md:hidden
                  "
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* =========================================
              NAVIGATION BUTTONS
          ========================================== */}

                    <div
                        className="
              mt-6
              flex
              items-center
              justify-center
              gap-4
            "
                    >
                        {/* Previous */}

                        <button
                            type="button"
                            onClick={previousImage}
                            aria-label="Previous treatment result"
                            className="
                group
                flex
                h-11
                items-center
                gap-2
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--doctor-card)]
                px-5
                text-sm
                font-semibold
                text-[var(--doctor-text)]
                shadow-sm
                transition-all
                duration-300
                hover:-translate-x-1
                hover:border-[var(--accent)]
                hover:text-[var(--accent)]
              "
                        >
                            <ArrowLeft
                                size={18}
                                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
                            />

                            <span className="hidden sm:inline">Previous</span>
                        </button>

                        {/* Counter */}

                        <div
                            className="
                flex
                min-w-[82px]
                items-center
                justify-center
                gap-2
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--doctor-card)]
                px-4
                py-2.5
                text-xs
                font-semibold
                text-[var(--doctor-muted)]
                shadow-sm
              "
                        >
                            <span
                                className="
                  text-[var(--accent)]
                "
                            >
                                {String(activePair + 1).padStart(2, "0")}
                            </span>

                            <span>/</span>

                            <span>{String(resultImages.length).padStart(2, "0")}</span>
                        </div>

                        {/* Next */}

                        <button
                            type="button"
                            onClick={nextImage}
                            aria-label="Next treatment result"
                            className="
                group
                flex
                h-11
                items-center
                gap-2
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--doctor-card)]
                px-5
                text-sm
                font-semibold
                text-[var(--doctor-text)]
                shadow-sm
                transition-all
                duration-300
                hover:translate-x-1
                hover:border-[var(--accent)]
                hover:text-[var(--accent)]
              "
                        >
                            <span className="hidden sm:inline">Next</span>

                            <ArrowRight
                                size={18}
                                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
                            />
                        </button>
                    </div>

                    {/* =========================================
              DOTS
          ========================================== */}

                    <div
                        className="
              mt-5
              flex
              items-center
              justify-center
              gap-2
            "
                    >
                        {resultImages.map((item, index) => (
                            <button
                                key={item.pair}
                                type="button"
                                onClick={() => {
                                    setDirection(index > activePair ? 1 : -1);

                                    setActivePair(index);
                                }}
                                aria-label={`View result pair ${item.pair}`}
                                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${index === activePair
                                        ? "w-8 bg-[var(--accent)]"
                                        : "w-1.5 bg-[var(--border)]"
                                    }
                `}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* =========================================
            TREATMENT CARDS
        ========================================== */}

                <div
                    className="
            mt-10
            grid
            gap-5
            sm:mt-12
            sm:grid-cols-2
            lg:grid-cols-4
          "
                >
                    {treatmentCards.map((card, index) => {
                        const Icon = card.icon;

                        return (
                            <motion.div
                                key={card.title}
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
                                    delay: index * 0.1,
                                }}
                                className="
                  group
                  relative
                  h-[300px]
                  overflow-hidden
                  rounded-2xl
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
                                {/* Card Image */}

                                <img
                                    src={card.image}
                                    alt={card.title}
                                    draggable="false"
                                    className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-110
                  "
                                />

                                {/* Dark Overlay */}

                                <div
                                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[var(--primary)]
                    via-[var(--primary)]/65
                    to-transparent
                    opacity-95
                  "
                                />

                                {/* Hover Overlay */}

                                <div
                                    className="
                    absolute
                    inset-0
                    bg-[var(--accent)]
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-[0.08]
                  "
                                />

                                {/* Card Content */}

                                <div
                                    className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-6
                    text-white
                  "
                                >
                                    {/* Icon */}

                                    <div
                                        className="
                      mb-4
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--accent)]
                      shadow-lg
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                                    >
                                        <Icon size={21} strokeWidth={2} />
                                    </div>

                                    {/* Title */}

                                    <h3
                                        className="
                      text-lg
                      font-bold
                      leading-tight
                    "
                                    >
                                        {card.title}
                                    </h3>

                                    {/* Description */}

                                    <p
                                        className="
                      mt-2
                      text-sm
                      leading-6
                      text-white/85
                    "
                                    >
                                        {card.description}
                                    </p>

                                    {/* Accent */}

                                    <div
                                        className="
                      mt-4
                      h-[2px]
                      w-8
                      bg-[var(--accent)]
                      transition-all
                      duration-500
                      group-hover:w-16
                    "
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProfessionalResults;
