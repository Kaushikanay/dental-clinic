// import {
//     Mail,
//     MapPin,
//     Phone,
//     ArrowUp,
// } from "lucide-react";

// const Footer = () => {
//     const services = [
//         "General Dentistry",
//         "Root Canal Treatment",
//         "Dental Implants",
//         "Orthodontics",
//         "Teeth Whitening",
//         "Pediatric Dentistry",
//     ];

//     const quickLinks = [
//         {
//             name: "Home",
//             href: "#home",
//         },
//         {
//             name: "About Us",
//             href: "#about",
//         },
//         {
//             name: "Features",
//             href: "#features",
//         },
//         {
//             name: "Services",
//             href: "#services",
//         },
//         {
//             name: "Doctor",
//             href: "#doctor",
//         },
//         {
//             name: "Contact",
//             href: "#contact",
//         },
//     ];

//     return (
//         <footer
//             id="footer"
//             className="relative overflow-hidden bg-[#21102d] text-white"
//         >
//             {/* Decorative background */}
//             <div className="absolute -left-40 top-20 h-80 w-80 rounded-full border-[50px] border-white/[0.03]" />

//             <div className="absolute -right-40 bottom-[-100px] h-[450px] w-[450px] rounded-full border-[70px] border-[#3d1d52]/50" />

//             <div className="relative mx-auto max-w-7xl px-6 pt-16 lg:px-10 lg:pt-20">

//                 {/* Main Footer */}
//                 <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">

//                     {/* Brand */}
//                     <div>
//                         <a
//                             href="#home"
//                             className="inline-flex items-center gap-3"
//                         >
//                             <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ff6b35]">
//                                 <span className="text-xl font-bold text-[#ff6b35]">
//                                     D
//                                 </span>
//                             </div>

//                             <div className="leading-none">
//                                 <span className="block text-xl font-bold">
//                                     Dental
//                                 </span>

//                                 <span className="mt-1 block text-[9px] uppercase tracking-[0.25em] text-[#ff8a5c]">
//                                     Clinic Studio
//                                 </span>
//                             </div>
//                         </a>

//                         <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
//                             Providing personalized dental care with modern
//                             technology, experienced professionals and a
//                             patient-first approach.
//                         </p>

//                         {/* Social Links */}
//                         <div className="mt-6 flex items-center gap-3">

//                             <a
//                                 href="#"
//                                 aria-label="Facebook"
//                                 className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold transition hover:border-[#ff6b35] hover:bg-[#ff6b35]"
//                             >
//                                 f
//                             </a>

//                             <a
//                                 href="#"
//                                 aria-label="Instagram"
//                                 className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold transition hover:border-[#ff6b35] hover:bg-[#ff6b35]"
//                             >
//                                 ig
//                             </a>

//                             <a
//                                 href="#"
//                                 aria-label="LinkedIn"
//                                 className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xs font-bold transition hover:border-[#ff6b35] hover:bg-[#ff6b35]"
//                             >
//                                 in
//                             </a>

//                         </div>
//                     </div>

//                     {/* Quick Links */}
//                     <div>
//                         <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
//                             Quick Links
//                         </h3>

//                         <div className="mt-6 space-y-3">
//                             {quickLinks.map((link) => (
//                                 <a
//                                     key={link.name}
//                                     href={link.href}
//                                     className="block text-sm text-white/50 transition hover:translate-x-1 hover:text-[#ff8a5c]"
//                                 >
//                                     {link.name}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Services */}
//                     <div>
//                         <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
//                             Our Services
//                         </h3>

//                         <div className="mt-6 space-y-3">
//                             {services.map((service) => (
//                                 <a
//                                     key={service}
//                                     href="#services"
//                                     className="block text-sm text-white/50 transition hover:translate-x-1 hover:text-[#ff8a5c]"
//                                 >
//                                     {service}
//                                 </a>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Contact */}
//                     <div>
//                         <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">
//                             Contact Us
//                         </h3>

//                         <div className="mt-6 space-y-5">

//                             {/* Address */}
//                             <div className="flex gap-3">
//                                 <MapPin
//                                     size={19}
//                                     className="mt-1 shrink-0 text-[#ff6b35]"
//                                 />

//                                 <p className="text-sm leading-6 text-white/50">
//                                     Your Dental Clinic Address,
//                                     <br />
//                                     Your City, India
//                                 </p>
//                             </div>

//                             {/* Phone */}
//                             <a
//                                 href="tel:+919999999999"
//                                 className="flex items-center gap-3 text-sm text-white/50 transition hover:text-[#ff8a5c]"
//                             >
//                                 <Phone
//                                     size={18}
//                                     className="shrink-0 text-[#ff6b35]"
//                                 />

