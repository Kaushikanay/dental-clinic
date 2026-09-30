import { motion } from "framer-motion";
import {
    Clock3,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";

const ContactPage = () => {
    return (
        <main>

            {/* ================= HERO ================= */}
            <section className="bg-[#281238] py-24 sm:py-28">

                <div className="mx-auto max-w-7xl px-6 lg:px-10">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl"
                    >
                        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff6b35]">
                            Get In Touch
                        </p>

                        <h1 className="mt-4 text-4xl font-bold !text-white sm:text-5xl lg:text-6xl">
                            Contact Our
                            <span className="block text-[#ff6b35]">
                                Dental Clinic Studio
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl text-sm leading-7 !text-white/70 sm:text-base">
                            Have a question or want to schedule a dental
                            consultation? Get in touch with our team and
                            we will be happy to help.
                        </p>
                    </motion.div>

                </div>
            </section>

            {/* ================= CONTACT DETAILS ================= */}
            <section className="bg-white py-20 sm:py-24">

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
                                className="transition hover:text-[#ff6b35]"
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
                                className="break-all transition hover:text-[#ff6b35]"
                            >
                                info@dentalclinicstudio.com
                            </a>

                            <p className="mt-2">
                                We usually respond within one business day.
                            </p>
                        </ContactCard>

                    </div>

                </div>
            </section>

            {/* ================= CONTACT FORM ================= */}
            <section className="bg-[#f7f3f8] py-20 sm:py-24">

                <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-10">

                    {/* Left */}
                    <div>

                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ff6b35]">
                            Send Us A Message
                        </p>

                        <h2 className="mt-4 text-3xl font-bold text-[#281238] sm:text-4xl">
                            We Would Love To
                            <span className="text-[#ff6b35]">
                                {" "}Hear From You
                            </span>
                        </h2>

                        <p className="mt-5 max-w-lg text-sm leading-7 text-gray-500">
                            Fill out the form and our team will contact you
                            regarding your question or appointment request.
                        </p>

                        {/* Working Hours */}
                        <div className="mt-8 flex gap-4 rounded-2xl bg-white p-6 shadow-sm">

                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fff0e9] text-[#ff6b35]">
                                <Clock3 size={22} />
                            </div>

                            <div>
                                <h3 className="font-bold text-[#281238]">
                                    Working Hours
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-500">
                                    Monday - Saturday
                                    <br />
                                    9:00 AM - 7:00 PM
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="rounded-3xl bg-white p-7 shadow-xl sm:p-9"
                    >

                        <div className="grid gap-5 sm:grid-cols-2">

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#281238]">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/10"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-semibold text-[#281238]">
                                    Phone Number
                                </label>

                                <input
                                    type="tel"
                                    placeholder="+91"
                                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/10"
                                />
                            </div>

                        </div>

                        <div className="mt-5">
                            <label className="mb-2 block text-sm font-semibold text-[#281238]">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/10"
                            />
                        </div>

                        <div className="mt-5">
                            <label className="mb-2 block text-sm font-semibold text-[#281238]">
                                Subject
                            </label>

                            <input
                                type="text"
                                placeholder="How can we help?"
                                className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/10"
                            />
                        </div>

                        <div className="mt-5">
                            <label className="mb-2 block text-sm font-semibold text-[#281238]">
                                Message
                            </label>

                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#ff6b35] focus:ring-2 focus:ring-[#ff6b35]/10"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-6 w-full rounded-lg bg-[#ff6b35] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#ff8a5c]"
                        >
                            Send Message
                        </button>

                    </motion.form>

                </div>
            </section>

            {/* ================= MAP ================= */}
            <section className="bg-white py-20">

                <div className="mx-auto max-w-7xl px-6 lg:px-10">

                    <div className="overflow-hidden rounded-3xl bg-[#f7f3f8]">

                        <div className="flex min-h-[350px] items-center justify-center p-8 text-center">

                            <div>
                                <MapPin
                                    size={42}
                                    className="mx-auto text-[#ff6b35]"
                                />

                                <h2 className="mt-5 text-2xl font-bold text-[#281238]">
                                    Find Our Clinic
                                </h2>

                                <p className="mt-3 text-sm text-gray-500">
                                    Your clinic location will appear here.
                                </p>

                                <a
                                    href="#"
                                    className="mt-6 inline-flex rounded-lg bg-[#281238] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff6b35]"
                                >
                                    Get Directions
                                </a>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
};

const ContactCard = ({
    icon: Icon,
    title,
    children,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#fff0e9] text-[#ff6b35]">
                <Icon size={22} />
            </div>

            <h3 className="mt-6 text-xl font-bold text-[#281238]">
                {title}
            </h3>

            <div className="mt-3 text-sm leading-7 text-gray-500">
                {children}
            </div>
        </motion.div>
    );
};

export default ContactPage;