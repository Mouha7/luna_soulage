import { Link } from "react-router-dom";
import { BtnCustom } from "../components/Btn";
import { RiEmotionSadLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { ImCompass } from "react-icons/im";
import { BsArrowRightShort } from "react-icons/bs";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
    fadeInUp, 
    fadeInLeft, 
    fadeInRight, 
    staggerContainer, 
    cardVariant, 
    hoverScale,
    hoverScaleShadow,
    listItemVariant,
    iconContainerVariant,
    compassVariant,
    searchVariant,
    titleVariant,
    dividerVariant,
    badgeVariant
} from "../constants/animationVariants";

const NotFoundPage = () => {
    return (
        <motion.div 
            className="flex flex-col w-full justify-center items-center min-h-[80vh] py-16 px-4"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
        >
            <div className="container mx-auto max-w-4xl flex flex-col items-center">
                {/* Illustration élégante avec React Icons */}
                <motion.div 
                    className="mb-10 relative"
                    variants={iconContainerVariant}
                >
                    <motion.div 
                        className="bg-primary/10 rounded-full p-8 md:p-10 relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                        <RiEmotionSadLine className="text-primary text-7xl md:text-8xl" />
                        <motion.div 
                            className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 border-2 border-primary/20 shadow-md"
                            variants={searchVariant}
                        >
                            <FiSearch className="text-primary text-2xl md:text-3xl" />
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
                        variants={compassVariant}
                    >
                        <div className="bg-white rounded-full p-2 shadow-md border border-primary/20">
                            <ImCompass className="text-primary/70 text-2xl md:text-3xl animate-pulse" />
                        </div>
                    </motion.div>
                </motion.div>

                {/* Texte et boutons */}
                <motion.div 
                    className="text-center mb-12"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 
                        className="text-5xl md:text-7xl font-black text-primary mb-2 tracking-tight"
                        variants={titleVariant}
                    >
                        404
                    </motion.h1>
                    <motion.div 
                        className="h-1 bg-primary/30 mx-auto mb-6 rounded-full"
                        variants={dividerVariant}
                        style={{ width: "4rem" }}
                    ></motion.div>
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-primary mb-4"
                        variants={fadeInUp}
                    >
                        Page non trouvée
                    </motion.h2>
                    <motion.p 
                        className="text-txt text-lg mb-4 max-w-xl mx-auto"
                        variants={fadeInUp}
                    >
                        Oups ! La page que vous recherchez semble avoir disparu aussi rapidement qu'une douleur avec Luna Soulage.
                    </motion.p>
                    <motion.p 
                        className="text-txtLight text-base mb-10"
                        variants={fadeInUp}
                    >
                        L'URL que vous avez saisie peut être incorrecte ou la page a été déplacée.
                    </motion.p>
                </motion.div>

                {/* Actions */}
                <motion.div 
                    className="flex flex-col sm:flex-row justify-center gap-5 mb-16"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    transition={{ delayChildren: 0.6, staggerChildren: 0.2 }}
                >
                    <motion.div variants={fadeInLeft}>
                        <BtnCustom
                            to="/"
                            text="Retour à l'accueil"
                            className="min-w-[180px] text-center py-3"
                        />
                    </motion.div>
                    
                    <motion.div variants={fadeInRight}>
                        <BtnCustom
                            to="/contact"
                            text="Nous contacter"
                            className="min-w-[180px] text-center py-3"
                        />
                    </motion.div>
                </motion.div>

                {/* Suggestions */}
                <motion.div 
                    className="bg-white rounded-lg p-8 shadow-md w-full border border-ombre/5"
                    variants={cardVariant}
                    initial="hidden"
                    animate="visible"
                    whileHover={hoverScaleShadow}
                    transition={{ delay: 0.8 }}
                >
                    <motion.h3 
                        className="font-bold text-primary text-lg mb-5 flex items-center"
                        variants={fadeInUp}
                    >
                        <span className="inline-block w-3 h-3 bg-primary rounded-full mr-3"></span>
                        Vous pourriez être intéressée par :
                    </motion.h3>
                    <motion.ul 
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.li variants={listItemVariant}>
                            <Link to="/presentation" className="text-txt hover:text-primary flex items-center group">
                                <BsArrowRightShort className="mr-2 text-primary text-xl group-hover:translate-x-1 transition-transform" /> 
                                <span className="border-b border-transparent group-hover:border-primary transition-colors">
                                    Découvrir nos patchs Luna Soulage
                                </span>
                            </Link>
                        </motion.li>
                        <motion.li variants={listItemVariant}>
                            <Link to="/instructions" className="text-txt hover:text-primary flex items-center group">
                                <BsArrowRightShort className="mr-2 text-primary text-xl group-hover:translate-x-1 transition-transform" /> 
                                <span className="border-b border-transparent group-hover:border-primary transition-colors">
                                    Comment utiliser nos patchs
                                </span>
                            </Link>
                        </motion.li>
                        <motion.li variants={listItemVariant}>
                            <Link to="/temoignages" className="text-txt hover:text-primary flex items-center group">
                                <BsArrowRightShort className="mr-2 text-primary text-xl group-hover:translate-x-1 transition-transform" /> 
                                <span className="border-b border-transparent group-hover:border-primary transition-colors">
                                    Témoignages de nos clientes
                                </span>
                            </Link>
                        </motion.li>
                        <motion.li variants={listItemVariant}>
                            <Link to="/faq" className="text-txt hover:text-primary flex items-center group">
                                <BsArrowRightShort className="mr-2 text-primary text-xl group-hover:translate-x-1 transition-transform" /> 
                                <span className="border-b border-transparent group-hover:border-primary transition-colors">
                                    Foire aux questions
                                </span>
                            </Link>
                        </motion.li>
                    </motion.ul>
                </motion.div>
            </div>

            {/* Badges de réassurance avec design élégant */}
            <motion.div 
                className="flex flex-wrap justify-center gap-5 mt-12"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                transition={{ 
                    delayChildren: 1, 
                    staggerChildren: 0.15 
                }}
            >
                <motion.div 
                    className="bg-primary/5 text-primary text-sm font-semibold py-3 px-6 rounded-full border border-primary/20 shadow-sm hover:bg-primary/10 transition-colors"
                    variants={badgeVariant}
                    whileHover={hoverScale}
                >
                    100% naturel
                </motion.div>
                <motion.div 
                    className="bg-primary/5 text-primary text-sm font-semibold py-3 px-6 rounded-full border border-primary/20 shadow-sm hover:bg-primary/10 transition-colors"
                    variants={badgeVariant}
                    whileHover={hoverScale}
                >
                    Livraison rapide
                </motion.div>
                <motion.div 
                    className="bg-primary/5 text-primary text-sm font-semibold py-3 px-6 rounded-full border border-primary/20 shadow-sm hover:bg-primary/10 transition-colors"
                    variants={badgeVariant}
                    whileHover={hoverScale}
                >
                    Satisfaite ou remboursée
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default NotFoundPage;