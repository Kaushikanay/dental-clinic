import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Clock3,
    Mail,
    MapPin,
    Phone,
    Send,
    CheckCircle2,
    AlertCircle,
    Loader2,
    X,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| API CONFIGURATION
|--------------------------------------------------------------------------
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

    const [showSubmitPopup, setShowSubmitPopup] = useState(false);

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

        // Clear old popup/status when user edits again
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

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
    | CLOSE POPUP
    |--------------------------------------------------------------------------
    */

    const closeSubmitPopup = () => {
        setShowSubmitPopup(false);
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

            setShowSubmitPopup(true);

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

            setShowSubmitPopup(true);

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

            setShowSubmitPopup(true);
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
                                The Smile Max Dentistry
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
                                Juran Chapra Main Road
                                <br />
                                Satyanarayan Nursing Home.
                            </p>
                        </ContactCard>

                        {/* Phone */}

                        <ContactCard
                            icon={Phone}
                            title="Call Us"
                        >
                            <a
                                href="tel:+919905030591"
                                className="
            transition-colors
            duration-300
            hover:text-[var(--accent)]
        "
                            >
                                +91 99050 30591
                            </a>

                            <p className="mt-2">
                                Monday - Saturday: 10:00 AM - 7:00 PM
                                <br />
                                Sunday: 10:00 AM - 2:00 PM
                            </p>
                        </ContactCard>

                        {/* Email */}

                        <ContactCard
                            icon={Mail}
                            title="Email Us"
                        >
                            <a
                                href="mailto:dsmilemax@gmail.com"
                                className="
                                    break-all
                                    transition-colors
                                    duration-300
                                    hover:text-[var(--accent)]
                                "
                            >
                                dsmilemax@gmail.com
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
                                    hover:scale-105
                                    hover:bg-[var(--primary)]
                                "
                            >
                                <Clock3
                                    size={27}
                                    strokeWidth={1.7}
                                    className="
                                        text-[var(--accent)]
                                        transition-[color,transform]
                                        duration-500
                                        ease-out
                                    "
                                />
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

                                <div
                                    className="
            mt-3
            space-y-1.5
            text-sm
            leading-6
            text-[var(--muted)]
        "
                                >
                                    <div className="flex justify-between gap-6">
                                        <span>Monday</span>
                                        <span>10:00 AM – 7:00 PM</span>
                                    </div>

                                    <div className="flex justify-between gap-6">
                                        <span>Tuesday</span>
                                        <span>10:00 AM – 7:00 PM</span>
                                    </div>

                                    <div className="flex justify-between gap-6">
                                        <span>Wednesday</span>
                                        <span>10:00 AM – 7:00 PM</span>
                                    </div>

                                    <div className="flex justify-between gap-6">
                                        <span>Thursday</span>
                                        <span>10:00 AM – 7:00 PM</span>
                                    </div>

                                    <div className="flex justify-between gap-6">
                                        <span>Friday</span>
                                        <span>10:00 AM – 7:00 PM</span>
                                    </div>

                                    <div className="flex justify-between gap-6">
                                        <span>Saturday</span>
                                        <span>10:00 AM – 7:00 PM</span>
                                    </div>

                                    <div className="flex justify-between gap-6">
                                        <span>Sunday</span>
                                        <span>10:00 AM – 2:00 PM</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Direct Contact */}

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a
                                href="tel:+9199905030591
"
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
                                href="mailto: dsmilemax@gmail.com