//                                 +91 99999 99999
//                             </a>

//                             {/* Email */}
//                             <a
//                                 href="mailto:info@zendentalstudio.com"
//                                 className="flex items-center gap-3 break-all text-sm text-white/50 transition hover:text-[#ff8a5c]"
//                             >
//                                 <Mail
//                                     size={18}
//                                     className="shrink-0 text-[#ff6b35]"
//                                 />

//                                 info@dentalclinicstudio.com
//                             </a>

//                         </div>

//                         {/* Appointment */}
//                         <a
//                             href="/contact"
//                             className="mt-7 inline-flex rounded-md bg-[#ff6b35] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#ff8a5c]"
//                         >
//                             Book Appointment
//                         </a>
//                     </div>
//                 </div>

//                 {/* Bottom */}
//                 <div className="border-t border-white/10 py-6">

//                     <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

//                         <p className="text-xs text-white/40">
//                             © {new Date().getFullYear()} Dental Clinic Studio.
//                             All rights reserved.
//                         </p>

//                         <div className="flex items-center gap-5">
//                             <a
//                                 href="#"
//                                 className="text-xs text-white/40 transition hover:text-white"
//                             >
//                                 Privacy Policy
//                             </a>

//                             <a
//                                 href="#"
//                                 className="text-xs text-white/40 transition hover:text-white"
//                             >
//                                 Terms & Conditions
//                             </a>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//             {/* Back to top */}
//             <a
//                 href="#home"
//                 aria-label="Back to top"
//                 className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-md bg-[#ff6b35] text-white shadow-lg transition hover:bg-[#ff8a5c]"
//             >
//                 <ArrowUp size={18} />
//             </a>

//         </footer>
//     );
// };

// export default Footer;

import { Link } from "react-router-dom";
import {
    Mail,
    MapPin,
    Phone,
    ArrowUp,
    FileText,
    CalendarCheck,
} from "lucide-react";

