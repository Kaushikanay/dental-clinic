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
        relative
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
                transition-all
                duration-500
                ease-in-out
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
                transition-all
                duration-500
                ease-in-out
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
                        <Phone size={15} className="!text-white" />

                        <span className="!text-white">
                            Make an Appointment
                        </span>
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
              group
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
              shadow-sm
              transition-all
              duration-300
              hover:scale-105
              hover:border-[var(--accent)]
              hover:bg-[var(--accent)]
              active:scale-90
            "
                    >
                        <span
                            className={`
                flex
                items-center
                justify-center
                text-[var(--accent)]
                transition-all
                duration-500
                ease-out
                ${theme === "light"
                                    ? "rotate-0 scale-100"
                                    : "rotate-180 scale-100"
                                }
              `}
                        >
                            {theme === "light" ? (
                                <Moon
                                    size={18}
                                    strokeWidth={2}
                                    className="
                    !text-[var(--accent)]
                    transition-transform
                    duration-300
                    group-hover:rotate-[-20deg]
                  "
                                />
                            ) : (
                                <Sun
                                    size={19}
                                    strokeWidth={2}
                                    className="
                    !text-[var(--accent)]
                    transition-transform
                    duration-300
                    group-hover:rotate-45
                  "
                                />
                            )}
                        </span>
                    </button>

                    {/* Mobile Menu Button */}

                    <button
                        type="button"
                        onClick={() => setIsOpen((prev) => !prev)}
                        className="
              group
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
              shadow-sm
              transition-all
              duration-300
              hover:scale-105
              hover:border-[var(--accent)]
              hover:bg-[var(--accent)]
              active:scale-90
            "
                        aria-label="Toggle navigation"
                        aria-expanded={isOpen}
                    >
                        <span
                            className={`
                flex
                items-center
                justify-center
                transition-all
                duration-500
                ease-in-out
                ${isOpen
                                    ? "rotate-90 scale-100"
                                    : "rotate-0 scale-100"
                                }
              `}
                        >
                            {isOpen ? (
                                <X
                                    size={22}
                                    className="
                    !text-white
                    transition-all
                    duration-300
                  "
                                />
                            ) : (
                                <Menu
                                    size={22}
                                    className="
                    !text-white
                    transition-all
                    duration-300
                  "
                                />
                            )}
                        </span>
                    </button>
                </div>
            </div>

            {/* ========================================
          MOBILE MENU
          
          IMPORTANT:
          absolute + top-full keeps the menu
          outside normal document flow.
          Therefore the page will NOT be pushed.
      ======================================== */}

            <div
                className={`
          absolute
          left-0
          top-full
          z-50
          w-full
          overflow-hidden
          border-t
          border-white/10
          bg-[var(--primary)]
          shadow-xl
          transition-all
          duration-500
          ease-in-out
          lg:hidden
          ${isOpen
                        ? "pointer-events-auto max-h-[700px] opacity-100"
                        : "pointer-events-none max-h-0 border-t-0 opacity-0"
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
                    {navLinks.map((link, index) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={handleLinkClick}
                            className={`
                rounded-lg
                px-4
                py-3.5
                !text-white
                text-sm
                font-medium
                transition-all
                duration-500
                ease-out
                hover:bg-white/10
                hover:!text-[var(--accent-light)]

                ${isOpen
                                    ? "translate-x-0 opacity-100"
                                    : index % 2 === 0
                                        ? "-translate-x-10 opacity-0"
                                        : "translate-x-10 opacity-0"
                                }
              `}
                            style={{
                                transitionDelay: isOpen
                                    ? `${index * 80}ms`
                                    : "0ms",
                            }}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* ========================================
              MOBILE APPOINTMENT
          ======================================== */}

                    <a
                        href="/contact"
                        onClick={handleLinkClick}
                        className={`
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
              shadow-lg
              transition-all
              duration-500
              ease-out
              hover:bg-[var(--accent-light)]
              hover:shadow-xl

              ${isOpen
                                ? "translate-y-0 opacity-100"
                                : "translate-y-6 opacity-0"
                            }
            `}
                        style={{
                            transitionDelay: isOpen
                                ? `${navLinks.length * 80 + 100}ms`
                                : "0ms",
                        }}
                    >
                        <Phone size={17} className="!text-white" />

                        <span className="!text-white">
                            Make an Appointment
                        </span>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
