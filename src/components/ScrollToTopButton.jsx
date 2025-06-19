import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { hoverScale, buttonTapAnimation } from "../constants/animationVariants";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Vérifier la position de défilement et mettre à jour la visibilité
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Afficher le bouton lorsque l'utilisateur a défilé de 300px
            setIsVisible(scrollY > 300);
        };

        // Ajouter l'écouteur d'événement avec passive: true pour améliorer les performances
        window.addEventListener("scroll", handleScroll, { passive: true });
        
        // Vérifier immédiatement au chargement
        handleScroll();
        
        // Nettoyer l'écouteur d'événement lors du démontage
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Version améliorée de la fonction scrollToTop
    const scrollToTop = () => {
        const currentPosition = window.pageYOffset;
        const scrollStep = Math.PI / (500 / 15); // 500ms pour l'animation complète
        let count = 0;
        let scrollInterval = setInterval(() => {
            if (window.pageYOffset !== 0) {
                count += 1;
                window.scrollTo(0, currentPosition * Math.cos(count * scrollStep));
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full p-3 shadow-lg hover:bg-primary/80 transition-colors"
                    aria-label="Retour en haut"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    whileHover={hoverScale}
                    whileTap={buttonTapAnimation}
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 10l7-7m0 0l7 7m-7-7v18" 
                        />
                    </svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTopButton;