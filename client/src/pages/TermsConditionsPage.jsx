
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO/SEO";
import {
    ShieldCheck,
    Database,
    Lock,
    Cookie,
    UserCheck,
    Users,
    RefreshCw,
    Mail,
    ArrowLeft,
    ChevronDown,
    CheckCircle2,
    Eye,
    FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const sections = [
    {
        id: "introduction",
        number: "01",
        icon: ShieldCheck,
        title: "Introduction",
        content: (
            <>
                <p>
                    Welcome to The Smile Max Dentistry. We respect your privacy and are
                    committed to handling information submitted through this website
                    responsibly.
                </p>

                <p>
                    This Privacy Policy explains what information may be collected when
                    you use our website, why that information may be used, and the
                    measures we take to protect it.
                </p>
            </>
        ),
    },
    {
        id: "information",
        number: "02",
        icon: Database,
        title: "Information We Collect",
        content: (
            <>
                <p>
                    Depending on how you interact with the website, we may collect
                    information that you voluntarily provide, including:
                </p>

                <ul className="list-disc space-y-2 pl-5">
                    <li>Your name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Appointment or enquiry details</li>
                    <li>Messages submitted through contact forms</li>
                    <li>Other information you voluntarily provide</li>
                </ul>

                <p>
                    We may also receive limited technical information such as browser
                    type, device information, IP address, and website usage information
                    where applicable.
                </p>
            </>
        ),
    },
    {
        id: "usage",
        number: "03",
        icon: Eye,
        title: "How We Use Your Information",
        content: (
            <>
                <p>Information submitted through the website may be used to:</p>

                <ul className="list-disc space-y-2 pl-5">
                    <li>Respond to contact and appointment enquiries</li>
                    <li>Communicate with you about your request</li>
                    <li>Provide information about dental services</li>
                    <li>Manage enquiries submitted through the website</li>
                    <li>Improve website functionality and user experience</li>
                    <li>Protect the website against misuse or security threats</li>
                    <li>Meet applicable legal or regulatory requirements</li>
                </ul>
            </>
        ),
    },
    {
        id: "medical",
        number: "04",
        icon: UserCheck,
        title: "Medical & Sensitive Information",
        content: (
            <>
                <p>
                    The website is primarily intended for general information,
                    communication, and appointment enquiries.
                </p>

                <p>
                    Please avoid submitting unnecessary sensitive medical information
                    through general website forms unless specifically requested by the
                    clinic.
                </p>

                <p>
                    Information available on this website does not replace an in-person
                    dental examination, professional diagnosis, or treatment plan.
                </p>
            </>
        ),
    },
    {
        id: "security",
        number: "05",
        icon: Lock,
        title: "Data Security",
        content: (
            <>
                <p>
                    We take reasonable technical and organizational measures to protect
                    information submitted through the website from unauthorized access,
                    alteration, disclosure, or misuse.
                </p>

                <p>
                    However, no internet transmission or electronic storage system can be
                    guaranteed to be completely secure.
                </p>

                <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--section-bg)] p-4">
                    <div className="flex gap-3">
                        <CheckCircle2
                            size={19}
                            className="mt-0.5 shrink-0 text-[var(--accent)]"
                        />

                        <p className="text-sm leading-6 text-[var(--muted)]">
                            Access to submitted information should be limited to people or
                            systems that reasonably need it to process your enquiry or
                            operate the website.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        id: "sharing",
        number: "06",
        icon: Users,
        title: "Sharing of Information",
        content: (
            <>
                <p>
                    We do not intentionally sell or rent personal information submitted
                    through this website.
                </p>

                <p>
                    Information may be shared when reasonably necessary to operate the
                    website, process your request, provide a requested service, comply
                    with applicable law, or protect our legal rights.
                </p>

                <p>
                    Where third-party service providers are used, their involvement
                    should be limited to the services they provide for the website or
                    clinic.
                </p>
            </>
        ),
    },
    {
        id: "cookies",
        number: "07",
        icon: Cookie,
        title: "Cookies & Website Usage",
        content: (
            <>
                <p>
                    The website may use cookies or similar technologies to support
                    website functionality, understand usage patterns, or improve the
                    browsing experience.
                </p>

                <p>
                    You can control or disable cookies through your browser settings.
                    Disabling certain cookies may affect some website functionality.
                </p>
            </>
        ),
    },
    {
        id: "retention",
        number: "08",
        icon: Database,
        title: "Data Storage & Retention",
        content: (
            <>
                <p>
                    Information submitted through the website may be stored for as long
                    as reasonably necessary to respond to enquiries, maintain appropriate
                    records, provide services, meet operational requirements, or comply
                    with applicable legal obligations.
                </p>

                <p>
                    Actual retention periods may depend on the nature of the information
                    and the clinic's operational and legal requirements.
                </p>
            </>
        ),
    },
    {
        id: "rights",
        number: "09",
        icon: UserCheck,
        title: "Your Privacy Choices",
        content: (
            <>
                <p>
                    Depending on applicable law, you may have rights regarding personal
                    information you have provided, including requesting access,
                    correction, or deletion of information.
                </p>

                <p>
                    To make a privacy-related request, please contact the clinic using
                    the contact details provided below.
                </p>
            </>
        ),
    },
    {
        id: "updates",
        number: "10",
        icon: RefreshCw,
        title: "Updates to This Policy",
        content: (
            <>
                <p>
                    This Privacy Policy may be updated from time to time to reflect
                    changes in website functionality, services, operational practices,
                    or applicable requirements.
                </p>

                <p>
                    When changes are made, the updated version will be published on this
                    page together with a revised "Last Updated" date.
                </p>
            </>
        ),
    },
    {
        id: "contact",
        number: "11",
        icon: Mail,
        title: "Contact Us",
        content: (
            <>
                <p>
                    If you have questions, concerns, or requests relating to this
                    Privacy Policy, please contact the clinic.
                </p>

                <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--section-bg)] p-5">
                    <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent)]">
                        Privacy Contact
                    </p>

                    <a
                        href="mailto:info@dentalclinicstudio.com"
                        className="text-sm font-semibold !text-[var(--text)] transition-colors duration-300 hover:!text-[var(--accent)]"
                    >
                        dsmilemax@gmail.com
                    </a>
                </div>
            </>
        ),
    },
];