"
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

                            <div
                                className="
                                    mt-2
                                    text-right
                                    text-xs
                                    text-[var(--muted)]
                                "
                            >
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
                transition-all
                duration-500
            "
                    >
                        <div className="grid lg:grid-cols-[1.4fr_0.6fr]">

                            {/* =====================================================
                    GOOGLE MAP
                ===================================================== */}

                            <div className="relative min-h-[350px] lg:min-h-[430px]">
                                <iframe
                                    title="The SmileMax Dentistry Location"
                                    src="https://www.google.com/maps?q=Juran+Chapra+Main+Road,+Above+Satyanarayan+Nursing+Home,+Muzaffarpur,+Bihar&output=embed"
                                    className="
                            absolute
                            inset-0
                            h-full
                            w-full
                            border-0
                            grayscale-[10%]
                        "
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>

                            {/* =====================================================
                    CLINIC INFORMATION
                ===================================================== */}

                            <div
                                className="
                        flex
                        flex-col
                        justify-center
                        bg-[var(--card-bg)]
                        p-8
                        transition-colors
                        duration-500
                        sm:p-10
                        lg:p-12
                    "
                            >
                                {/* Icon */}

                                <div
                                    className="
                            flex
                            h-14
                            w-14
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[var(--primary-light)]
                            transition-all
                            duration-300
                            hover:scale-105
                        "
                                >
                                    <MapPin
                                        size={27}
                                        className="text-[var(--accent)]"
                                    />
                                </div>

                                {/* Heading */}

                                <h2
                                    className="
                            mt-6
                            text-2xl
                            font-bold
                            text-[var(--text)]
                            transition-colors
                            duration-500
                            sm:text-3xl
                        "
                                >
                                    Find Our Clinic
                                </h2>

                                {/* Description */}

                                <p
                                    className="
                            mt-3
                            text-sm
                            leading-6
                            text-[var(--muted)]
                        "
                                >
                                    Visit The SmileMax Dentistry for professional
                                    dental care and a comfortable treatment experience.
                                </p>

                                {/* Address */}

                                <div
                                    className="
                            mt-6
                            border-l-2
                            border-[var(--accent)]
                            pl-4
                        "
                                >
                                    <p
                                        className="
                                text-sm
                                font-semibold
                                leading-6
                                text-[var(--text)]
                            "
                                    >
                                        Juran Chapra Main Road
                                        <br />
                                        Above Satyanarayan Nursing Home.
                                    </p>
                                </div>

                                {/* Get Directions */}

                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Juran+Chapra+Main+Road,+Above+Satyanarayan+Nursing+Home,+Muzaffarpur,+Bihar"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                            mt-7
                            inline-flex
                            w-fit
                            items-center
                            gap-2
                            rounded-lg
                            bg-[var(--primary)]
                            px-6
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

            {/* =====================================================
                SUBMISSION POPUP
            ===================================================== */}

            <AnimatePresence>
                {showSubmitPopup && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        onClick={closeSubmitPopup}
                        className="
                            fixed
                            inset-0
                            z-[9999]
                            flex
                            items-center
                            justify-center
                            bg-black/55
                            px-4
                            py-6
                            backdrop-blur-md
                        "
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                scale: 0.88,
                                y: 30,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.92,
                                y: 20,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            onClick={(event) =>
                                event.stopPropagation()
                            }
                            className="
                                relative
                                w-full
                                max-w-md
                                overflow-hidden
                                rounded-[2rem]
                                border
                                border-[var(--border)]
                                bg-[var(--card-bg)]
                                p-7
                                text-center
                                shadow-2xl
                                sm:p-9
                            "
                        >
                            {/* Accent Top Line */}

                            <div
                                className="
                                    absolute
                                    left-0
                                    right-0
                                    top-0
                                    h-1
                                    bg-[var(--accent)]
                                "
                            />

                            {/* Close Icon */}

                            <button
                                type="button"
                                onClick={closeSubmitPopup}
                                aria-label="Close popup"
                                className="
                                    absolute
                                    right-4
                                    top-4
                                    flex
                                    h-9
                                    w-9
                                    items-center
                                    justify-center
                                    rounded-full
                                    text-[var(--muted)]
                                    transition-all
                                    duration-300
                                    hover:bg-[var(--page-bg)]
                                    hover:text-[var(--text)]
                                "
                            >
                                <X size={18} />
                            </button>

                            {/* Status Icon */}

                            <motion.div
                                initial={{ scale: 0, rotate: -15 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{
                                    delay: 0.12,
                                    duration: 0.5,
                                    type: "spring",
                                    stiffness: 180,
                                    damping: 12,
                                }}
                                className={`
                                    mx-auto
                                    mt-3
                                    flex
                                    h-20
                                    w-20
                                    items-center
                                    justify-center
                                    rounded-full
                                    ${submitStatus.type ===
                                        "success"
                                        ? "bg-green-500/10 text-green-500"
                                        : "bg-red-500/10 text-red-500"
                                    }
                                `}
                            >
                                {submitStatus.type === "success" ? (
                                    <CheckCircle2
                                        size={44}
                                        strokeWidth={1.8}
                                    />
                                ) : (
                                    <AlertCircle
                                        size={44}
                                        strokeWidth={1.8}
                                    />
                                )}
                            </motion.div>

                            {/* Heading */}

                            <motion.h3
                                initial={{
                                    opacity: 0,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.35,
                                }}
                                className="
                                    mt-6
                                    text-2xl
                                    font-bold
                                    text-[var(--text)]
                                    sm:text-3xl
                                "
                            >
                                {submitStatus.type === "success"
                                    ? "Message Sent!"
                                    : "Submission Failed"}
                            </motion.h3>

                            {/* Message */}

                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 12,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.26,
                                    duration: 0.35,
                                }}
                                className="
                                    mx-auto
                                    mt-3
                                    max-w-sm
                                    text-sm
                                    leading-7
                                    text-[var(--muted)]
                                "
                            >
                                {submitStatus.message}
                            </motion.p>

                            {/* Success Information */}

                            {submitStatus.type === "success" && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 10,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay: 0.32,
                                        duration: 0.35,
                                    }}
                                    className="
                                        mt-5
                                        rounded-xl
                                        border
                                        border-[var(--border)]
                                        bg-[var(--page-bg)]
                                        px-4
                                        py-3
                                        text-xs
                                        leading-5
                                        text-[var(--muted)]
                                    "
                                >
                                    Thank you for contacting us.
                                    Our team will review your
                                    enquiry and get back to you
                                    shortly.
                                </motion.div>
                            )}

                            {/* Button */}

                            <motion.button
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.38,
                                    duration: 0.35,
                                }}
                                type="button"
                                onClick={closeSubmitPopup}
                                className="
                                    mt-7
                                    inline-flex
                                    w-full
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-[var(--accent)]
                                    px-6
                                    py-3.5
                                    text-sm
                                    font-semibold
                                    !text-white
                                    shadow-lg
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-[var(--accent-light)]
                                    hover:shadow-xl
                                "
                            >
                                {submitStatus.type === "success"
                                    ? "Done"
                                    : "Try Again"}
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
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