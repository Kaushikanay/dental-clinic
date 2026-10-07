import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Dental Care Patient",
        title: "Best Service",
        review:
            "The entire treatment experience was comfortable and professional. The doctor explained everything clearly and made me feel completely at ease.",
        image: "/images/testimonial-1",
    },

    {
        name: "Rahul Verma",
        role: "Dental Treatment Patient",
        title: "Excellent Experience",
        review:
            "I really appreciated the friendly environment and attention to detail. The treatment was smooth, and the overall experience was excellent.",
        image: "/images/testimonial-2",
    },

    {
        name: "Neha Singh",
        role: "Smile Care Patient",
        title: "Highly Recommended",
        review:
            "The clinic has a very welcoming atmosphere. The team was supportive throughout the treatment and helped me feel confident about my smile.",
        image: "/images/testimonial-3",
    },

    {
        name: "Amit Patel",
        role: "Dental Care Patient",
        title: "Exceptional Service",
        review:
            "The level of care and professionalism exceeded my expectations. I felt well-informed and comfortable throughout the entire process.",
        image: "/images/testimonial-4",
    },

    {
        name: "Sneha Gupta",
        role: "Dental Treatment Patient",
        title: "Outstanding Results",
        review:
            "I am extremely satisfied with the results of my treatment. The staff went above and beyond to ensure I was comfortable and happy with the outcome.",
        image: "/images/testimonial-5",
    },
];