const Footer = () => {
    // ============================================================
    // CLINIC INFORMATION
    // Replace these with actual clinic details later.
    // ============================================================

    const clinicInfo = {
        addressLine1: "Your Dental Clinic Address",
        addressLine2: "Your City, India",
        phone: "+91 99999 99999",
        email: "info@dentalclinicstudio.com",
    };

    // ============================================================
    // QUICK LINKS
    // ============================================================

    const quickLinks = [
        {
            name: "Home",
            type: "route",
            to: "/",
        },
        {
            name: "About Us",
            type: "route",
            to: "/about",
        },
        {
            name: "Features",
            type: "anchor",
            href: "/#features",
        },
        {
            name: "Services",
            type: "anchor",
            href: "/#services",
        },
        {
            name: "Doctor",
            type: "anchor",
            href: "/#doctor",
        },
        {
            name: "Contact",
            type: "route",
            to: "/contact",
        },
        {
            name: "Documentation",
            type: "route",
            to: "/documentation",
        },
    ];

    // ============================================================
    // SERVICES
    // These exactly match the current TreatmentDetails routes.
    // ============================================================

    const services = [
        {
            name: "Orthodontics",
            slug: "orthodontics",
        },
        {
            name: "Pedodontics",
            slug: "pedodontics",
        },
        {
            name: "Periodontics",
            slug: "periodontics",
        },
        {
            name: "Root Canal Treatment",
            slug: "root-canal-treatment",
        },
        {
            name: "Dental Implants",
            slug: "dental-implants",
        },
        {
            name: "Teeth Whitening",
            slug: "teeth-whitening",
        },
    ];

    // ============================================================
    // SOCIAL LINKS
    // These are temporary dummy links until actual clinic
    // social media URLs are available.
    // ============================================================

    const socialLinks = [
        {
            name: "Facebook",
            shortName: "f",
            href: "https://www.facebook.com/",
        },
        {
            name: "Instagram",
            shortName: "ig",
            href: "https://www.instagram.com/",
        },
        {
            name: "LinkedIn",
            shortName: "in",
            href: "https://www.linkedin.com/",
        },
    ];

    return (
        <footer
            id="footer"
            className="
                relative
                overflow-hidden
                bg-[var(--dark)]
                text-white
            "
        >
            {/* ====================================================
                DECORATIVE BACKGROUND
            ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -left-40
                    top-20
                    h-80
                    w-80
                    rounded-full
                    border-[50px]
                    border-white/[0.03]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    bottom-[-100px]
                    h-[450px]
                    w-[450px]
                    rounded-full
                    border-[70px]
                    border-[var(--primary-light)]/50
                "
            />

            <div className="relative mx-auto max-w-7xl px-6 pt-16 lg:px-10 lg:pt-20">
                {/* ====================================================
                    MAIN FOOTER
                ===================================================== */}

                <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
                    {/* ==================================================
                        BRAND
                    =================================================== */}

                    <div>
                        <Link
                            to="/"
                            className="
                                group
                                inline-flex
                                items-center
                                gap-3
                            "
                        >
                            <div
                                className="
                                    flex
                                    h-11
                                    w-11
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-[var(--accent)]
                                    transition-all
                                    duration-500
                                    group-hover:scale-110
                                    group-hover:bg-[var(--accent)]
                                    group-hover:shadow-lg
                                "
                            >
                                <span
                                    className="
                                        text-xl
                                        font-bold
                                        text-[var(--accent)]
                                        transition-colors
                                        duration-300
                                        group-hover:text-white
                                    "
                                >
                                    D
                                </span>
                            </div>

                            <div className="leading-none">
                                <span
                                    className="
                                        block
                                        text-xl
                                        font-bold
                                        transition-colors
                                        duration-300
                                        group-hover:text-[var(--accent-light)]
                                    "
                                >
                                    Dental
                                </span>

                                <span
                                    className="
                                        mt-1
                                        block
                                        text-[9px]
                                        uppercase
                                        tracking-[0.25em]
                                        text-[var(--accent-light)]
                                    "
                                >
                                    Clinic Studio
                                </span>
                            </div>
                        </Link>

                        <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
                            Providing personalized dental care with modern technology,
                            experienced professionals and a patient-first approach.
                        </p>

                        {/* ==================================================
                            SOCIAL LINKS
                        =================================================== */}

                        <div className="mt-6 flex items-center gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                    title={`${social.name} - Coming Soon`}
                                    className="
            group
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-white/5
            text-xs
            font-bold
            uppercase
            text-white/60
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[var(--accent)]
            hover:bg-[var(--accent)]
            hover:text-white
            hover:shadow-lg
        "
                                >
                                    <span
                                        className="
                transition-transform
                duration-300
                group-hover:scale-110
            "
                                    >
                                        {social.shortName}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ==================================================
                        QUICK LINKS
                    =================================================== */}

                    <div>
                        <h3
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.15em]
                                text-white
                            "
                        >
                            Quick Links
                        </h3>

                        <div className="mt-6 space-y-3">
                            {quickLinks.map((link) => {
                                if (link.type === "route") {
                                    return (
                                        <Link
                                            key={link.name}
                                            to={link.to}
                                            className="
                                                group
                                                flex
                                                items-center
                                                gap-2
                                                text-sm
                                                text-white/50
                                                transition-all
                                                duration-300
                                                hover:translate-x-2
                                                hover:text-[var(--accent-light)]
                                            "
                                        >
                                            <span
                                                className="
                                                    h-1
                                                    w-0
                                                    rounded-full
                                                    bg-[var(--accent)]
                                                    transition-all
                                                    duration-300
                                                    group-hover:w-2
                                                "
                                            />

                                            {link.name}
                                        </Link>
                                    );
                                }

                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            text-white/50
                                            transition-all
                                            duration-300
                                            hover:translate-x-2
                                            hover:text-[var(--accent-light)]
                                        "
                                    >
                                        <span
                                            className="
                                                h-1
                                                w-0
                                                rounded-full
                                                bg-[var(--accent)]
                                                transition-all
                                                duration-300
                                                group-hover:w-2
                                            "
                                        />

                                        {link.name}
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* ==================================================
                        SERVICES
                    =================================================== */}

                    <div>
                        <h3
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.15em]
                                text-white
                            "
                        >
                            Our Services
                        </h3>

                        <div className="mt-6 space-y-3">
                            {services.map((service) => (
                                <Link
                                    key={service.slug}
                                    to={`/services/${service.slug}`}
                                    className="
                                        group
                                        flex
                                        items-center
                                        gap-2
                                        text-sm
                                        text-white/50
                                        transition-all
                                        duration-300
                                        hover:translate-x-2
                                        hover:text-[var(--accent-light)]
                                    "
                                >
                                    <span
                                        className="
                                            h-1
                                            w-0
                                            rounded-full
                                            bg-[var(--accent)]
                                            transition-all
                                            duration-300
                                            group-hover:w-2
                                        "
                                    />

                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* ==================================================
                        CONTACT
                    =================================================== */}

                    <div>
                        <h3
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.15em]
                                text-white
                            "
                        >
                            Contact Us
                        </h3>

                        <div className="mt-6 space-y-5">
                            {/* Address */}
                            <div className="group flex gap-3">
                                <div
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-white/5
                                        transition-all
                                        duration-300
                                        group-hover:bg-[var(--accent)]
                                    "
                                >
                                    <MapPin
                                        size={18}
                                        className="
                                            text-[var(--accent)]
                                            transition-colors
                                            duration-300
                                            group-hover:text-white
                                        "
                                    />
                                </div>

                                <p
                                    className="
                                        text-sm
                                        leading-6
                                        text-white/50
                                        transition-colors
                                        duration-300
                                        group-hover:text-white/80
                                    "
                                >
                                    {clinicInfo.addressLine1}
                                    <br />
                                    {clinicInfo.addressLine2}
                                </p>
                            </div>

                            {/* Phone */}
                            <a
                                href={`tel:${clinicInfo.phone.replace(/\s/g, "")}`}
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-3
                                    text-sm
                                    text-white/50
                                    transition-all
                                    duration-300
                                    hover:translate-x-1
                                    hover:text-[var(--accent-light)]
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-white/5
                                        transition-all
                                        duration-300
                                        group-hover:bg-[var(--accent)]
                                    "
                                >
                                    <Phone
                                        size={17}
                                        className="
                                            text-[var(--accent)]
                                            transition-colors
                                            duration-300
                                            group-hover:text-white
                                        "
                                    />
                                </div>

                                {clinicInfo.phone}
                            </a>

                            {/* Email */}
                            <a
                                href={`mailto:${clinicInfo.email}`}
                                className="
                                    group
                                    flex
                                    items-center
                                    gap-3
                                    break-all
                                    text-sm
                                    text-white/50
                                    transition-all
                                    duration-300
                                    hover:translate-x-1
                                    hover:text-[var(--accent-light)]
                                "
                            >
                                <div
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-white/5
                                        transition-all
                                        duration-300
                                        group-hover:bg-[var(--accent)]
                                    "
                                >
                                    <Mail
                                        size={17}
                                        className="
                                            text-[var(--accent)]
                                            transition-colors
                                            duration-300
                                            group-hover:text-white
                                        "
                                    />
                                </div>

                                {clinicInfo.email}
                            </a>
                        </div>

                        {/* Appointment */}
                        <Link
                            to="/contact"
                            className="
                                group
                                mt-7
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-[var(--accent)]
                                px-5
                                py-3
                                text-xs
                                font-semibold
                                text-white
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:bg-[var(--accent-light)]
                                hover:shadow-lg
                            "
                        >
                            <CalendarCheck
                                size={16}
                                className="
                                    transition-transform
                                    duration-300
                                    group-hover:scale-110
                                "
                            />
                            Book Appointment
                        </Link>
                    </div>
                </div>

                {/* ====================================================
                    BOTTOM FOOTER
                ===================================================== */}

                <div className="border-t border-white/10 py-6">
                    <div
                        className="
                            flex
                            flex-col
                            items-center
                            justify-between
                            gap-4
                            text-center
                            sm:flex-row
                            sm:text-left
                        "
                    >
                        <p className="text-xs text-white/40">
                            © {new Date().getFullYear()} Dental Clinic Studio. All rights
                            reserved.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-5">
                            {/* Documentation
                            <Link
                                to="/documentation"
                                className="
                                    inline-flex
                                    items-center
                                    gap-1.5
                                    text-xs
                                    text-white/40
                                    transition-all
                                    duration-300
                                    hover:text-[var(--accent-light)]
                                "
                            >
                                <FileText size={13} />
                                Documentation
                            </Link> */}

                            {/* Privacy Policy - Dummy Working Link */}
                            <Link
                                to="/privacy-policy"
                                className="
                                    text-xs
                                    text-white/40
                                    transition-all
                                    duration-300
                                    hover:text-[var(--accent-light)]
                                "
                            >
                                Privacy Policy
                            </Link>

                            {/* Terms - Dummy Working Link */}
                            <Link
                                to="/terms-and-conditions"
                                className="
                                    text-xs
                                    text-white/40
                                    transition-all
                                    duration-300
                                    hover:text-[var(--accent-light)]
                                "
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* ====================================================
                BACK TO TOP
            ===================================================== */}

            <a
                href="/#home"
                aria-label="Back to top"
                title="Back to top"
                className="
                    group
                    absolute
                    bottom-6
                    right-6
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    bg-[var(--accent)]
                    text-white
                    shadow-lg
                    transition-all
                    duration-500
                    hover:-translate-y-1
                    hover:bg-[var(--accent-light)]
                    hover:shadow-xl
                "
            >
                <ArrowUp
                    size={18}
                    className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                    "
                />
            </a>
        </footer>
    );
};

export default Footer;