const faqs = [
    {
        question: "Do you sell my personal information?",
        answer:
            "We do not intentionally sell or rent personal information submitted through this website.",
    },
    {
        question: "Why do you need my contact information?",
        answer:
            "Contact information may be required to respond to your enquiry, discuss an appointment request, or provide information about the services you requested.",
    },
    {
        question: "Can I request correction or deletion of my information?",
        answer:
            "Depending on applicable requirements, you may contact the clinic to request access, correction, or deletion of information that you have submitted.",
    },
    {
        question: "Does this website provide medical advice?",
        answer:
            "No. Website content is for general information only and should not replace examination, diagnosis, or advice from a qualified dental professional.",
    },
];

function PrivacyCard({ section, index }) {
    const Icon = section.icon;

    return (
        <motion.section
            id={section.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
                duration: 0.55,
                delay: Math.min(index * 0.04, 0.2),
            }}
            whileHover={{
                y: -5,
                transition: {
                    duration: 0.25,
                    ease: "easeOut",
                },
            }}
            className="
        group relative scroll-mt-28 overflow-hidden
        rounded-2xl border border-[var(--border)]
        bg-[var(--card-bg)]
        p-6 md:p-8
        shadow-sm
        transition-all duration-300
        hover:border-[var(--accent)]
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]
        dark:hover:shadow-[0_18px_45px_rgba(0,0,0,0.30)]
      "
        >
            {/* Top accent animation */}
            <div
                className="
          absolute left-0 top-0
          h-1 w-0
          bg-[var(--accent)]
          transition-all duration-500
          group-hover:w-full
        "
            />

            {/* Hover glow */}
            <div
                className="
          pointer-events-none absolute
          -right-20 -top-20
          h-40 w-40
          rounded-full
          bg-[var(--accent)]/10
          opacity-0 blur-3xl
          transition-opacity duration-500
          group-hover:opacity-100
        "
            />

            <div className="relative z-10">
                <div className="mb-6 flex items-start gap-4">
                    <div
                        className="
              flex h-12 w-12 shrink-0 items-center justify-center
              rounded-xl
              bg-[var(--accent)]/10
              text-[var(--accent)]
              transition-all duration-300
              group-hover:scale-110
              group-hover:bg-[var(--accent)]
              group-hover:!text-white
            "
                    >
                        <Icon size={21} />
                    </div>

                    <div className="min-w-0">
                        <span className="mb-1 block text-xs font-bold tracking-[0.2em] text-[var(--accent)]">
                            {section.number}
                        </span>

                        <h2
                            className="
                text-xl font-bold
                !text-[var(--text)]
                transition-colors duration-300
                group-hover:!text-[var(--accent)]
                md:text-2xl
              "
                        >
                            {section.title}
                        </h2>
                    </div>
                </div>

                <div
                    className="
            space-y-4
            text-sm leading-7
            !text-[var(--muted)]
          "
                >
                    {section.content}
                </div>
            </div>
        </motion.section>
    );
}

