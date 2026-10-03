import { useState } from "react";
import { motion } from "framer-motion";
import {
    Clock3,
    Mail,
    MapPin,
    Phone,
    Send,
    CheckCircle2,
    AlertCircle,
    Loader2,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| API CONFIGURATION
|--------------------------------------------------------------------------
|
| Create:
|
| client/.env
|
| VITE_API_URL=http://localhost:5000
|
| Production example:
|
| VITE_API_URL=https://your-backend-domain.com
|
*/

const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

/*
|--------------------------------------------------------------------------
| INITIAL FORM
|--------------------------------------------------------------------------
*/

const initialFormData = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
};

/*
|--------------------------------------------------------------------------
| CONTACT PAGE
|--------------------------------------------------------------------------
*/

const ContactPage = () => {
    const [formData, setFormData] = useState(initialFormData);

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [submitStatus, setSubmitStatus] = useState({
        type: "",
        message: "",
    });

    /*
    |--------------------------------------------------------------------------
    | INPUT CHANGE
    |--------------------------------------------------------------------------
    */

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));

        // Remove previous message when user starts editing again
        if (submitStatus.message) {
            setSubmitStatus({
                type: "",
                message: "",
            });
        }
    };

    /*
    |--------------------------------------------------------------------------
    | FORM VALIDATION
    |--------------------------------------------------------------------------
    */

    const validateForm = () => {
        const name = formData.name.trim();
        const phone = formData.phone.trim();
        const email = formData.email.trim();
        const subject = formData.subject.trim();
        const message = formData.message.trim();

        if (!name) {
            return "Please enter your name.";
        }

        if (name.length < 2) {
            return "Name must contain at least 2 characters.";
        }

        if (!phone) {
            return "Please enter your phone number.";
        }

        const cleanPhone = phone.replace(/\s|-/g, "");

        if (!/^(?:\+91|91)?[6-9]\d{9}$/.test(cleanPhone)) {
            return "Please enter a valid Indian phone number.";
        }

        if (!email) {
            return "Please enter your email address.";
        }

        if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                email
            )
        ) {
            return "Please enter a valid email address.";
        }

        if (!subject) {
            return "Please enter a subject.";
        }

        if (subject.length < 3) {
            return "Subject must contain at least 3 characters.";
        }

        if (!message) {
            return "Please enter your message.";
        }

        if (message.length < 10) {
            return "Message must contain at least 10 characters.";
        }

        return null;
    };

    /*
    |--------------------------------------------------------------------------
    | FORM SUBMIT
    |--------------------------------------------------------------------------
    */

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isSubmitting) {
            return;
        }

        setSubmitStatus({
            type: "",
            message: "",
        });

        /*
        |--------------------------------------------------------------------------
        | VALIDATION
        |--------------------------------------------------------------------------
        */

        const validationError = validateForm();

        if (validationError) {
            setSubmitStatus({
                type: "error",
                message: validationError,
            });

            return;
        }

        setIsSubmitting(true);

        try {
            /*
            |--------------------------------------------------------------------------
            | SEND TO EXPRESS BACKEND
            |--------------------------------------------------------------------------
            */

            const response = await fetch(
                `${API_URL}/api/contact`,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify({
                        name: formData.name.trim(),
                        phone: formData.phone.trim(),
                        email: formData.email.trim(),
                        subject: formData.subject.trim(),
                        message: formData.message.trim(),
                    }),
                }
            );

            /*
            |--------------------------------------------------------------------------
            | RESPONSE
            |--------------------------------------------------------------------------
            */

            let data = {};

            try {
                data = await response.json();
            } catch {
                data = {};
            }

            if (!response.ok) {
                throw new Error(
                    data.message ||
                    "Unable to submit your message. Please try again."
                );
            }

            /*
            |--------------------------------------------------------------------------
            | SUCCESS
            |--------------------------------------------------------------------------
            */

            setSubmitStatus({
                type: "success",
                message:
                    data.message ||
                    "Thank you! Your message has been submitted successfully. Our team will contact you soon.",
            });

            /*
            |--------------------------------------------------------------------------
            | RESET FORM
            |--------------------------------------------------------------------------
            */

            setFormData(initialFormData);
        } catch (error) {
            console.error(
                "Contact form submission error:",
                error
            );

            setSubmitStatus({
                type: "error",
                message:
                    error.message ||
                    "Something went wrong. Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

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
                    transition-colors
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

                {/* Decorative Shape */}

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
                                "
                            />

                            <p
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-[0.3em]
                                    text-[var(--accent)]
                                "
                            >
                                Get In Touch
                            </p>
                        </div>

                        {/* Heading */}

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
                            Contact Our

                            <span
                                className="
                                    block
                                    text-[var(--accent)]
                                "
                            >
                                Dental Clinic Studio
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
                            Have a question or want to schedule a
                            dental consultation? Get in touch with
                            our team and we will be happy to help.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                CONTACT DETAILS
            ===================================================== */}

            <section
                className="
                    bg-[var(--section-bg)]
                    py-20
                    transition-colors
                    duration-500
                    sm:py-24
                "
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Address */}

                        <ContactCard
                            icon={MapPin}
                            title="Visit Our Clinic"
                        >
                            <p>
                                Dental Clinic Studio
                                <br />
                                Your Clinic Address
                                <br />
                                Your City, India
                            </p>
                        </ContactCard>

                        {/* Phone */}

                        <ContactCard
                            icon={Phone}
                            title="Call Us"
                        >
                            <a
                                href="tel:+919999999999"
                                className="
                                    transition-colors
                                    duration-300
                                    hover:text-[var(--accent)]
                                "
                            >
                                +91 99999 99999
                            </a>

                            <p className="mt-2">
                                Mon - Sat: 9:00 AM - 7:00 PM
                            </p>
                        </ContactCard>

                        {/* Email */}

                        <ContactCard
                            icon={Mail}
                            title="Email Us"
                        >
                            <a
                                href="mailto:info@dentalclinicstudio.com"
                                className="
                                    break-all
                                    transition-colors
                                    duration-300
                                    hover:text-[var(--accent)]
                                "
                            >
                                info@dentalclinicstudio.com
                            </a>

                            <p className="mt-2">
                                We usually respond within one
                                business day.
                            </p>
                        </ContactCard>
                    </div>
                </div>
            </section>

            {/* =====================================================
                CONTACT FORM
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
                        grid
                        max-w-7xl
                        gap-12
                        px-6
                        lg:grid-cols-2
                        lg:px-10
                    "
                >
                    {/* =================================================
                        LEFT CONTENT
                    ================================================= */}

                    <div>
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
                                Send Us A Message
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
                            "
                        >
                            We Would Love To

                            <span
                                className="
                                    text-[var(--accent)]
                                "
                            >
                                {" "}
                                Hear From You
                            </span>
                        </h2>

                        {/* Description */}

                        <p
                            className="
                                mt-5
                                max-w-lg
                                text-sm
                                leading-7
                                text-[var(--muted)]
                                transition-colors
                                duration-500
                            "
                        >
                            Fill out the form and our team will
                            contact you regarding your question or
                            appointment request.
                        </p>

                        {/* Working Hours */}

                        <div
                            className="
                                mt-8
                                flex
                                gap-4
                                rounded-2xl
                                border
                                border-[var(--border)]
                                bg-[var(--card-bg)]
                                p-6
                                shadow-sm
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:shadow-lg
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-12
                                    w-12
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[var(--accent-light)]
                                    text-[var(--accent)]
                                    transition-all
                                    duration-500
                                "
                            >
                                <Clock3 size={22} />
                            </div>

                            <div>
                                <h3
                                    className="
                                        font-bold
                                        text-[var(--text)]
                                        transition-colors
                                        duration-500
                                    "
                                >
                                    Working Hours
                                </h3>

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        leading-6
                                        text-[var(--muted)]
                                    "
                                >
                                    Monday - Saturday
                                    <br />
                                    9:00 AM - 7:00 PM
                                </p>
                            </div>
                        </div>

                        {/* Direct Contact */}

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="tel:+919999999999"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-lg
                                    border
                                    border-[var(--border)]
                                    bg-[var(--card-bg)]
                                    px-5
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-[var(--text)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:border-[var(--accent)]
                                    hover:text-[var(--accent)]
                                "
                            >
                                <Phone size={16} />
                                Call Now
                            </a>

                            <a
                                href="mailto:info@dentalclinicstudio.com"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-lg
                                    border
                                    border-[var(--border)]
                                    bg-[var(--card-bg)]
                                    px-5
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-[var(--text)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:border-[var(--accent)]
                                    hover:text-[var(--accent)]
                                "
                            >
                                <Mail size={16} />
                                Email Us
                            </a>
                        </div>
                    </div>

                    {/* =================================================
                        FORM
                    ================================================= */}

                    <motion.form
                        onSubmit={handleSubmit}
                        noValidate
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
                        }}
                        className="
                            rounded-3xl
                            border
                            border-[var(--border)]
                            bg-[var(--card-bg)]
                            p-7
                            shadow-xl
                            transition-colors
                            duration-500
                            sm:p-9
                        "
                    >
                        {/* =================================================
                            STATUS MESSAGE
                        ================================================= */}

                        {submitStatus.message && (
                            <div
                                className={`
                                    mb-6
                                    flex
                                    items-start
                                    gap-3
                                    rounded-xl
                                    border
                                    px-4
                                    py-4
                                    text-sm
                                    leading-6
                                    ${submitStatus.type ===
                                        "success"
                                        ? "border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400"
                                        : "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400"
                                    }
                                `}
                            >
                                {submitStatus.type ===
                                    "success" ? (
                                    <CheckCircle2
                                        size={20}
                                        className="mt-0.5 shrink-0"
                                    />
                                ) : (
                                    <AlertCircle
                                        size={20}
                                        className="mt-0.5 shrink-0"
                                    />
                                )}

                                <span>
                                    {submitStatus.message}
                                </span>
                            </div>
                        )}

                        {/* Name + Phone */}

                        <div className="grid gap-5 sm:grid-cols-2">
                            {/* Name */}

                            <div>
                                <label
                                    htmlFor="contact-name"
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-semibold
                                        text-[var(--text)]
                                    "
                                >
                                    Your Name
                                </label>

                                <input
                                    id="contact-name"
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    minLength={2}
                                    maxLength={80}
                                    autoComplete="name"
                                    placeholder="Enter your name"
                                    className="
                                        w-full
                                        rounded-lg
                                        border
                                        border-[var(--border)]
                                        bg-[var(--page-bg)]
                                        px-4
                                        py-3
                                        text-sm
                                        text-[var(--text)]
                                        outline-none
                                        transition-all
                                        duration-300
                                        placeholder:text-[var(--muted)]
                                        focus:border-[var(--accent)]
                                        focus:ring-2
                                        focus:ring-[var(--accent)]/10
                                    "
                                />
                            </div>

                            {/* Phone */}

                            <div>
                                <label
                                    htmlFor="contact-phone"
                                    className="
                                        mb-2
                                        block
                                        text-sm
                                        font-semibold
                                        text-[var(--text)]
                                    "
                                >
                                    Phone Number
                                </label>

                                <input
                                    id="contact-phone"
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    maxLength={15}
                                    autoComplete="tel"
                                    inputMode="tel"
                                    placeholder="+91 99999 99999"
                                    className="
                                        w-full
                                        rounded-lg
                                        border
                                        border-[var(--border)]
                                        bg-[var(--page-bg)]
                                        px-4
                                        py-3
                                        text-sm
                                        text-[var(--text)]
                                        outline-none
                                        transition-all
                                        duration-300
                                        placeholder:text-[var(--muted)]
                                        focus:border-[var(--accent)]
                                        focus:ring-2
                                        focus:ring-[var(--accent)]/10
                                    "
                                />
                            </div>
                        </div>

                        {/* Email */}

                        <div className="mt-5">
                            <label
                                htmlFor="contact-email"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-semibold
                                    text-[var(--text)]
                                "
                            >
                                Email Address
                            </label>

                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                maxLength={120}
                                autoComplete="email"
                                placeholder="you@example.com"
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-[var(--border)]
                                    bg-[var(--page-bg)]
                                    px-4
                                    py-3
                                    text-sm
                                    text-[var(--text)]
                                    outline-none
                                    transition-all
                                    duration-300
                                    placeholder:text-[var(--muted)]
                                    focus:border-[var(--accent)]
                                    focus:ring-2
                                    focus:ring-[var(--accent)]/10
                                "
                            />
                        </div>

                        {/* Subject */}

                        <div className="mt-5">
                            <label
                                htmlFor="contact-subject"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-semibold
                                    text-[var(--text)]
                                "
                            >
                                Subject
                            </label>

                            <input
                                id="contact-subject"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                minLength={3}
                                maxLength={150}
                                placeholder="How can we help?"
                                className="
                                    w-full
                                    rounded-lg
                                    border
                                    border-[var(--border)]
                                    bg-[var(--page-bg)]
                                    px-4
                                    py-3
                                    text-sm
                                    text-[var(--text)]
                                    outline-none
                                    transition-all
                                    duration-300
                                    placeholder:text-[var(--muted)]
                                    focus:border-[var(--accent)]
                                    focus:ring-2
                                    focus:ring-[var(--accent)]/10
                                "
                            />
                        </div>

                        {/* Message */}

                        <div className="mt-5">
                            <label
                                htmlFor="contact-message"
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-semibold
                                    text-[var(--text)]
                                "
                            >
                                Message
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                minLength={10}
                                maxLength={2000}
                                rows="5"
                                placeholder="Write your message..."
                                className="
                                    w-full
                                    resize-none
                                    rounded-lg
                                    border
                                    border-[var(--border)]
                                    bg-[var(--page-bg)]
                                    px-4
                                    py-3
                                    text-sm
                                    text-[var(--text)]
                                    outline-none
                                    transition-all
                                    duration-300
                                    placeholder:text-[var(--muted)]
                                    focus:border-[var(--accent)]
                                    focus:ring-2
                                    focus:ring-[var(--accent)]/10
                                "
                            />

                            <div className="mt-2 text-right text-xs text-[var(--muted)]">
                                {formData.message.length}/2000
                            </div>
                        </div>

                        {/* Submit */}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="
                                mt-6
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                bg-[var(--accent)]
                                px-6
                                py-3.5
                                text-sm
                                font-semibold
                                !text-white
                                shadow-md
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:bg-[var(--accent-light)]
                                hover:shadow-lg
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                                disabled:hover:translate-y-0
                            "
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2
                                        size={18}
                                        className="animate-spin"
                                    />
                                    <span className="!text-white">
                                        Sending...
                                    </span>
                                </>
                            ) : (
                                <>
                                    <Send size={17} />
                                    <span className="!text-white">
                                        Send Message
                                    </span>
                                </>
                            )}
                        </button>

                        {/* Privacy Note */}

                        <p
                            className="
                                mt-4
                                text-center
                                text-xs
                                leading-5
                                text-[var(--muted)]
                            "
                        >
                            Your information is used only to respond
                            to your enquiry or appointment request.
                        </p>
                    </motion.form>
                </div>
            </section>

            {/* =====================================================
                MAP
            ===================================================== */}

            <section
                className="
                    bg-[var(--section-bg)]
                    py-20
                    transition-colors
                    duration-500
                "
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-10">
                    <div
                        className="
                            overflow-hidden
                            rounded-3xl
                            border
                            border-[var(--border)]
                            bg-[var(--card-bg)]
                            shadow-sm
                            transition-colors
                            duration-500
                        "
                    >
                        <div
                            className="
                                flex
                                min-h-[350px]
                                items-center
                                justify-center
                                p-8
                                text-center
                            "
                        >
                            <div>
                                <MapPin
                                    size={42}
                                    className="
                                        mx-auto
                                        text-[var(--accent)]
                                    "
                                />

                                <h2
                                    className="
                                        mt-5
                                        text-2xl
                                        font-bold
                                        text-[var(--text)]
                                        transition-colors
                                        duration-500
                                    "
                                >
                                    Find Our Clinic
                                </h2>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        text-[var(--muted)]
                                    "
                                >
                                    Your clinic location will appear
                                    here.
                                </p>

                                {/* Replace address with actual clinic
                                    address when available */}

                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Dental+Clinic+Studio+India"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        mt-6
                                        inline-flex
                                        items-center
                                        gap-2
                                        rounded-lg
                                        bg-[var(--primary)]
                                        px-6
                                        py-3
                                        text-sm
                                        font-semibold
                                        !text-white
                                        transition-all
                                        duration-300
                                        hover:-translate-y-0.5
                                        hover:bg-[var(--accent)]
                                    "
                                >
                                    <MapPin size={17} />
                                    <span className="!text-white">
                                        Get Directions
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

/*
|--------------------------------------------------------------------------
| CONTACT CARD
|--------------------------------------------------------------------------
*/

const ContactCard = ({
    icon: Icon,
    title,
    children,
}) => {
    return (
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
                amount: 0.15,
            }}
            transition={{
                duration: 0.5,
            }}
            className="
                group
                rounded-2xl
                border
                border-[var(--border)]
                bg-[var(--card-bg)]
                p-7
                shadow-sm
                transition-[transform,box-shadow,background-color,border-color]
                duration-500
                ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-2
                hover:shadow-xl
            "
        >
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
                    text-xl
                    font-bold
                    text-[var(--text)]
                    transition-colors
                    duration-500
                    group-hover:text-[var(--accent)]
                "
            >
                {title}
            </h3>

            {/* Content */}

            <div
                className="
                    mt-3
                    text-sm
                    leading-7
                    text-[var(--muted)]
                    transition-colors
                    duration-500
                "
            >
                {children}
            </div>
        </motion.div>
    );
};

export default ContactPage;