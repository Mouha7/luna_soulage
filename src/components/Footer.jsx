import { SlSocialFacebook } from "react-icons/sl";
import { PiTiktokLogo } from "react-icons/pi";
import { BsInstagram } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import Logo from "../assets/images/logo.png";
import OM from "../assets/images/om.jpg";
import Wave from "../assets/images/wave.jpg";
import FM from "../assets/images/fm.png";
import { FACEBOOK_PAGE, INSTAGRAM_PAGE, TIKTOK_PAGE, WA_BUSINESS_NUMBER } from "../constants/info";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
    fadeInUp, 
    fadeInLeft, 
    fadeInRight, 
    staggerContainer, 
    hoverScale,
    listItemVariant,
    footerLinkVariant,
    paymentLogoVariant,
    socialIconVariant 
} from "../constants/animationVariants";

export function Footer() {
    const facebookLink = FACEBOOK_PAGE;
    const instagramLink = INSTAGRAM_PAGE;
    const tiktokLink = TIKTOK_PAGE;
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
    };

    return (
        <motion.footer 
            className="mt-5 sm:mt-6 md:mt-7 px-3 sm:px-4 md:px-5 border-t border-ombre/25 bg-background"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
        >
            <motion.div 
                className="container mx-auto flex flex-col md:flex-row flex-wrap gap-6 sm:gap-8 md:gap-4 lg:gap-6 px-2 sm:px-4 md:px-6 lg:px-14 py-4"
                variants={staggerContainer}
            >
                {/* Logo - masqué sur mobile et tablette */}
                <motion.div variants={fadeInLeft}>
                    <button 
                        onClick={() => scrollToSection('hero')} 
                        className="hidden lg:flex items-center w-full lg:w-auto lg:flex-shrink-0 lg:mr-8"
                    >
                        <motion.img
                            className="w-20 md:w-24 object-contain h-auto"
                            loading="lazy"
                            src={Logo}
                            alt="Logo Luna Soulage"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </button>
                </motion.div>

                {/* Grille de liens responsive */}
                <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-4 lg:gap-6 w-full lg:flex-1"
                    variants={staggerContainer}
                >
                    {/* Colonne 1 - Produit */}
                    <motion.div 
                        className="flex flex-col gap-2 sm:gap-3"
                        variants={fadeInUp}
                    >
                        <motion.h2 
                            className="text-lg sm:text-xl font-bold uppercase text-primary"
                            variants={fadeInLeft}
                        >
                            Notre produit
                        </motion.h2>
                        <motion.div variants={staggerContainer}>
                            <motion.div variants={listItemVariant}>
                                <button 
                                    onClick={() => scrollToSection('problem-solution')} 
                                    className="text-sm sm:text-base hover:text-txtLight hover:underline block text-left"
                                >
                                    <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                        Présentation du produit
                                    </motion.span>
                                </button>
                            </motion.div>
                            <motion.div variants={listItemVariant}>
                                <button 
                                    onClick={() => scrollToSection('how-it-works')} 
                                    className="text-sm sm:text-base hover:text-txtLight hover:underline block text-left"
                                >
                                    <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                        Mode d'emploi
                                    </motion.span>
                                </button>
                            </motion.div>
                            <motion.div variants={listItemVariant}>
                                <button 
                                    onClick={() => scrollToSection('testimonials')} 
                                    className="text-sm sm:text-base hover:text-txtLight hover:underline block text-left"
                                >
                                    <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                        Témoignages clients
                                    </motion.span>
                                </button>
                            </motion.div>
                            <motion.div variants={listItemVariant}>
                                <button 
                                    onClick={() => scrollToSection('faq')} 
                                    className="text-sm sm:text-base hover:text-txtLight hover:underline block text-left"
                                >
                                    <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                        FAQ
                                    </motion.span>
                                </button>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Colonne 2 - Contact */}
                    <motion.div 
                        className="flex flex-col gap-2 sm:gap-3"
                        variants={fadeInUp}
                    >
                        <motion.h2 
                            className="text-lg sm:text-xl font-bold uppercase text-primary"
                            variants={fadeInLeft}
                        >
                            Contact
                        </motion.h2>
                        <motion.div variants={listItemVariant}>
                            <a 
                                href={whatsApp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm sm:text-base hover:text-txtLight hover:underline font-medium block"
                            >
                                <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                    Commander maintenant
                                </motion.span>
                            </a>
                        </motion.div>
                        <motion.p 
                            className="text-sm sm:text-base text-txt"
                            variants={listItemVariant}
                        >
                            WhatsApp: (+221) 77 593 76 79
                        </motion.p>
                        <motion.p 
                            className="text-sm sm:text-base text-txt"
                            variants={listItemVariant}
                        >
                            Email: lunasoulage@gmail.com
                        </motion.p>
                        <motion.div 
                            className="flex gap-3 items-center mt-1 text-txtLight"
                            variants={staggerContainer}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.a 
                                href={facebookLink}
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Facebook"
                                variants={listItemVariant}
                                whileHover="hover"
                            >
                                <motion.div variants={socialIconVariant}>
                                    <SlSocialFacebook className="text-lg sm:text-xl cursor-pointer" />
                                </motion.div>
                            </motion.a>
                            <motion.a 
                                href={tiktokLink}
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="TikTok"
                                variants={listItemVariant}
                                whileHover="hover"
                            >
                                <motion.div variants={socialIconVariant}>
                                    <PiTiktokLogo className="text-lg sm:text-xl cursor-pointer" />
                                </motion.div>
                            </motion.a>
                            <motion.a 
                                href={instagramLink} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label="Instagram"
                                variants={listItemVariant}
                                whileHover="hover"
                            >
                                <motion.div variants={socialIconVariant}>
                                    <BsInstagram className="text-lg sm:text-xl cursor-pointer" />
                                </motion.div>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Colonne 3 - Informations */}
                    <motion.div 
                        className="flex flex-col gap-2 sm:gap-3"
                        variants={fadeInUp}
                    >
                        <motion.h2 
                            className="text-lg sm:text-xl font-bold uppercase text-primary"
                            variants={fadeInLeft}
                        >
                            Informations
                        </motion.h2>
                        <motion.div variants={staggerContainer}>
                            <motion.div variants={listItemVariant}>
                                <button 
                                    onClick={() => scrollToSection('key-benefits')} 
                                    className="text-sm sm:text-base hover:text-txtLight hover:underline block text-left"
                                >
                                    <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                        Avantages
                                    </motion.span>
                                </button>
                            </motion.div>
                            <motion.div variants={listItemVariant}>
                                <button 
                                    onClick={() => scrollToSection('packs-prix')} 
                                    className="text-sm sm:text-base hover:text-txtLight hover:underline block text-left"
                                >
                                    <motion.span whileHover="hover" variants={footerLinkVariant} className="inline-block">
                                        Nos packs
                                    </motion.span>
                                </button>
                            </motion.div>
                        </motion.div>
                        <motion.div 
                            className="mt-3"
                            variants={fadeInRight}
                        >
                            <motion.h3 
                                className="text-sm sm:text-base font-semibold text-primary"
                                variants={fadeInUp}
                            >
                                Méthodes de paiement
                            </motion.h3>
                            <motion.div 
                                className="flex flex-wrap gap-2 items-center mt-1"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                <motion.img 
                                    className="w-[30px] h-[22px] sm:w-[34px] sm:h-[24px] border border-bordure/20 rounded object-contain bg-blanc" 
                                    src={OM} 
                                    loading="lazy" 
                                    alt="Orange Money" 
                                    title="Orange Money"
                                    variants={paymentLogoVariant}
                                    whileHover="hover"
                                />
                                <motion.img 
                                    className="w-[30px] h-[22px] sm:w-[34px] sm:h-[24px] border border-bordure/20 rounded object-contain bg-blanc" 
                                    src={Wave} 
                                    loading="lazy" 
                                    alt="Wave" 
                                    title="Wave"
                                    variants={paymentLogoVariant}
                                    whileHover="hover"
                                />
                                <motion.img 
                                    className="w-[30px] h-[22px] sm:w-[34px] sm:h-[24px] border border-bordure/20 rounded object-contain bg-blanc" 
                                    src={FM} 
                                    loading="lazy" 
                                    alt="Free Money" 
                                    title="Free Money"
                                    variants={paymentLogoVariant}
                                    whileHover="hover"
                                />
                                <motion.div
                                    variants={paymentLogoVariant}
                                    whileHover="hover"
                                >
                                    <CiDeliveryTruck className="w-[30px] h-[22px] sm:w-[34px] sm:h-[24px] border border-bordure/20 rounded p-0.5 bg-blanc text-primary" title="Paiement à la livraison" />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Copyright */}
            <motion.div 
                className="border-t border-ombre/10 mt-4 sm:mt-6"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <motion.p 
                    className="text-center py-2.5 text-xs sm:text-sm text-txt"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    &copy; {new Date().getFullYear()} Luna Soulage. Tous droits réservés.
                    Réalisation:{" "}
                    <motion.a 
                        href="https://smrs.sn" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-primary hover:underline hover:text-txtLight"
                        whileHover={hoverScale}
                    >
                        SMRS
                    </motion.a>
                </motion.p>
            </motion.div>
        </motion.footer>
    );
}