function FAQItem({ faq, index, openIndex, setOpenIndex }) {
    const isOpen = openIndex === index;

    return (
        <div
            className="
        overflow-hidden rounded-2xl
        border border-[var(--border)]
        bg-[var(--card-bg)]
        transition-all duration-300
        hover:border-[var(--accent)]
      "
        >
            <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="
          flex w-full items-center justify-between
          gap-4 px-5 py-5 text-left
        "
            >
                <span className="text-sm font-semibold !text-[var(--text)] md:text-base">
                    {faq.question}
                </span>

                <ChevronDown
                    size={19}
                    className={`shrink-0 text-[var(--accent)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <p
                            className="
                border-t border-[var(--border)]
                px-5 pb-5 pt-4
                text-sm leading-7
                !text-[var(--muted)]
              "
                        >
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function PrivacyPolicyPage() {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <main
            className="
        min-h-screen
        bg-[var(--page-bg)]
        !text-[var(--text)]
        transition-colors duration-500
      "
        >
            <SEO
                title="Terms & Conditions | The SmileMax Dental Clinic"
                description="Read the Terms & Conditions for using The SmileMax Dental Clinic website and its dental services, enquiries and online information."
                path="/terms-and-conditions"
            />
            {/* HERO */}
            <section
                className="
          relative overflow-hidden
          px-5 pb-14 pt-24
          md:px-8 md:pb-20 md:pt-32
        "
            >
                <div
                    className="
            pointer-events-none absolute
            left-1/2 top-0
            h-80 w-80
            -translate-x-1/2
            rounded-full
            bg-[var(--accent)]/10
            blur-3xl
          "
                />

                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65 }}
                    className="relative mx-auto max-w-4xl text-center"
                >
                    <div className="mb-5 flex items-center justify-center gap-3">
                        <span className="h-px w-7 bg-[var(--accent)]" />

                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                            Privacy
                        </span>

                        <span className="h-px w-7 bg-[var(--accent)]" />
                    </div>

                    <div
                        className="
              mx-auto mb-6
              flex h-16 w-16
              items-center justify-center
              rounded-2xl
              bg-[var(--accent)]/10
              text-[var(--accent)]
            "
                    >
                        <ShieldCheck size={30} />
                    </div>

                    <h1
                        className="
              text-4xl font-extrabold
              tracking-tight
              !text-[var(--text)]
              md:text-5xl lg:text-6xl
            "
                    >
                        Privacy Policy
                    </h1>

                    <p
                        className="
              mx-auto mt-5 max-w-2xl
              text-sm leading-7
              !text-[var(--muted)]
              md:text-base
            "
                    >
                        We value your privacy. Learn how information submitted through
                        The Smile Max Dentistry may be collected, used, stored, and protected.
                    </p>

                    <div
                        className="
              mx-auto mt-6 inline-flex items-center
              rounded-full
              border border-[var(--border)]
              bg-[var(--card-bg)]
              px-4 py-2
              text-xs font-medium
              !text-[var(--muted)]
              shadow-sm
            "
                    >
                        Last Updated · October 2026
                    </div>
                </motion.div>
            </section>

            {/* MAIN CONTENT */}
            <section className="px-5 pb-20 md:px-8">
                <div
                    className="
            mx-auto grid max-w-6xl
            gap-8
            lg:grid-cols-[220px_minmax(0,1fr)]
          "
                >
                    {/* TABLE OF CONTENTS */}
                    <aside className="hidden lg:block">
                        <div
                            className="
                sticky top-28
                rounded-2xl
                border border-[var(--border)]
                bg-[var(--card-bg)]
                p-5
                shadow-sm
              "
                        >
                            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
                                On This Page
                            </p>

                            <nav className="space-y-1">
                                {sections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className="
                      flex items-center gap-2
                      rounded-lg
                      px-3 py-2
                      text-xs font-medium
                      !text-[var(--muted)]
                      transition-all duration-300
                      hover:translate-x-1
                      hover:bg-[var(--accent)]/10
                      hover:!text-[var(--accent)]
                    "
                                    >
                                        <span className="w-5 text-[10px] font-bold text-[var(--accent)]">
                                            {section.number}
                                        </span>

                                        <span className="truncate">{section.title}</span>
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* CONTENT */}
                    <div className="space-y-6">
                        {sections.map((section, index) => (
                            <PrivacyCard
                                key={section.id}
                                section={section}
                                index={index}
                            />
                        ))}

                        {/* FAQ */}
                        <motion.section
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="pt-8"
                        >
                            <div className="mb-6 text-center">
                                <div className="mb-4 flex items-center justify-center gap-3">
                                    <span className="h-px w-7 bg-[var(--accent)]" />

                                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                                        FAQ
                                    </span>

                                    <span className="h-px w-7 bg-[var(--accent)]" />
                                </div>

                                <h2 className="text-3xl font-bold !text-[var(--text)]">
                                    Privacy Questions
                                </h2>
                            </div>

                            <div className="space-y-3">
                                {faqs.map((faq, index) => (
                                    <FAQItem
                                        key={faq.question}
                                        faq={faq}
                                        index={index}
                                        openIndex={openIndex}
                                        setOpenIndex={setOpenIndex}
                                    />
                                ))}
                            </div>
                        </motion.section>

                        {/* IMPORTANT NOTICE */}
                        <div
                            className="
                rounded-2xl
                border border-[var(--border)]
                bg-[var(--card-bg)]
                p-6
                shadow-sm
                md:p-8
              "
                        >
                            <div className="flex gap-4">
                                <FileText
                                    className="mt-1 shrink-0 text-[var(--accent)]"
                                    size={21}
                                />

                                <div>
                                    <h3 className="font-bold !text-[var(--text)]">
                                        Important Notice
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 !text-[var(--muted)]">
                                        This page provides website-level privacy information for
                                        the The Smile Max Dentistry project. Actual clinic ownership
                                        details, legal requirements, retention periods, and
                                        jurisdiction-specific provisions should be reviewed and
                                        finalized according to the clinic's actual operations and
                                        applicable law.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* BACK TO HOME */}
                        <div className="flex justify-center pt-4">
                            <Link
                                to="/"
                                className="
                  group inline-flex items-center gap-2
                  rounded-xl
                  bg-[#281238]
                  px-6 py-3
                  text-sm font-semibold !text-white
                  shadow-md
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-[#ff6b35]
                  hover:shadow-lg
                  dark:bg-[#ff7043]
                  dark:!text-white
                  dark:hover:bg-[#ff8a78]
                "
                            >
                                <ArrowLeft
                                    size={17}
                                    className="
                    !text-white
                    transition-transform duration-300
                    group-hover:-translate-x-1
                  "
                                />

                                <span className="dark:!text-white">Back to Home</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}