const imageExtensions = [".jpg", ".jpeg", ".png"];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    const [imageIndex, setImageIndex] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    const nextTestimonial = () => {
        setDirection(1);

        setActiveIndex((current) =>
            current === testimonials.length - 1 ? 0 : current + 1,
        );
    };

    const previousTestimonial = () => {
        setDirection(-1);

        setActiveIndex((current) =>
            current === 0 ? testimonials.length - 1 : current - 1,
        );
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextTestimonial();
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    /*
     * Reset image state whenever testimonial changes
     */
    useEffect(() => {
        setImageIndex(0);
        setImageLoaded(false);
    }, [activeIndex]);

    const testimonial = testimonials[activeIndex];

    const currentImage = `${testimonial.image}${imageExtensions[imageIndex]}`;

    const handleImageError = () => {
        if (imageIndex < imageExtensions.length - 1) {
            setImageIndex((current) => current + 1);
        } else {
            setImageLoaded(false);
        }
    };

    return (
        <section
            id="testimonials"
            className="
        relative
        overflow-hidden
        bg-[var(--page-bg)]
        py-20
        transition-colors
        duration-500
        sm:py-24
        lg:py-28
      "
        >
            {/* =========================================
          BACKGROUND DECORATION
      ========================================== */}

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
            opacity-[0.025]
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
            opacity-[0.04]
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
                        ease: "easeOut",
                    }}
                    className="
            mx-auto
            mb-10
            max-w-3xl
            text-center
            sm:mb-12
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
                            Testimonial
                        </span>

                        <span
                            className="
                h-px
                w-7
                bg-[var(--accent)]
              "
                        />
                    </div>

                    <h2
                        className="
              text-4xl
              font-bold
              leading-tight
              text-[var(--doctor-text)]
              sm:text-5xl
              lg:text-6xl
            "
                    >
                        Happy Stories
                    </h2>
                </motion.div>

                {/* =========================================
            TESTIMONIAL CAROUSEL
        ========================================== */}

                <div
                    className="
            relative
            mx-auto
            max-w-5xl
          "
                >
                    {/* LEFT ARROW */}

                    <button
                        type="button"
                        onClick={previousTestimonial}
                        aria-label="Previous testimonial"
                        className="
              absolute
              left-0
              top-1/2
              z-20
              hidden
              -translate-y-1/2
              text-[var(--doctor-muted)]
              transition-all
              duration-300
              hover:-translate-x-2
              hover:text-[var(--accent)]
              md:block
            "
                    >
                        <ArrowLeft size={40} strokeWidth={1.3} />
                    </button>

                    {/* RIGHT ARROW */}

                    <button
                        type="button"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                        className="
              absolute
              right-0
              top-1/2
              z-20
              hidden
              -translate-y-1/2
              text-[var(--doctor-muted)]
              transition-all
              duration-300
              hover:translate-x-2
              hover:text-[var(--accent)]
              md:block
            "
                    >
                        <ArrowRight size={40} strokeWidth={1.3} />
                    </button>

                    {/* CENTER CONTENT */}

                    <div
                        className="
              mx-auto
              max-w-2xl
              px-6
              text-center
              sm:px-12
            "
                    >
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={activeIndex}
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
                                {/* =================================
                    PATIENT IMAGE
                ================================== */}

                                <div className="flex justify-center">
                                    <div
                                        className="
                      relative
                      h-20
                      w-20
                      overflow-hidden
                      rounded-full
                      bg-[var(--primary-light)]
                      shadow-md
                      ring-1
                      ring-[var(--border)]
                    "
                                    >
                                        {imageLoaded ? (
                                            <img
                                                src={currentImage}
                                                alt={testimonial.name}
                                                className="
                          block
                          h-full
                          w-full
                          object-cover
                        "
                                                draggable="false"
                                                onError={handleImageError}
                                            />
                                        ) : (
                                            <>
                                                {/* Try loading image invisibly first */}
                                                <img
                                                    src={currentImage}
                                                    alt=""
                                                    className="hidden"
                                                    onLoad={() => setImageLoaded(true)}
                                                    onError={handleImageError}
                                                />

                                                {/* Fallback only if all images fail */}
                                                <div
                                                    className="
                            absolute
                            inset-0
                            flex
                            items-center
                            justify-center
                            bg-[var(--primary-light)]
                            text-lg
                            font-bold
                            text-white
                          "
                                                >
                                                    {testimonial.name
                                                        .split(" ")
                                                        .map((word) => word[0])
                                                        .join("")
                                                        .slice(0, 2)}
                                                </div>
                                            </>
                                        )}

                                        {/* Hidden loader when image is not yet loaded */}
                                        {!imageLoaded && (
                                            <img
                                                src={currentImage}
                                                alt=""
                                                className="hidden"
                                                onLoad={() => setImageLoaded(true)}
                                                onError={handleImageError}
                                            />
                                        )}
                                    </div>
                                </div>

                                {/* =================================
                    PATIENT NAME
                ================================== */}

                                <p
                                    className="
                    mt-3
                    text-sm
                    font-medium
                    text-[var(--doctor-text)]
                  "
                                >
                                    {testimonial.name}
                                </p>

                                {/* =================================
                    QUOTE
                ================================== */}

                                <div
                                    className="
                    mt-7
                    flex
                    justify-center
                  "
                                >
                                    <Quote
                                        size={42}
                                        strokeWidth={2}
                                        className="
                      fill-[var(--doctor-muted)]
                      text-[var(--doctor-muted)]
                      opacity-20
                    "
                                    />
                                </div>

                                {/* =================================
                    TITLE
                ================================== */}

                                <h3
                                    className="
                    mt-1
                    text-2xl
                    font-medium
                    text-[var(--doctor-text)]
                    sm:text-3xl
                  "
                                >
                                    {testimonial.title}
                                </h3>

                                {/* =================================
                    REVIEW
                ================================== */}

                                <p
                                    className="
                    mx-auto
                    mt-4
                    max-w-2xl
                    text-sm
                    leading-7
                    text-[var(--doctor-muted)]
                    sm:text-base
                    sm:leading-8
                  "
                                >
                                    {testimonial.review}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* =========================================
            MOBILE CONTROLS
        ========================================== */}

                <div
                    className="
            mt-8
            flex
            items-center
            justify-center
            gap-8
            md:hidden
          "
                >
                    <button
                        type="button"
                        onClick={previousTestimonial}
                        aria-label="Previous testimonial"
                        className="
              text-[var(--doctor-muted)]
              transition-colors
              duration-300
              hover:text-[var(--accent)]
            "
                    >
                        <ArrowLeft size={30} strokeWidth={1.4} />
                    </button>

                    <div className="flex items-center gap-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => {
                                    setDirection(index > activeIndex ? 1 : -1);

                                    setActiveIndex(index);
                                }}
                                aria-label={`Testimonial ${index + 1}`}
                                className={`
                  h-1.5
                  rounded-full
                  transition-all
                  duration-300
                  ${activeIndex === index
                                        ? "w-7 bg-[var(--accent)]"
                                        : "w-1.5 bg-[var(--border)]"
                                    }
                `}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={nextTestimonial}
                        aria-label="Next testimonial"
                        className="
              text-[var(--doctor-muted)]
              transition-colors
              duration-300
              hover:text-[var(--accent)]
            "
                    >
                        <ArrowRight size={30} strokeWidth={1.4} />
                    </button>
                </div>

                {/* =========================================
            DESKTOP DOTS
        ========================================== */}

                <div
                    className="
            mt-7
            hidden
            items-center
            justify-center
            gap-2
            md:flex
          "
                >
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            onClick={() => {
                                setDirection(index > activeIndex ? 1 : -1);

                                setActiveIndex(index);
                            }}
                            aria-label={`Testimonial ${index + 1}`}
                            className={`
                h-1.5
                rounded-full
                transition-all
                duration-300
                ${activeIndex === index
                                    ? "w-8 bg-[var(--accent)]"
                                    : "w-1.5 bg-[var(--border)]"
                                }
              `}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
