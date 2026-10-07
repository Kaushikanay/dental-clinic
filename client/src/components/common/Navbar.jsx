import { useState } from "react";

import { Menu, X, Phone, Sun, Moon } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { theme, toggleTheme } = useTheme();

    const navLinks = [
        {
            name: "Home",
            href: "/",
        },
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Features",
            href: "/#features",
        },
        {
            name: "Services",
            href: "/#services",
        },
        {
            name: "Doctor",
            href: "/#doctor",
        },
        {
            name: "Contact",
            href: "/contact",
        },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header
            className="
        sticky
        top-0
        z-[100]
        w-full
        border-b
        border-white/10
        bg-[var(--primary)]
        shadow-lg
        transition-colors
        duration-500
      "
        >
            {/* ========================================
          MAIN NAVBAR
      ======================================== */}

            <div
                className="
          mx-auto
          flex
          h-[76px]
          max-w-7xl
          items-center
          justify-between
          px-5
          sm:px-6
          lg:px-10
        "
            >
                {/* ========================================
            LOGO
        ======================================== */}

                <a
                    href="/"
                    onClick={handleLinkClick}
                    className="
            group
            flex
            items-center
            gap-2.5
          "
                >
                    {/* Logo Circle */}

                    <div
                        className="
    flex
    h-12
    w-12
    shrink-0
    items-center
    justify-center
    overflow-hidden
    rounded-full
    bg-white
    shadow-md
    ring-1
    ring-white/20
    transition-all
    duration-300
    group-hover:scale-105
    group-hover:shadow-lg
  "
                    >
                        <img
                            src="/images/Site Logo.png"
                            alt="The Smile Max Dentistry Logo"
                            className="
      h-full
      w-full
      object-contain
      p-1
    "
                        />
                    </div>

                    {/* Logo Text */}

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
                </a>

                {/* ========================================
            DESKTOP NAVIGATION
        ======================================== */}

                <nav
                    className="
            hidden
            items-center
            gap-8
            lg:flex
          "
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="
                group
                relative
                !text-white
                text-sm
                font-medium
                transition-colors
                duration-300
                hover:!text-[var(--accent-light)]
              "
                        >
                            {link.name}

                            {/* Underline */}

                            <span
                                className="
                  absolute
                  -bottom-2
                  left-0
                  h-[2px]
                  w-0
                  bg-[var(--accent)]
                  transition-all
                  duration-300
                  group-hover:w-full
                "
                            />
                        </a>
                    ))}
                </nav>

                {/* ========================================
            DESKTOP ACTIONS
        ======================================== */}

                <div
                    className="
            hidden
            items-center
            gap-3
            lg:flex
          "
                >
                    {/* Theme Toggle */}

                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={
                            theme === "light"
                                ? "Switch to dark mode"
                                : "Switch to light mode"
                        }
                        title={
                            theme === "light"
                                ? "Switch to dark mode"
                                : "Switch to light mode"
                        }
                        className="
        relative
        flex
        h-10
        w-10
        items-center
        justify-center
        overflow-hidden
        rounded-full
        border
        border-white/20
        bg-white/10
        !text-white
    "
                    >
                        {/* Moon - Light Theme */}

                        <span
                            className={`
            absolute
            text-[var(--accent)]
            ${theme === "light"
                                    ? "scale-100 rotate-0 opacity-100"
                                    : "scale-0 rotate-90 opacity-0"
                                }
        `}
                        >
                            <Moon size={18} strokeWidth={2} />
                        </span>

                        {/* Sun - Dark Theme */}

                        <span
                            className={`
            absolute
            text-[var(--accent)]
            ${theme === "dark"
                                    ? "scale-100 rotate-0 opacity-100"
                                    : "scale-0 -rotate-90 opacity-0"
                                }
        `}
                        >
                            <Sun size={19} strokeWidth={2} />
                        </span>
                    </button>

                    {/* Appointment */}

                    <a
                        href="/contact"
                        className="
              inline-flex
              items-center
              gap-2
              rounded-md
              bg-[var(--accent)]
              px-5
              py-3
              text-xs
              font-semibold
              !text-white
              shadow-lg
              transition-all
              duration-300
              hover:bg-[var(--accent-light)]
              hover:shadow-xl
            "
                    >
                        <Phone size={15} />

                        <span className="!text-white">Make an Appointment</span>
                    </a>
                </div>

                {/* ========================================
            MOBILE ACTIONS
        ======================================== */}

                <div
                    className="
            flex
            items-center
            gap-2
            lg:hidden
          "
                >
                    {/* Mobile Theme Toggle */}

                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label={
                            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
                        }
                        className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-white/20
              bg-white/10
              !text-white
              transition-all
              duration-300
              hover:border-[var(--accent)]
              hover:bg-[var(--accent)]
            "
                    >
                        {theme === "light" ? <Moon size={18} /> : <Sun size={19} />}
                    </button>

                    {/* Mobile Menu */}

                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-md
              border
              border-white/20
              bg-white/5
              !text-white
              transition-all
              duration-300
              hover:border-[var(--accent)]
              hover:bg-[var(--accent)]
            "
                        aria-label="Toggle navigation"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <X size={22} className="!text-white" />
                        ) : (
                            <Menu size={22} className="!text-white" />
                        )}
                    </button>
                </div>
            </div>

            {/* ========================================
          MOBILE MENU
      ======================================== */}

            <div
                className={`
          overflow-hidden
          border-t
          border-white/10
          bg-[var(--primary)]
          transition-all
          duration-300
          lg:hidden
          ${isOpen
                        ? "max-h-[600px] opacity-100"
                        : "max-h-0 border-t-0 opacity-0"
                    }
        `}
            >
                <nav
                    className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            px-5
            py-5
            sm:px-6
          "
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="
                rounded-lg
                px-4
                py-3.5
                !text-white
                text-sm
                font-medium
                transition-all
                duration-300
                hover:bg-white/10
                hover:!text-[var(--accent-light)]
              "
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Mobile Appointment */}

                    <a
                        href="/contact"
                        onClick={handleLinkClick}
                        className="
              mt-4
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-md
              bg-[var(--accent)]
              px-5
              py-3.5
              !text-white
              text-sm
              font-semibold
              transition-all
              duration-300
              hover:bg-[var(--accent-light)]
            "
                    >
                        <Phone size={17} />

                        <span className="!text-white">Make an Appointment</span>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
