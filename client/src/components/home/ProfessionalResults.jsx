import { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    ScanLine,
    Scissors,
    Stethoscope,
} from "lucide-react";

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

const ProfessionalResults = () => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const updateSliderPosition = (clientX, element) => {
        const rect = element.getBoundingClientRect();

        const newPosition =
            ((clientX - rect.left) / rect.width) * 100;

        setSliderPosition(
            Math.min(100, Math.max(0, newPosition))
        );
    };

    const handlePointerDown = (event) => {
        const element = event.currentTarget;

        element.setPointerCapture(event.pointerId);

        updateSliderPosition(event.clientX, element);
    };

    const handlePointerMove = (event) => {
        if (event.buttons !== 1) return;

        updateSliderPosition(
            event.clientX,
            event.currentTarget
        );
    };

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

            <div className="pointer-events-none absolute inset-0 overflow-hidden">
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
                    {/* Section Label */}

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
                        <span className="text-[var(--accent)]">
                            Results
                        </span>
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
                        Experience the confidence and freshness of a
                        bright, healthy smile after your professional
                        cleaning.
                    </p>
                </motion.div>

                {/* =========================================
            BEFORE / AFTER IMAGE
        ========================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.97,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="
            mx-auto
            max-w-5xl
          "
                >
                    <div
                        className="
              relative
              aspect-[2.35/1]
              overflow-hidden
              bg-black
              shadow-sm
              cursor-ew-resize
              touch-none
              select-none
            "
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                    >
                        {/* Main Image */}

                        <img
                            src="/images/professionalresults.jpg"
                            alt="Professional dental treatment results"
                            draggable="false"
                            className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                pointer-events-none
              "
                        />

                        {/* =====================================
                MOVING CENTER DIVIDER
            ====================================== */}

                        <div
                            className="
                pointer-events-none
                absolute
                top-0
                z-10
                h-full
                w-[3px]
                bg-white
                shadow-md
              "
                            style={{
                                left: `${sliderPosition}%`,
                                transform: "translateX(-50%)",
                            }}
                        />

                        {/* =====================================
                MOVING CENTER HANDLE
            ====================================== */}

                        <div
                            className="
                pointer-events-none
                absolute
                top-1/2
                z-20
                flex
                h-12
                w-12
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border-[3px]
                border-white
                bg-white
                shadow-xl
                sm:h-14
                sm:w-14
              "
                            style={{
                                left: `${sliderPosition}%`,
                            }}
                        >
                            <div
                                className="
                  flex
                  items-center
                  gap-0.5
                  text-[var(--primary)]
                "
                            >
                                <ArrowLeft
                                    size={15}
                                    strokeWidth={2.5}
                                />

                                <ArrowRight
                                    size={15}
                                    strokeWidth={2.5}
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* =========================================
            TREATMENT CARDS
        ========================================== */}

                <div
                    className="
            mt-8
            grid
            gap-5
            sm:mt-10
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

                                {/* Dark Gradient */}

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
                                        <Icon
                                            size={21}
                                            strokeWidth={2}
                                        />
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

                                    {/* Bottom Accent */}

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