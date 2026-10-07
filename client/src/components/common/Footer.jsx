import { Link } from "react-router-dom";

import {
    Mail,
    MapPin,
    Phone,
    ArrowUp,
    CalendarCheck,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
    // ============================================================
    // CLINIC INFORMATION
    // ============================================================

    const clinicInfo = {
        addressLine1:
            "Juran chapra Main Road, Satyanarayan Nursing Home, Muzaffarpur Bihar, India",
        // addressLine2:
        //     "Juran Chapra, Muzaffarpur, Bihar, India",
        phone: "+91 99050 30591",
        email: "dsmilemax@gmail.com",
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
        // {
        //     name: "Documentation",
        //     type: "route",
        //     to: "/documentation",
        // },
    ];

    // ============================================================
    // SERVICES
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
    // ============================================================

    const socialLinks = [
        {
            name: "Facebook",
            href: "https://www.facebook.com/smilemax2019",
            icon: FaFacebookF,
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/smilemax2019",
            icon: FaInstagram,
        },
        {
            name: "YouTube",
            href: "https://www.youtube.com/",
            icon: FaYoutube,
        },
        {
            name: "WhatsApp",
            href: "https://wa.me/919905030591",
            icon: FaWhatsapp,
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
            {/* ========================================================
          DECORATIVE BACKGROUND
      ========================================================= */}

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

            <div
                className="
          relative
          mx-auto
          max-w-7xl
          px-6
          pt-16
          lg:px-10
          lg:pt-20
        "
            >
                {/* ======================================================
            MAIN FOOTER
        ======================================================= */}

                <div
                    className="
            grid
            gap-12
            pb-14
            md:grid-cols-2
            lg:grid-cols-4
          "
                >
                    {/* ====================================================
              BRAND
          ===================================================== */}

                    <div>
                        <Link
                            to="/"
                            className="
    group
    flex
    items-center
    gap-3
  "
                        >
                            <div
                                className="
      flex
      h-11
      w-11
      shrink-0
      items-center
      justify-center
      overflow-hidden
      rounded-full
      bg-white
      shadow-sm
      transition-all
      duration-300
      group-hover:scale-105
      group-hover:shadow-md
    "
                            >
                                <img
                                    src="/images/Site Logo.png"
                                    alt="The SmileMax Dentistry"
                                    className="
        h-full
        w-full
        object-contain
        p-1
      "
                                />
                            </div>

                            <div className="leading-none">
                                <span
                                    className="
        block
        whitespace-nowrap
        text-xl
        font-bold
        text-[var(--accent)]
    "
                                >
                                    The SmileMax
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
                                    DENTISTRY
                                </span>
                            </div>
                        </Link>

                        <p
                            className="
                mt-6
                max-w-xs
                text-sm
                leading-7
                text-white/50
              "
                        >
                            Providing personalized dental care with modern
                            technology, experienced professionals and a
                            patient-first approach.
                        </p>

                        {/* ==================================================
                SOCIAL LINKS
            =================================================== */}

                        <div className="mt-6 flex items-center gap-3">
                            {socialLinks.map((social) => {
                                const SocialIcon = social.icon;

                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        title={social.name}
                                        className="
                      group
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      text-white/60
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-[var(--accent)]
                      hover:bg-[var(--accent)]
                      hover:text-white
                      hover:shadow-[0_8px_25px_rgba(255,107,53,0.25)]
                    "
                                    >
                                        <SocialIcon
                                            size={17}
                                            className="
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                                        />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* ====================================================
              QUICK LINKS
          ===================================================== */}

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

                    {/* ====================================================
              SERVICES
          ===================================================== */}

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

                    {/* ====================================================
              CONTACT
          ===================================================== */}

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

                        {/* <Link
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
                        </Link> */}
                    </div>
                </div>

                {/* ======================================================
            BOTTOM FOOTER
        ======================================================= */}

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
                            © {new Date().getFullYear()} The Smile Max.
                            All rights reserved.
                        </p>

                        <div
                            className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-5
              "
                        >
                            {/* <Link
                                to="/documentation"
                                className="
                  text-xs
                  text-white/40
                  transition-all
                  duration-300
                  hover:text-[var(--accent-light)]
                "
                            >
                                Documentation
                            </Link> */}

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

            {/* ========================================================
          BACK TO TOP
      ========================================================= */}

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