import {
    CheckCircle2,
    CircleDot,
    Database,
    ExternalLink,
    FileCode2,
    Globe2,
    Layers3,
    LockKeyhole,
    Mail,
    Server,
    ShieldCheck,
    Workflow,
    XCircle,
    Scale,
    BookOpen,
    MousePointer2,
    ArrowUp,
    Award,
    Video,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* =========================================================
   DATA
========================================================= */

const treatments = [
    "Orthodontics",
    "Pedodontics",
    "Periodontics",
    "Root Canal Treatment",
    "Dental Implants",
    "Teeth Whitening",
];

const frontendModules = [
    "Navbar & responsive navigation",
    "Hero section",
    "About section",
    "Doctor section",
    "Recognition & Certifications section",
    "Features section",
    "Treatments section",
    "Professional Results section",
    "Testimonials section",
    "Inside Our Clinic / Local MP4 Video section",
    "Treatment detail pages",
    "Contact page",
    "Contact / appointment form",
    "Footer",
    "Dark / Light theme system",
    "Privacy Policy page",
    "Terms & Conditions page",
    "FAQ sections",
    "Route scroll-to-top behavior",
];

const backendModules = [
    "Express.js REST API",
    "MongoDB Atlas database",
    "Mongoose ODM",
    "Contact model",
    "Contact controller",
    "Contact routes",
    "CORS configuration",
    "Helmet security headers",
    "API rate limiting",
    "Environment variable configuration",
];

const statusItems = [
    {
        label: "Frontend UI & Responsive Design",
        status: "completed",
    },
    {
        label: "React Router Navigation",
        status: "completed",
    },
    {
        label: "Dark / Light Theme",
        status: "completed",
    },
    {
        label: "Treatment Detail Pages",
        status: "completed",
    },
    {
        label: "Professional Results Section",
        status: "completed",
    },
    {
        label: "Testimonials Section",
        status: "completed",
    },
    {
        label: "Recognition & Certifications Section",
        status: "completed",
    },
    {
        label: "Inside Our Clinic / Local MP4 Video",
        status: "completed",
    },
    {
        label: "Contact Form Frontend",
        status: "completed",
    },
    {
        label: "Express Contact API",
        status: "completed",
    },
    {
        label: "MongoDB Atlas Integration",
        status: "completed",
    },
    {
        label: "Contact Data Storage",
        status: "completed",
    },
    {
        label: "Privacy Policy Page",
        status: "completed",
    },
    {
        label: "Terms & Conditions Page",
        status: "completed",
    },
    {
        label: "FAQ Sections",
        status: "completed",
    },
    {
        label: "Route Scroll-to-Top Behavior",
        status: "completed",
    },
    {
        label: "Email Notification",
        status: "pending",
    },
    {
        label: "Admin Dashboard & Authentication",
        status: "pending",
    },
];

/* =========================================================
   REUSABLE UI
========================================================= */

function SectionTitle({ eyebrow, title, description }) {
    return (
        <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-7 bg-[var(--accent)]" />

                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
                    {eyebrow}
                </p>

                <span className="h-px w-7 bg-[var(--accent)]" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-[var(--text)] md:text-4xl">
                {title}
            </h2>

            {description && (
                <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">
                    {description}
                </p>
            )}
        </div>
    );
}

function StatusIcon({ status }) {
    if (status === "completed") {
        return (
            <CheckCircle2
                size={21}
                className="shrink-0 text-emerald-500"
            />
        );
    }

    return (
        <XCircle
            size={21}
            className="shrink-0 text-amber-500"
        />
    );
}

const cardClass = `
  group
  rounded-2xl
  border
  border-[var(--border)]
  bg-[var(--card-bg)]
  p-7
  transition-all
  duration-500
  ease-[cubic-bezier(0.22,1,0.36,1)]
  hover:-translate-y-2
  hover:border-[var(--accent)]
  hover:shadow-xl
`;

const iconBoxClass = `
  flex
  h-14
  w-14
  items-center
  justify-center
  rounded-xl
  bg-[var(--primary-light)]
  transition-all
  duration-500
  ease-[cubic-bezier(0.22,1,0.36,1)]
  group-hover:scale-105
  group-hover:bg-[var(--primary)]
`;

/* =========================================================
   DOCUMENTATION PAGE
========================================================= */

function DocumentationPage() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <main className="min-h-screen bg-[var(--page-bg)] text-[var(--text)]">

            {/* =====================================================
          HERO
      ====================================================== */}

            <section className="relative overflow-hidden border-b border-[var(--border)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,107,53,0.14),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(61,29,82,0.18),transparent_40%)]" />

                <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.65 }}
                        className="max-w-4xl"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card-bg)] px-4 py-2 text-sm font-medium text-[var(--accent)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-lg">
                            <FileCode2 size={17} />
                            Project Documentation
                        </div>

                        <h1 className="text-4xl font-black tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
                            Dental Clinic

                            <span className="block text-[var(--accent)]">
                                MERN Web Application
                            </span>
                        </h1>

                        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">
                            Complete project documentation covering the modern React
                            frontend, responsive clinic sections, treatment modules,
                            professional results, testimonials, recognition,
                            local video integration, legal pages, backend API,
                            MongoDB integration, security, deployment and current
                            implementation status.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            {[
                                "React",
                                "Vite",
                                "Tailwind CSS",
                                "Framer Motion",
                                "React Router",
                                "Express.js",
                                "MongoDB",
                                "Mongoose",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="
                    cursor-default
                    rounded-full
                    border
                    border-[var(--border)]
                    bg-[var(--card-bg)]
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-[var(--text)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[var(--accent)]
                    hover:text-[var(--accent)]
                    hover:shadow-md
                  "
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
          OVERVIEW
      ====================================================== */}

            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <SectionTitle
                    eyebrow="01 — Overview"
                    title="Project Overview"
                    description="The Dental Clinic website is a modern full-stack web application designed for a professional dental clinic. The project combines a responsive React frontend with an Express.js backend and MongoDB Atlas for persistent contact data."
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        {
                            icon: Globe2,
                            title: "Modern Frontend",
                            text: "Responsive React interface with Tailwind CSS, reusable components, animations, clinic sections and dark/light theme support.",
                        },
                        {
                            icon: Server,
                            title: "REST API",
                            text: "Express.js backend handles contact form submissions and validates incoming data before storage.",
                        },
                        {
                            icon: Database,
                            title: "MongoDB Storage",
                            text: "Contact form submissions are successfully stored in MongoDB Atlas through Mongoose.",
                        },
                    ].map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className={cardClass}
                            >
                                <div className={iconBoxClass}>
                                    <Icon
                                        size={26}
                                        strokeWidth={1.7}
                                        className="text-[var(--accent)] transition-all duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <h3 className="mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                    {item.title}
                                </h3>

                                <p className="mt-3 leading-7 text-[var(--muted)]">
                                    {item.text}
                                </p>

                                <div className="mt-5 h-0.5 w-10 bg-[var(--accent)] transition-all duration-500 group-hover:w-20" />
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* =====================================================
          ARCHITECTURE
      ====================================================== */}

            <section className="border-y border-[var(--border)] bg-[var(--section-bg)]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <SectionTitle
                        eyebrow="02 — Architecture"
                        title="Application Architecture"
                        description="The application follows a client-server architecture where the React frontend communicates with the Express API, while MongoDB Atlas provides persistent data storage."
                    />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {[
                            {
                                number: "01",
                                title: "User",
                                text: "Visitor opens the dental clinic website.",
                                icon: Globe2,
                            },
                            {
                                number: "02",
                                title: "React",
                                text: "Frontend collects and validates form data.",
                                icon: Layers3,
                            },
                            {
                                number: "03",
                                title: "Express",
                                text: "API receives and validates the request.",
                                icon: Server,
                            },
                            {
                                number: "04",
                                title: "Mongoose",
                                text: "Validated data is processed through the model.",
                                icon: Workflow,
                            },
                            {
                                number: "05",
                                title: "MongoDB",
                                text: "Contact submission is stored permanently.",
                                icon: Database,
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.number}
                                    className={cardClass}
                                >
                                    <div className="mb-5 flex items-center justify-between">
                                        <span className="text-sm font-bold text-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
                                            {item.number}
                                        </span>

                                        <Icon
                                            size={22}
                                            className="text-[var(--muted)] transition-all duration-500 group-hover:scale-110 group-hover:text-[var(--accent)]"
                                        />
                                    </div>

                                    <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* =====================================================
          FRONTEND
      ====================================================== */}

            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <SectionTitle
                    eyebrow="03 — Frontend"
                    title="Frontend Technology & Modules"
                    description="The frontend is built using React and Vite with Tailwind CSS for styling and Framer Motion for interactive animations and polished user interactions."
                />

                <div className="grid gap-8 lg:grid-cols-2">

                    <div className={cardClass}>
                        <div className="flex items-center gap-4">
                            <div className={iconBoxClass}>
                                <FileCode2
                                    size={25}
                                    className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                Technology Stack
                            </h3>
                        </div>

                        <div className="mt-6 space-y-1">
                            {[
                                ["Framework", "React"],
                                ["Build Tool", "Vite"],
                                ["Styling", "Tailwind CSS"],
                                ["Animations", "Framer Motion"],
                                ["Icons", "Lucide React"],
                                ["Routing", "React Router"],
                                ["Language", "JavaScript / JSX"],
                            ].map(([key, value]) => (
                                <div
                                    key={key}
                                    className="flex items-center justify-between gap-4 border-b border-[var(--border)] py-3 transition-all duration-300 hover:px-2 hover:border-[var(--accent)]"
                                >
                                    <span className="text-[var(--muted)]">
                                        {key}
                                    </span>

                                    <span className="font-semibold">
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={cardClass}>
                        <div className="flex items-center gap-4">
                            <div className={iconBoxClass}>
                                <Layers3
                                    size={25}
                                    className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                Frontend Modules
                            </h3>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {frontendModules.map((item) => (
                                <div
                                    key={item}
                                    className="
                    flex
                    items-start
                    gap-3
                    rounded-xl
                    border
                    border-[var(--border)]
                    p-3
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[var(--accent)]
                    hover:bg-[var(--section-bg)]
                  "
                                >
                                    <CheckCircle2
                                        size={18}
                                        className="mt-0.5 shrink-0 text-[var(--accent)]"
                                    />

                                    <span className="text-sm leading-6 text-[var(--muted)]">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          TREATMENTS
      ====================================================== */}

            <section className="border-y border-[var(--border)] bg-[var(--section-bg)]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <SectionTitle
                        eyebrow="04 — Treatments"
                        title="Dental Treatment Modules"
                        description="The website currently includes dedicated treatment content for the following dental services."
                    />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {treatments.map((treatment, index) => (
                            <div
                                key={treatment}
                                className="
                  group
                  rounded-2xl
                  border
                  border-[var(--border)]
                  bg-[var(--card-bg)]
                  p-5
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[var(--accent)]
                  hover:shadow-xl
                "
                            >
                                <div className="flex items-center gap-4">
                                    <span
                                        className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--primary-light)]
                      text-sm
                      font-bold
                      text-[var(--accent)]
                      transition-all
                      duration-500
                      group-hover:scale-110
                      group-hover:bg-[var(--primary)]
                    "
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="font-semibold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                        {treatment}
                                    </span>
                                </div>

                                <div className="mt-5 h-0.5 w-8 bg-[var(--accent)] transition-all duration-500 group-hover:w-16" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
          HOME EXPERIENCE
      ====================================================== */}

            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <SectionTitle
                    eyebrow="05 — Home Experience"
                    title="Professional Clinic Sections"
                    description="The homepage has been expanded with additional sections to create a complete and professional dental clinic experience."
                />

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

                    {/* PROFESSIONAL RESULTS */}
                    <div className={cardClass}>
                        <div className={iconBoxClass}>
                            <ShieldCheck
                                size={26}
                                className="text-[var(--accent)] transition-all duration-500 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                            Professional Results
                        </h3>

                        <p className="mt-3 leading-7 text-[var(--muted)]">
                            A before-and-after showcase with multiple treatment
                            result pairs, navigation controls and responsive
                            presentation.
                        </p>

                        <div className="mt-5 h-0.5 w-10 bg-[var(--accent)] transition-all duration-500 group-hover:w-20" />
                    </div>

                    {/* TESTIMONIALS */}
                    <div className={cardClass}>
                        <div className={iconBoxClass}>
                            <Mail
                                size={26}
                                className="text-[var(--accent)] transition-all duration-500 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                            Testimonials
                        </h3>

                        <p className="mt-3 leading-7 text-[var(--muted)]">
                            A dedicated patient feedback section designed to
                            communicate trust, comfort and quality of dental care.
                        </p>

                        <div className="mt-5 h-0.5 w-10 bg-[var(--accent)] transition-all duration-500 group-hover:w-20" />
                    </div>

                    {/* RECOGNITION */}
                    <div className={cardClass}>
                        <div className={iconBoxClass}>
                            <Award
                                size={26}
                                className="text-[var(--accent)] transition-all duration-500 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                            Recognition & Certifications
                        </h3>

                        <p className="mt-3 leading-7 text-[var(--muted)]">
                            A professional certificate and recognition gallery
                            featuring four certificate cards with responsive
                            presentation and visual interaction.
                        </p>

                        <div className="mt-5 h-0.5 w-10 bg-[var(--accent)] transition-all duration-500 group-hover:w-20" />
                    </div>

                    {/* VIDEO */}
                    <div className={cardClass}>
                        <div className={iconBoxClass}>
                            <Video
                                size={26}
                                className="text-[var(--accent)] transition-all duration-500 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                            Inside Our Clinic
                        </h3>

                        <p className="mt-3 leading-7 text-[var(--muted)]">
                            A clinic introduction section using a locally hosted
                            MP4 video from the public/videos directory with
                            responsive HTML5 video controls.
                        </p>

                        <div className="mt-5 h-0.5 w-10 bg-[var(--accent)] transition-all duration-500 group-hover:w-20" />
                    </div>
                </div>

                {/* LOCAL VIDEO DETAILS */}
                <div className="mt-8 grid gap-6 lg:grid-cols-2">

                    <div className={cardClass}>
                        <div className="flex items-center gap-4">
                            <div className={iconBoxClass}>
                                <Video
                                    size={25}
                                    className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                Local MP4 Video Integration
                            </h3>
                        </div>

                        <p className="mt-5 leading-7 text-[var(--muted)]">
                            The Inside Our Clinic section currently uses a local
                            MP4 file instead of an embedded YouTube video. This
                            keeps the video asset under the project&apos;s control
                            and allows native browser playback.
                        </p>

                        <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--section-bg)] p-4">
                            <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                                Video Source
                            </p>

                            <code className="mt-2 block break-all text-sm text-[var(--text)]">
                                /videos/dental-clinic.mp4
                            </code>
                        </div>
                    </div>

                    <div className={cardClass}>
                        <div className="flex items-center gap-4">
                            <div className={iconBoxClass}>
                                <Award
                                    size={25}
                                    className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                Recognition & Certifications
                            </h3>
                        </div>

                        <p className="mt-5 leading-7 text-[var(--muted)]">
                            The homepage includes a dedicated recognition area
                            for displaying four professional certificates. The
                            section supports responsive cards, hover effects and
                            certificate-focused presentation.
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                            {[
                                "Certificate 01",
                                "Certificate 02",
                                "Certificate 03",
                                "Certificate 04",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="
                    rounded-xl
                    border
                    border-[var(--border)]
                    bg-[var(--section-bg)]
                    p-3
                    text-center
                    text-xs
                    font-semibold
                    text-[var(--muted)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[var(--accent)]
                    hover:text-[var(--accent)]
                  "
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          LEGAL & NAVIGATION
      ====================================================== */}

            <section className="border-y border-[var(--border)] bg-[var(--section-bg)]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <SectionTitle
                        eyebrow="06 — Legal & Navigation"
                        title="Legal Pages & User Navigation"
                        description="The project now includes dedicated legal pages and improved navigation behavior for a more complete production-ready website experience."
                    />

                    <div className="grid gap-6 md:grid-cols-2">

                        {/* PRIVACY */}
                        <Link
                            to="/privacy-policy"
                            className="
                group rounded-2xl
                border border-[var(--border)]
                bg-[var(--card-bg)]
                p-7
                transition-all duration-500
                hover:-translate-y-2
                hover:border-[var(--accent)]
                hover:shadow-xl
              "
                        >
                            <div className={iconBoxClass}>
                                <ShieldCheck
                                    size={25}
                                    className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                Privacy Policy
                            </h3>

                            <p className="mt-3 leading-7 text-[var(--muted)]">
                                Dedicated privacy documentation covering information
                                collection, usage, security, cookies, storage, privacy
                                choices and contact information.
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                                View Privacy Policy

                                <ExternalLink
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </div>
                        </Link>

                        {/* TERMS */}
                        <Link
                            to="/terms-and-conditions"
                            className="
                group rounded-2xl
                border border-[var(--border)]
                bg-[var(--card-bg)]
                p-7
                transition-all duration-500
                hover:-translate-y-2
                hover:border-[var(--accent)]
                hover:shadow-xl
              "
                        >
                            <div className={iconBoxClass}>
                                <Scale
                                    size={25}
                                    className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                Terms & Conditions
                            </h3>

                            <p className="mt-3 leading-7 text-[var(--muted)]">
                                Dedicated terms covering website usage, appointments,
                                medical information, pricing, intellectual property,
                                third-party services and limitations.
                            </p>

                            <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[var(--accent)]">
                                View Terms & Conditions

                                <ExternalLink
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* NAVIGATION */}
                    <div className="mt-8 grid gap-6 md:grid-cols-2">

                        <div className={cardClass}>
                            <div className={iconBoxClass}>
                                <MousePointer2
                                    size={25}
                                    className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <h3 className="mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                Route Navigation
                            </h3>

                            <p className="mt-3 leading-7 text-[var(--muted)]">
                                React Router is used for internal navigation between the
                                homepage, About, Contact, Documentation, treatment pages,
                                Privacy Policy and Terms & Conditions.
                            </p>
                        </div>

                        <div className={cardClass}>
                            <div className={iconBoxClass}>
                                <ArrowUp
                                    size={25}
                                    className="text-[var(--accent)] transition-transform duration-500 group-hover:-translate-y-1"
                                />
                            </div>

                            <h3 className="mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                Scroll Position Handling
                            </h3>

                            <p className="mt-3 leading-7 text-[var(--muted)]">
                                Route navigation is designed to return users to the top of
                                new pages, while homepage hash links such as Features,
                                Services and Doctor can target their respective sections.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          BACKEND
      ====================================================== */}

            <section className="border-y border-[var(--border)] bg-[var(--section-bg)]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <SectionTitle
                        eyebrow="07 — Backend"
                        title="Backend Technology & API"
                        description="The backend is implemented as a Node.js and Express.js REST API. It receives contact form submissions, validates the request and stores the data in MongoDB Atlas."
                    />

                    <div className="grid gap-8 lg:grid-cols-2">

                        <div className={cardClass}>
                            <div className="flex items-center gap-4">
                                <div className={iconBoxClass}>
                                    <Server
                                        size={25}
                                        className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                    Backend Stack
                                </h3>
                            </div>

                            <div className="mt-6 space-y-3">
                                {backendModules.map((item) => (
                                    <div
                                        key={item}
                                        className="
                      flex
                      items-center
                      gap-3
                      rounded-lg
                      p-2
                      transition-all
                      duration-300
                      hover:translate-x-2
                      hover:bg-[var(--section-bg)]
                    "
                                    >
                                        <CircleDot
                                            size={16}
                                            className="shrink-0 text-[var(--accent)]"
                                        />

                                        <span className="text-[var(--muted)]">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={cardClass}>
                            <div className="flex items-center gap-4">
                                <div className={iconBoxClass}>
                                    <Workflow
                                        size={25}
                                        className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                    Contact API
                                </h3>
                            </div>

                            <div className="mt-6 rounded-xl border border-[var(--border)] bg-[var(--page-bg)] p-5 transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg">
                                <div className="mb-4 flex flex-wrap items-center gap-3">
                                    <span className="rounded-lg bg-emerald-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-500">
                                        POST
                                    </span>

                                    <code className="text-sm text-[var(--text)]">
                                        /api/contact
                                    </code>
                                </div>

                                <p className="text-sm leading-7 text-[var(--muted)]">
                                    Accepts name, phone, email, subject and message fields.
                                    The backend validates the submitted data and creates a
                                    contact document in MongoDB.
                                </p>
                            </div>

                            <div className="mt-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2
                                        size={22}
                                        className="mt-0.5 shrink-0 text-emerald-500"
                                    />

                                    <div>
                                        <h4 className="font-bold text-emerald-500">
                                            API Tested Successfully
                                        </h4>

                                        <p className="mt-1 text-sm leading-6 text-[var(--muted)]">
                                            The contact API has been tested successfully and
                                            returns HTTP 201 after a valid submission.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          DATABASE
      ====================================================== */}

            <section className="border-y border-[var(--border)] bg-[var(--section-bg)]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <SectionTitle
                        eyebrow="08 — Database"
                        title="MongoDB Atlas Integration"
                        description="MongoDB Atlas is currently used as the persistent database for contact form submissions."
                    />

                    <div className="grid gap-6 md:grid-cols-3">
                        {[
                            {
                                title: "Database",
                                value: "dental_clinic",
                                icon: Database,
                            },
                            {
                                title: "Collection",
                                value: "contacts",
                                icon: Layers3,
                            },
                            {
                                title: "ODM",
                                value: "Mongoose",
                                icon: Workflow,
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={cardClass}
                                >
                                    <div className={iconBoxClass}>
                                        <Icon
                                            size={25}
                                            className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>

                                    <p className="mt-5 text-sm text-[var(--muted)]">
                                        {item.title}
                                    </p>

                                    <p className="mt-2 text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                        {item.value}
                                    </p>

                                    <div className="mt-5 h-0.5 w-8 bg-[var(--accent)] transition-all duration-500 group-hover:w-16" />
                                </div>
                            );
                        })}
                    </div>

                    <div className="group mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl">
                        <div className="flex items-start gap-4">
                            <CheckCircle2
                                size={25}
                                className="mt-0.5 shrink-0 text-emerald-500 transition-transform duration-500 group-hover:scale-110"
                            />

                            <div>
                                <h3 className="text-lg font-bold text-emerald-500">
                                    Contact Form Data Storage Confirmed
                                </h3>

                                <p className="mt-2 max-w-4xl leading-7 text-[var(--muted)]">
                                    Contact form data is successfully saved to MongoDB Atlas.
                                    The complete flow from the frontend form to the Express API
                                    and then into the MongoDB contacts collection has been
                                    tested successfully.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          SECURITY
      ====================================================== */}

            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <SectionTitle
                    eyebrow="09 — Security"
                    title="Security & Validation"
                    description="Several backend-level protections are already included in the current implementation."
                />

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            icon: ShieldCheck,
                            title: "Helmet",
                            text: "Security-related HTTP headers.",
                        },
                        {
                            icon: LockKeyhole,
                            title: "Validation",
                            text: "Email, phone and required field validation.",
                        },
                        {
                            icon: Workflow,
                            title: "Rate Limiting",
                            text: "Contact API request protection.",
                        },
                        {
                            icon: LockKeyhole,
                            title: "Environment Variables",
                            text: "Sensitive configuration kept outside source code.",
                        },
                    ].map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className={cardClass}
                            >
                                <div className={iconBoxClass}>
                                    <Icon
                                        size={25}
                                        className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>

                                <h3 className="mt-5 font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                                    {item.text}
                                </p>

                                <div className="mt-5 h-0.5 w-8 bg-[var(--accent)] transition-all duration-500 group-hover:w-16" />
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* =====================================================
          FOLDER STRUCTURE
      ====================================================== */}

            <section className="border-y border-[var(--border)] bg-[var(--section-bg)]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <SectionTitle
                        eyebrow="10 — Structure"
                        title="Project Folder Structure"
                        description="Current frontend and backend organization including local video assets and recognition components."
                    />

                    <div className="group overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-xl">
                        <pre className="min-w-[760px] font-mono text-sm leading-7 text-[var(--muted)]">
                            {`dental-clinic/
├── client/
│   ├── public/
│   │   ├── images/
│   │   │   ├── professional-before.png
│   │   │   ├── professional-after.png
│   │   │   ├── professional-before-2.png
│   │   │   ├── professional-after-2.png
│   │   │   ├── professional-before-3.png
│   │   │   ├── professional-after-3.png
│   │   │   ├── certificate-1.png
│   │   │   ├── certificate-2.png
│   │   │   ├── certificate-3.png
│   │   │   ├── certificate-4.png
│   │   │   └── ...
│   │   │
│   │   └── videos/
│   │       └── dental-clinic.mp4
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   │   ├── ProfessionalResults.jsx
│   │   │   │   ├── Testimonials.jsx
│   │   │   │   ├── Recognition.jsx
│   │   │   │   ├── YoutubeSection.jsx
│   │   │   │   └── ...
│   │   │   │
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ScrollToTop.jsx
│   │   │
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── AboutPage.jsx
│   │   │   ├── ContactPage.jsx
│   │   │   ├── TreatmentDetails.jsx
│   │   │   ├── DocumentationPage.jsx
│   │   │   ├── PrivacyPolicyPage.jsx
│   │   │   └── TermsConditionsPage.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vercel.json
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contactRoutes.js
│   ├── server.js
│   └── package.json
│
├── Document/
│   └── LOCAL_SETUP.md
│
├── .gitignore
└── README.md`}
                        </pre>
                    </div>

                    <div className="mt-6 rounded-2xl border border-[var(--border)] bg-[var(--card-bg)] p-6">
                        <div className="flex items-start gap-4">
                            <Video
                                size={25}
                                className="mt-0.5 shrink-0 text-[var(--accent)]"
                            />

                            <div>
                                <h3 className="font-bold">
                                    Local Video Asset
                                </h3>

                                <p className="mt-2 leading-7 text-[var(--muted)]">
                                    The current Inside Our Clinic video is served from
                                    the Vite public directory:
                                </p>

                                <code className="mt-3 block rounded-lg border border-[var(--border)] bg-[var(--section-bg)] px-4 py-3 text-sm text-[var(--accent)]">
                                    client/public/videos/dental-clinic.mp4
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          ROUTES
      ====================================================== */}

            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <SectionTitle
                    eyebrow="11 — Routes"
                    title="Application Routes"
                    description="Current React Router routes available in the application."
                />

                <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
                    {[
                        ["/", "Home Page"],
                        ["/about", "About Page"],
                        ["/contact", "Contact Page"],
                        ["/documentation", "Project Documentation"],
                        ["/privacy-policy", "Privacy Policy"],
                        ["/terms-and-conditions", "Terms & Conditions"],
                        ["/services/orthodontics", "Orthodontics"],
                        ["/services/pedodontics", "Pedodontics"],
                        ["/services/periodontics", "Periodontics"],
                        ["/services/root-canal-treatment", "Root Canal Treatment"],
                        ["/services/dental-implants", "Dental Implants"],
                        ["/services/teeth-whitening", "Teeth Whitening"],
                    ].map(([path, title]) => (
                        <div
                            key={path}
                            className="
                flex
                flex-col
                gap-2
                border-b
                border-[var(--border)]
                p-5
                transition-all
                duration-300
                last:border-b-0
                hover:bg-[var(--section-bg)]
                md:flex-row
                md:items-center
                md:justify-between
              "
                        >
                            <code className="font-mono text-sm font-semibold text-[var(--accent)]">
                                {path}
                            </code>

                            <span className="text-sm text-[var(--muted)]">
                                {title}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-2">

                    <div className={cardClass}>
                        <div className={iconBoxClass}>
                            <BookOpen
                                size={25}
                                className="text-[var(--accent)]"
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-bold">
                            Homepage Hash Links
                        </h3>

                        <div className="mt-4 space-y-3">
                            {[
                                "/#home",
                                "/#features",
                                "/#services",
                                "/#doctor",
                            ].map((item) => (
                                <code
                                    key={item}
                                    className="block rounded-lg border border-[var(--border)] bg-[var(--section-bg)] px-3 py-2 text-sm text-[var(--accent)]"
                                >
                                    {item}
                                </code>
                            ))}
                        </div>
                    </div>

                    <div className={cardClass}>
                        <div className={iconBoxClass}>
                            <MousePointer2
                                size={25}
                                className="text-[var(--accent)]"
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-bold">
                            Navigation Behavior
                        </h3>

                        <p className="mt-3 leading-7 text-[var(--muted)]">
                            Normal React Router pages open from the top of the page.
                            Homepage hash links continue to target their corresponding
                            sections.
                        </p>
                    </div>
                </div>
            </section>

            {/* =====================================================
          STATUS
      ====================================================== */}

            <section className="border-y border-[var(--border)] bg-[var(--section-bg)]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <SectionTitle
                        eyebrow="12 — Status"
                        title="Current Project Status"
                        description="The following represents the current implementation status of the project."
                    />

                    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card-bg)]">
                        {statusItems.map((item) => (
                            <div
                                key={item.label}
                                className="
                  group
                  flex
                  items-center
                  justify-between
                  gap-5
                  border-b
                  border-[var(--border)]
                  p-5
                  last:border-b-0
                  transition-all
                  duration-300
                  hover:bg-[var(--section-bg)]
                "
                            >
                                <div className="flex items-center gap-3">
                                    <StatusIcon status={item.status} />

                                    <span className="font-medium transition-colors duration-300 group-hover:text-[var(--accent)]">
                                        {item.label}
                                    </span>
                                </div>

                                <span
                                    className={`
                    rounded-full
                    px-3
                    py-1
                    text-xs
                    font-bold
                    uppercase
                    tracking-wider
                    transition-transform
                    duration-300
                    group-hover:scale-105
                    ${item.status === "completed"
                                            ? "bg-emerald-500/10 text-emerald-500"
                                            : "bg-amber-500/10 text-amber-500"
                                        }
                  `}
                                >
                                    {item.status === "completed"
                                        ? "Completed"
                                        : "Pending"}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="group mt-8 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-xl">
                        <div className="flex items-start gap-4">
                            <Mail
                                size={25}
                                className="mt-0.5 shrink-0 text-amber-500 transition-transform duration-500 group-hover:scale-110"
                            />

                            <div>
                                <h3 className="text-lg font-bold text-amber-500">
                                    Email Notification Status
                                </h3>

                                <p className="mt-2 leading-7 text-[var(--muted)]">
                                    Email notification has{" "}
                                    <strong className="text-[var(--text)]">
                                        not yet been properly implemented or configured
                                    </strong>
                                    . The contact submission is currently saved
                                    successfully in MongoDB, but automatic email
                                    notification remains a backend task.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          DEPLOYMENT
      ====================================================== */}

            <section className="border-y border-[var(--border)] bg-[var(--section-bg)]">
                <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <SectionTitle
                        eyebrow="13 — Deployment"
                        title="Deployment"
                        description="The frontend is configured for deployment through Vercel."
                    />

                    <div className={cardClass}>
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-[var(--muted)]">
                                    Live Frontend
                                </p>

                                <p className="mt-2 break-all text-lg font-semibold transition-colors duration-300 group-hover:text-[var(--accent)]">
                                    dental-clinic-eight-teal.vercel.app
                                </p>
                            </div>

                            <a
                                href="https://dental-clinic-eight-teal.vercel.app"
                                target="_blank"
                                rel="noreferrer"
                                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[var(--primary)]
                  px-5
                  py-3
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[var(--primary-light)]
                  hover:shadow-lg
                "
                            >
                                Open Website

                                <ExternalLink
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          ROADMAP
      ====================================================== */}

            <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <SectionTitle
                    eyebrow="14 — Roadmap"
                    title="Next Development Phase"
                    description="The following features are planned for the next stage of the project."
                />

                <div className="grid gap-6 md:grid-cols-2">

                    <div className={cardClass}>
                        <div className={iconBoxClass}>
                            <Mail
                                size={23}
                                className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                            Email Notifications
                        </h3>

                        <p className="mt-3 leading-7 text-[var(--muted)]">
                            Integrate a transactional email service so that the clinic
                            receives an email whenever a new contact or appointment
                            request is submitted.
                        </p>

                        <div className="mt-5 inline-flex rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-500">
                            Pending
                        </div>
                    </div>

                    <div className={cardClass}>
                        <div className={iconBoxClass}>
                            <ShieldCheck
                                size={23}
                                className="text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>

                        <h3 className="mt-6 text-xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                            Admin Dashboard & Authentication
                        </h3>

                        <p className="mt-3 leading-7 text-[var(--muted)]">
                            Build a secure admin panel where authorized clinic staff can
                            view, manage and update contact submissions.
                        </p>

                        <div className="mt-5 inline-flex rounded-full bg-amber-500/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-500">
                            Pending
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
          FINAL NOTE
      ====================================================== */}

            <section className="pb-20">
                <div className="mx-auto max-w-4xl px-6 text-center">

                    <div
                        className="
              group
              rounded-3xl
              border
              border-[var(--border)]
              bg-[var(--card-bg)]
              p-8
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-[var(--accent)]
              hover:shadow-2xl
            "
                    >
                        <CheckCircle2
                            size={34}
                            className="mx-auto text-[var(--accent)] transition-transform duration-500 group-hover:scale-110"
                        />

                        <h2 className="mt-5 text-2xl font-bold transition-colors duration-300 group-hover:text-[var(--accent)]">
                            The SmileMax Dentistry Project
                        </h2>

                        <p className="mx-auto mt-3 max-w-2xl leading-7 text-[var(--muted)]">
                            This documentation reflects the current implementation
                            state of the project, including the modern clinic
                            homepage, treatment modules, Professional Results,
                            Testimonials, Recognition & Certifications,
                            Inside Our Clinic local MP4 video, Contact API,
                            MongoDB integration, legal pages and navigation
                            improvements.
                        </p>

                        <div className="mx-auto mt-6 h-0.5 w-10 bg-[var(--accent)] transition-all duration-500 group-hover:w-24" />
                    </div>

                    {/* QUICK LINKS */}
                    <div className="mt-8 flex flex-wrap justify-center gap-3">

                        <Link
                            to="/privacy-policy"
                            className="
                inline-flex items-center gap-2
                rounded-xl
                border border-[var(--border)]
                bg-[var(--card-bg)]
                px-5 py-3
                text-sm font-semibold
                text-[var(--text)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[var(--accent)]
                hover:text-[var(--accent)]
                hover:shadow-lg
              "
                        >
                            <ShieldCheck size={17} />
                            Privacy Policy
                        </Link>

                        <Link
                            to="/terms-and-conditions"
                            className="
                inline-flex items-center gap-2
                rounded-xl
                border border-[var(--border)]
                bg-[var(--card-bg)]
                px-5 py-3
                text-sm font-semibold
                text-[var(--text)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[var(--accent)]
                hover:text-[var(--accent)]
                hover:shadow-lg
              "
                        >
                            <Scale size={17} />
                            Terms & Conditions
                        </Link>

                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="
                inline-flex items-center gap-2
                rounded-xl
                bg-[#281238]
                px-5 py-3
                text-sm font-semibold !text-white
                transition-all duration-300
                hover:-translate-y-1
                hover:bg-[var(--accent)]
                hover:shadow-lg
                dark:bg-[#ff7043]
                dark:!text-white
              "
                        >
                            <ArrowUp
                                size={17}
                                className="!text-white"
                            />

                            <span className="!text-white">
                                Back to Top
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default DocumentationPage;
