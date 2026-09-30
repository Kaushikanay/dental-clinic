import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

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
        <header className="sticky top-0 z-[100] w-full border-b border-white/10 bg-[#281238] shadow-lg">

            {/* ================= NAVBAR ================= */}
            <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">

                {/* ================= LOGO ================= */}
                <a
                    href="#home"
                    onClick={handleLinkClick}
                    className="group flex items-center gap-2.5"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#ff6b35] transition duration-300 group-hover:bg-[#ff6b35]">
                        <span className="text-lg font-bold !text-[#ff6b35] group-hover:!text-white">
                            D
                        </span>
                    </div>

                    <div className="leading-none">
                        <span className="block text-lg font-bold !text-white">
                            Dental
                        </span>

                        <span className="mt-1 block text-[8px] uppercase tracking-[0.25em] !text-[#ff8a5c]">
                            Clinic Studio
                        </span>
                    </div>
                </a>

                {/* ================= DESKTOP MENU ================= */}
                <nav className="hidden items-center gap-6 lg:flex">

                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="group relative !text-white text-sm font-medium transition duration-300 hover:!text-[#ff8a5c]"
                        >
                            {link.name}

                            <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#ff6b35] transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}

                </nav>

                {/* ================= DESKTOP BUTTON ================= */}
                <a
                    href="#appointment"
                    className="hidden items-center gap-2 rounded-md bg-[#ff6b35] px-5 py-3 text-xs font-semibold !text-white shadow-lg transition duration-300 hover:bg-[#ff8a5c] lg:inline-flex"
                >
                    <Phone size={15} />

                    Make an Appointment
                </a>

                {/* ================= MOBILE BUTTON ================= */}
                <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/5 !text-white transition hover:border-[#ff6b35] hover:bg-[#ff6b35] lg:hidden"
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                >
                    {isOpen ? (
                        <X
                            size={22}
                            className="!text-white"
                        />
                    ) : (
                        <Menu
                            size={22}
                            className="!text-white"
                        />
                    )}
                </button>

            </div>

            {/* ================= MOBILE MENU ================= */}
            <div
                className={`overflow-hidden border-t border-white/10 bg-[#21102d] transition-all duration-300 lg:hidden ${isOpen
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 border-t-0 opacity-0"
                    }`}
            >
                <nav className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-6">

                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={handleLinkClick}
                            className="rounded-lg px-4 py-3.5 !text-white text-sm font-medium transition duration-200 hover:bg-white/10 hover:!text-[#ff8a5c]"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Mobile Appointment */}
                    <a
                        href="#appointment"
                        onClick={handleLinkClick}
                        className="mt-4 inline-flex items-center justify-center gap-2 rounded-md bg-[#ff6b35] px-5 py-3.5 !text-white text-sm font-semibold transition hover:bg-[#ff8a5c]"
                    >
                        <Phone size={17} />

                        Make an Appointment
                    </a>

                </nav>
            </div>

        </header>
    );
};

export default Navbar;