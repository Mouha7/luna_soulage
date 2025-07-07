import { useState, useEffect, useRef } from "react";
import Logo from "../assets/images/logo.png";
import { WA_BUSINESS_NUMBER } from "../constants/info";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const menuRef = useRef(null);

    const whatsApp = WA_BUSINESS_NUMBER + "?text=Bonjour,%20je%20souhaite%20commander%20des%20patchs%20Luna%20Soulage";

    // Fonction pour faire défiler vers une section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
        setIsOpen(false); // Fermer le menu mobile après clic
    };

    // Classe pour les liens de navigation desktop
    const navLinkStyles = "font-medium hover:text-txtLight hover:border-b-2 hover:border-primary transition-colors duration-200 px-2 py-1.5 md:px-3 md:py-2 cursor-pointer";

    // Style pour les liens du menu mobile
    const mobileNavLinkStyles = "block text-lg font-medium hover:text-txtLight hover:border-b-2 hover:border-primary transition-colors duration-200 py-1 cursor-pointer";

    // Détecter le scroll pour appliquer l'ombre
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setHasScrolled(scrollTop > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Ferme le menu si l'écran devient plus grand que md ou si on clique en dehors
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };

        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && isOpen) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("resize", handleResize);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, menuRef]);

    // Empêcher le défilement du body quand le menu est ouvert sur mobile
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <header
            className={`sticky top-0 z-50 bg-background/80 backdrop-blur-md px-4 sm:px-6 md:px-8 lg:px-14 py-2 md:py-3 transition-shadow duration-300 ${
                hasScrolled ? "shadow-md" : "shadow-none"
            }`}
        >
            <div className="max-w-screen-xl mx-auto flex items-center justify-between relative">
                {/* Logo */}
                <div className="relative z-20">
                    <button
                        onClick={() => scrollToSection('hero')}
                        className="flex items-center"
                    >
                        <img
                            className="w-12 sm:w-14 md:w-16 h-auto"
                            src={Logo}
                            alt="Logo Luna Soulage"
                        />
                    </button>
                </div>

                {/* Navigation desktop */}
                <div className="hidden md:block z-20">
                    <nav className="container mx-auto">
                        <ul className="flex items-center space-x-1 lg:space-x-3">
                            <li>
                                <button 
                                    onClick={() => scrollToSection('hero')} 
                                    className={navLinkStyles}
                                >
                                    Accueil
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('problem-solution')} 
                                    className={navLinkStyles}
                                >
                                    Présentation
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('how-it-works')} 
                                    className={navLinkStyles}
                                >
                                    Mode d'emploi
                                </button>
                            </li>
                            <li>
                                <button 
                                    onClick={() => scrollToSection('testimonials')} 
                                    className={navLinkStyles}
                                >
                                    Témoignages
                                </button>
                            </li>
                            <li>
                                <a 
                                    href={whatsApp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-medium bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors duration-200"
                                >
                                    Commander
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Navigation mobile */}
                {isOpen && (
                    <div
                        ref={menuRef}
                        className="fixed inset-0 top-0 bg-background z-50 md:hidden"
                    >
                        <div className="flex justify-between items-center px-4 py-2 md:py-3">
                            <button
                                onClick={() => scrollToSection('hero')}
                                className="flex items-center"
                            >
                                <img
                                    className="w-12 sm:w-14 h-auto"
                                    src={Logo}
                                    alt="Logo Luna Soulage"
                                />
                            </button>
                            <button
                                className="flex items-center cursor-pointer justify-center w-10 h-10"
                                onClick={() => setIsOpen(false)}
                                aria-label="Fermer le menu"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="w-6 h-6 text-txtLight"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <nav className="container mx-auto h-full">
                            <ul className="w-screen h-screen flex flex-col space-y-6 text-txt bg-background px-6 pt-6">
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('hero')} 
                                        className={mobileNavLinkStyles}
                                    >
                                        Accueil
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('problem-solution')} 
                                        className={mobileNavLinkStyles}
                                    >
                                        Présentation
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('how-it-works')} 
                                        className={mobileNavLinkStyles}
                                    >
                                        Mode d'emploi
                                    </button>
                                </li>
                                <li>
                                    <button 
                                        onClick={() => scrollToSection('testimonials')} 
                                        className={mobileNavLinkStyles}
                                    >
                                        Témoignages
                                    </button>
                                </li>
                                <li>
                                    <a 
                                        href={whatsApp}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block text-lg font-medium bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition-colors duration-200 text-center mt-4"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Commander
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                )}

                {/* Icône menu hamburger */}
                <div className="flex items-center gap-3 sm:gap-5 relative z-20">
                    <button
                        className="md:hidden flex items-center cursor-pointer justify-center w-8 h-8 bg-primary/20 rounded-full"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label="Menu principal"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2.5"
                            stroke="currentColor"
                            className="w-5 h-5 text-primary"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
