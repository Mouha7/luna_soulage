import BannerFaq from "../assets/images/banner_faq.jpg"; // À ajouter dans vos assets
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BtnCustom } from "../components/Btn";
import { IoIosArrowForward } from "react-icons/io";
import { FiTruck } from "react-icons/fi";
import { BsCreditCard, BsBox } from "react-icons/bs";
import { MdOutlineHelpOutline } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { PiWhatsappLogoFill } from "react-icons/pi";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { 
    fadeInUp, 
    fadeInLeft, 
    fadeInRight, 
    staggerContainer, 
    cardVariant, 
    hoverScale,
    hoverScaleShadow,
    bannerAnimation,
    bannerContentAnimation,
    listItemVariant,
    tabContentVariants,
    badgeVariant
} from "../constants/animationVariants";

const FaqPage = () => {
    const [activeTab, setActiveTab] = useState("produit");
    
    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className="flex flex-col w-full justify-center items-center">
            {/* Bannière principale */}
            <motion.div
                className="lg-fully-style fully-style bg-cover bg-center bg-no-repeat md:h-[570px] sm:h-[450px] h-[400px] shadow-lg"
                style={{ backgroundImage: `url(${BannerFaq})` }}
                variants={bannerAnimation}
                initial="hidden"
                animate="visible"
            >
                <motion.div 
                    className="flex flex-col items-center justify-center gap-3 md:gap-5 h-full bg-black/50 text-white p-4 md:p-5"
                    variants={bannerContentAnimation}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-center">
                        Questions fréquentes et informations de livraison
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-center">
                        Tout ce que vous devez savoir sur Luna Soulage
                    </p>
                </motion.div>
            </motion.div>

            {/* Introduction */}
            <motion.section 
                className="container mx-auto px-4 py-12 md:py-16"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.p 
                    className="text-txt text-center max-w-3xl mx-auto text-lg"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                >
                    Vous avez des questions sur nos patchs ou sur le processus de livraison ? Retrouvez ci-dessous les réponses aux questions les plus fréquemment posées. Si vous ne trouvez pas l'information que vous recherchez, n'hésitez pas à nous contacter directement.
                </motion.p>
            </motion.section>

            {/* Navigation par onglets */}
            <motion.section 
                className="container mx-auto px-4"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
            >
                <motion.div 
                    className="flex flex-wrap justify-center gap-2 mb-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.button
                        onClick={() => handleTabChange("produit")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-colors ${
                            activeTab === "produit"
                                ? "bg-primary text-white"
                                : "bg-primary/10 text-primary hover:bg-primary/20"
                        }`}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <BsBox className="text-lg" /> Produit
                    </motion.button>
                    <motion.button
                        onClick={() => handleTabChange("utilisation")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-colors ${
                            activeTab === "utilisation"
                                ? "bg-primary text-white"
                                : "bg-primary/10 text-primary hover:bg-primary/20"
                        }`}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <AiOutlineQuestionCircle className="text-lg" /> Utilisation
                    </motion.button>
                    <motion.button
                        onClick={() => handleTabChange("commande")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-colors ${
                            activeTab === "commande"
                                ? "bg-primary text-white"
                                : "bg-primary/10 text-primary hover:bg-primary/20"
                        }`}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <BsCreditCard className="text-lg" /> Commande et paiement
                    </motion.button>
                    <motion.button
                        onClick={() => handleTabChange("livraison")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-colors ${
                            activeTab === "livraison"
                                ? "bg-primary text-white"
                                : "bg-primary/10 text-primary hover:bg-primary/20"
                        }`}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FiTruck className="text-lg" /> Livraison
                    </motion.button>
                    <motion.button
                        onClick={() => handleTabChange("retours")}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-colors ${
                            activeTab === "retours"
                                ? "bg-primary text-white"
                                : "bg-primary/10 text-primary hover:bg-primary/20"
                        }`}
                        variants={fadeInUp}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <MdOutlineHelpOutline className="text-lg" /> Retours et remboursements
                    </motion.button>
                </motion.div>
            </motion.section>
            
            {/* Contenu des onglets */}
            <section className="container mx-auto px-4 pb-16">
                <AnimatePresence mode="wait">
                    {/* Onglet Produit */}
                    {activeTab === "produit" && (
                        <motion.div 
                            className="bg-card p-6 mb-8"
                            key="produit"
                            variants={tabContentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.h2 
                                className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                                variants={fadeInUp}
                            >
                                À propos du produit
                            </motion.h2>
                            
                            <motion.div 
                                className="space-y-8 max-w-4xl mx-auto"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">De quoi sont composés les patchs Luna Soulage ?</h3>
                                    <p className="text-txt">
                                        Les patchs Luna Soulage sont fabriqués à partir d'ingrédients 100% naturels, dont des extraits de plantes médicinales traditionnellement utilisées pour soulager les douleurs menstruelles : gingembre, menthe poivrée, camomille, et huiles essentielles de lavande et d'eucalyptus. Tous nos ingrédients sont sélectionnés pour leur qualité et leur efficacité.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Comment fonctionnent les patchs Luna Soulage ?</h3>
                                    <p className="text-txt mb-4">
                                        Nos patchs agissent de deux façons :
                                    </p>
                                    <motion.ol 
                                        className="list-decimal pl-5 space-y-2 text-txt"
                                        variants={staggerContainer}
                                    >
                                        <motion.li variants={listItemVariant}>
                                            Les principes actifs naturels pénètrent dans la peau et stimulent la circulation sanguine, ce qui aide à détendre les muscles utérins contractés.
                                        </motion.li>
                                        <motion.li variants={listItemVariant}>
                                            La chaleur douce générée par le patch contribue à apaiser les tensions musculaires et à réduire la sensation de douleur.
                                        </motion.li>
                                    </motion.ol>
                                    <p className="text-txt mt-4">
                                        Cette double action permet un soulagement rapide et durable des crampes menstruelles.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Les patchs Luna Soulage sont-ils testés dermatologiquement ?</h3>
                                    <p className="text-txt">
                                        Oui, tous nos patchs ont été testés dermatologiquement pour garantir leur sécurité et minimiser les risques d'irritation cutanée. Ils conviennent à tous les types de peau.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Combien de temps se conservent les patchs ?</h3>
                                    <p className="text-txt">
                                        Les patchs Luna Soulage se conservent pendant 24 mois dans leur emballage fermé. Une fois l'emballage ouvert, nous recommandons d'utiliser le patch immédiatement pour garantir son efficacité maximale.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Les patchs Luna Soulage peuvent-ils traiter l'endométriose ou les douleurs sévères ?</h3>
                                    <p className="text-txt">
                                        Nos patchs sont conçus pour soulager les douleurs menstruelles modérées à intenses. Bien qu'ils puissent apporter un soulagement temporaire aux personnes souffrant d'endométriose ou de dysménorrhée sévère, ils ne constituent pas un traitement médical pour ces conditions. Nous recommandons toujours de consulter un professionnel de la santé pour les douleurs persistantes ou inhabituellement sévères.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                    
                    {/* Onglet Utilisation */}
                    {activeTab === "utilisation" && (
                        <motion.div 
                            className="bg-card p-6 mb-8"
                            key="utilisation"
                            variants={tabContentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.h2 
                                className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                                variants={fadeInUp}
                            >
                                Utilisation des patchs
                            </motion.h2>
                            
                            <motion.div 
                                className="space-y-8 max-w-4xl mx-auto"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Où dois-je appliquer le patch ?</h3>
                                    <p className="text-txt">
                                        Appliquez le patch directement sur la zone douloureuse, généralement le bas-ventre ou le bas du dos. Pour une efficacité optimale, assurez-vous que la peau est propre et sèche avant l'application.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Combien de temps dure l'effet du patch ?</h3>
                                    <p className="text-txt">
                                        Un seul patch procure un soulagement pendant environ 8 heures. Vous pouvez le garder pendant la nuit ou toute la journée.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Puis-je utiliser plusieurs patchs à la fois ?</h3>
                                    <p className="text-txt">
                                        Oui, vous pouvez appliquer un patch sur le bas-ventre et un autre sur le bas du dos simultanément si vous ressentez des douleurs aux deux endroits.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Les patchs sont-ils visibles sous les vêtements ?</h3>
                                    <p className="text-txt">
                                        Non, les patchs Luna Soulage sont ultra-minces et conçus pour être discrets. Ils sont pratiquement invisibles sous tous les types de vêtements, même les plus ajustés.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Puis-je me doucher ou nager avec le patch ?</h3>
                                    <p className="text-txt">
                                        Nous ne recommandons pas de mouiller le patch, car cela pourrait réduire son adhérence et son efficacité. Il est préférable de retirer le patch avant de vous doucher ou de nager, puis d'en appliquer un nouveau après avoir bien séché votre peau.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Les patchs peuvent-ils provoquer des réactions allergiques ?</h3>
                                    <p className="text-txt">
                                        Bien que rares, des réactions allergiques sont possibles comme avec tout produit appliqué sur la peau. Nous recommandons de faire un test cutané sur une petite zone avant la première utilisation. Si vous ressentez des démangeaisons, rougeurs ou gonflements, retirez immédiatement le patch et rincez la zone à l'eau claire.
                                    </p>
                                </motion.div>
                            </motion.div>
                            
                            <motion.div 
                                className="text-center mt-8"
                                variants={fadeInUp}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.5 }}
                            >
                                <NavLink to="/instructions" className="inline-flex items-center text-primary font-medium hover:underline">
                                    Consultez notre mode d'emploi détaillé <IoIosArrowForward className="ml-1" />
                                </NavLink>
                            </motion.div>
                        </motion.div>
                    )}
                    
                    {/* Onglet Commande et paiement */}
                    {activeTab === "commande" && (
                        <motion.div 
                            className="bg-card p-6 mb-8"
                            key="commande"
                            variants={tabContentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.h2 
                                className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                                variants={fadeInUp}
                            >
                                Commande et paiement
                            </motion.h2>
                            
                            <motion.div 
                                className="space-y-8 max-w-4xl mx-auto"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Comment puis-je commander des patchs Luna Soulage ?</h3>
                                    <p className="text-txt">
                                        Vous pouvez commander nos patchs directement via notre service WhatsApp en cliquant sur le bouton "Commander via WhatsApp" présent sur notre site. Notre équipe vous guidera à travers le processus de commande.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Quels sont les modes de paiement acceptés ?</h3>
                                    <p className="text-txt mb-2">
                                        Nous acceptons plusieurs modes de paiement :
                                    </p>
                                    <motion.ul 
                                        className="list-disc pl-5 space-y-1 text-txt"
                                        variants={staggerContainer}
                                    >
                                        <motion.li variants={listItemVariant}>Orange Money</motion.li>
                                        <motion.li variants={listItemVariant}>Wave</motion.li>
                                        <motion.li variants={listItemVariant}>Free Money</motion.li>
                                        <motion.li variants={listItemVariant}>Espèces à la livraison (uniquement pour Dakar)</motion.li>
                                    </motion.ul>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Ma commande est-elle sécurisée ?</h3>
                                    <p className="text-txt">
                                        Oui, toutes les transactions sont sécurisées. Nous ne conservons pas vos informations de paiement et nous utilisons des canaux sécurisés pour le traitement des commandes.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Puis-je annuler ma commande après l'avoir passée ?</h3>
                                    <p className="text-txt">
                                        Vous pouvez annuler votre commande dans les 24 heures suivant votre achat en nous contactant directement par WhatsApp. Au-delà de ce délai, si votre commande a déjà été préparée pour expédition, nous ne pourrons plus l'annuler.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Existe-t-il des options d'abonnement ou de livraison régulière ?</h3>
                                    <p className="text-txt">
                                        Oui, nous proposons un service d'abonnement mensuel qui vous permet de recevoir automatiquement votre pack de patchs chaque mois. Vous bénéficiez ainsi d'une réduction de 10% sur chaque commande et vous n'avez plus à vous soucier de passer commande chaque mois.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                    
                    {/* Onglet Livraison */}
                    {activeTab === "livraison" && (
                        <motion.div 
                            className="bg-card p-6 mb-8"
                            key="livraison"
                            variants={tabContentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.h2 
                                className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                                variants={fadeInUp}
                            >
                                Informations sur la livraison
                            </motion.h2>
                            
                            <motion.div 
                                className="space-y-8 max-w-4xl mx-auto"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Quelles sont les zones desservies pour la livraison ?</h3>
                                    <p className="text-txt">
                                        Nous livrons dans toutes les régions du Sénégal. Pour les pays limitrophes (Mauritanie, Mali, Guinée, Guinée-Bissau, Gambie), veuillez nous contacter pour des arrangements spécifiques.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Quels sont les délais de livraison ?</h3>
                                    <motion.ul 
                                        className="list-disc pl-5 space-y-1 text-txt"
                                        variants={staggerContainer}
                                    >
                                        <motion.li variants={listItemVariant}>Dakar et banlieue : 24 à 48 heures</motion.li>
                                        <motion.li variants={listItemVariant}>Autres régions du Sénégal : 3 à 5 jours ouvrables</motion.li>
                                        <motion.li variants={listItemVariant}>International : 7 à 14 jours ouvrables (selon le pays)</motion.li>
                                    </motion.ul>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">La livraison est-elle gratuite ?</h3>
                                    <p className="text-txt">
                                        La livraison est gratuite à Dakar pour toute commande. Pour les autres régions du Sénégal, des frais de livraison s'appliquent en fonction de la distance (entre 1000 et 3000 FCFA).
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Comment suivre ma commande ?</h3>
                                    <p className="text-txt">
                                        Dès que votre commande est expédiée, vous recevrez un message WhatsApp avec un numéro de suivi et les coordonnées du livreur. Vous pouvez à tout moment nous contacter pour obtenir des informations sur l'état de votre commande.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Que faire si ma commande n'arrive pas dans les délais prévus ?</h3>
                                    <p className="text-txt">
                                        Si votre commande n'est pas livrée dans les délais indiqués, veuillez nous contacter par WhatsApp. Nous suivrons immédiatement votre colis et vous tiendrons informée de sa localisation.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Le packaging est-il discret ?</h3>
                                    <p className="text-txt">
                                        Oui, toutes nos commandes sont livrées dans un emballage neutre et discret, sans indication visible du contenu. Votre vie privée est notre priorité.
                                    </p>
                                </motion.div>
                            </motion.div>
                            
                            {/* Tableau des frais de livraison */}
                            <motion.div 
                                className="mt-12"
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <motion.h3 
                                    className="text-xl font-bold text-primary text-center mb-6"
                                    variants={fadeInUp}
                                >
                                    Frais de livraison par région
                                </motion.h3>
                                <motion.div 
                                    className="overflow-x-auto"
                                    variants={fadeInUp}
                                    transition={{ delay: 0.3 }}
                                >
                                    <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-md">
                                        <thead>
                                            <tr className="bg-primary text-white">
                                                <th className="p-3 text-left">Région</th>
                                                <th className="p-3 text-left">Délai de livraison</th>
                                                <th className="p-3 text-left">Frais</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-ombre/20">
                                                <td className="p-3">Dakar</td>
                                                <td className="p-3">24-48h</td>
                                                <td className="p-3 font-bold text-primary">Gratuit</td>
                                            </tr>
                                            <tr className="border-b border-ombre/20 bg-card/30">
                                                <td className="p-3">Thiès</td>
                                                <td className="p-3">2-3 jours</td>
                                                <td className="p-3">1000 FCFA</td>
                                            </tr>
                                            <tr className="border-b border-ombre/20">
                                                <td className="p-3">Saint-Louis</td>
                                                <td className="p-3">3-4 jours</td>
                                                <td className="p-3">1500 FCFA</td>
                                            </tr>
                                            <tr className="border-b border-ombre/20 bg-card/30">
                                                <td className="p-3">Diourbel</td>
                                                <td className="p-3">2-3 jours</td>
                                                <td className="p-3">1000 FCFA</td>
                                            </tr>
                                            <tr className="border-b border-ombre/20">
                                                <td className="p-3">Kaolack</td>
                                                <td className="p-3">2-3 jours</td>
                                                <td className="p-3">1500 FCFA</td>
                                            </tr>
                                            <tr className="border-b border-ombre/20 bg-card/30">
                                                <td className="p-3">Ziguinchor</td>
                                                <td className="p-3">3-5 jours</td>
                                                <td className="p-3">2000 FCFA</td>
                                            </tr>
                                            <tr className="border-b border-ombre/20">
                                                <td className="p-3">Kolda</td>
                                                <td className="p-3">3-5 jours</td>
                                                <td className="p-3">2000 FCFA</td>
                                            </tr>
                                            <tr className="border-b border-ombre/20 bg-card/30">
                                                <td className="p-3">Tambacounda</td>
                                                <td className="p-3">3-5 jours</td>
                                                <td className="p-3">2500 FCFA</td>
                                            </tr>
                                            <tr className="border-b border-ombre/20">
                                                <td className="p-3">Kédougou</td>
                                                <td className="p-3">4-5 jours</td>
                                                <td className="p-3">3000 FCFA</td>
                                            </tr>
                                            <tr className="border-b border-ombre/20 bg-card/30">
                                                <td className="p-3">Matam</td>
                                                <td className="p-3">3-5 jours</td>
                                                <td className="p-3">2500 FCFA</td>
                                            </tr>
                                            <tr className="border-b border-ombre/20">
                                                <td className="p-3">Louga</td>
                                                <td className="p-3">2-3 jours</td>
                                                <td className="p-3">1500 FCFA</td>
                                            </tr>
                                            <tr className="border-b border-ombre/20 bg-card/30">
                                                <td className="p-3">Fatick</td>
                                                <td className="p-3">2-3 jours</td>
                                                <td className="p-3">1500 FCFA</td>
                                            </tr>
                                            <tr className="border-b border-ombre/20">
                                                <td className="p-3">Kaffrine</td>
                                                <td className="p-3">3-4 jours</td>
                                                <td className="p-3">2000 FCFA</td>
                                            </tr>
                                            <tr>
                                                <td className="p-3">Sédhiou</td>
                                                <td className="p-3">3-5 jours</td>
                                                <td className="p-3">2000 FCFA</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </motion.div>
                            </motion.div>
                            
                            {/* Options de livraison express */}
                            <motion.div 
                                className="mt-12"
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <motion.h3 
                                    className="text-xl font-bold text-primary text-center mb-6"
                                    variants={fadeInUp}
                                >
                                    Options de livraison express
                                </motion.h3>
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <p className="text-txt mb-4">
                                        Pour les clientes qui ont besoin de recevoir leurs patchs rapidement, nous proposons également des options de livraison express :
                                    </p>
                                    <motion.ul 
                                        className="list-disc pl-5 space-y-3 text-txt"
                                        variants={staggerContainer}
                                    >
                                        <motion.li variants={listItemVariant}>
                                            <span className="font-bold">Livraison express Dakar</span> : Réception dans les 3 heures (supplément de 2000 FCFA)
                                        </motion.li>
                                        <motion.li variants={listItemVariant}>
                                            <span className="font-bold">Livraison express régions</span> : Réception le jour suivant avant midi (supplément de 3000 FCFA, disponible uniquement dans certaines villes)
                                        </motion.li>
                                    </motion.ul>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                    
                    {/* Onglet Retours et remboursements */}
                    {activeTab === "retours" && (
                        <motion.div 
                            className="bg-card p-6 mb-8"
                            key="retours"
                            variants={tabContentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.h2 
                                className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                                variants={fadeInUp}
                            >
                                Retours et remboursements
                            </motion.h2>
                            
                            <motion.div 
                                className="space-y-8 max-w-4xl mx-auto"
                                variants={staggerContainer}
                                initial="hidden"
                                animate="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Quelle est votre politique de remboursement ?</h3>
                                    <p className="text-txt">
                                        Nous offrons une garantie "Satisfaite ou remboursée" de 30 jours. Si vous n'êtes pas satisfaite de nos produits, vous pouvez demander un remboursement intégral dans les 30 jours suivant votre achat.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Comment puis-je retourner un produit ?</h3>
                                    <p className="text-txt">
                                        Pour retourner un produit, contactez-nous par WhatsApp. Nous vous fournirons les instructions pour le retour et organiserons la collecte du produit à votre adresse.
                                    </p>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Dans quels cas puis-je demander un remboursement ?</h3>
                                    <p className="text-txt mb-2">
                                        Vous pouvez demander un remboursement si :
                                    </p>
                                    <motion.ul 
                                        className="list-disc pl-5 space-y-1 text-txt"
                                        variants={staggerContainer}
                                    >
                                        <motion.li variants={listItemVariant}>Le produit ne vous apporte pas le soulagement attendu</motion.li>
                                        <motion.li variants={listItemVariant}>Vous avez reçu un produit endommagé ou défectueux</motion.li>
                                        <motion.li variants={listItemVariant}>Le produit reçu ne correspond pas à ce que vous avez commandé</motion.li>
                                    </motion.ul>
                                </motion.div>
                                
                                <motion.div 
                                    className="bg-white rounded-lg p-6 shadow-md"
                                    variants={cardVariant}
                                    whileHover={hoverScaleShadow}
                                >
                                    <h3 className="text-xl font-bold text-primary mb-3">Combien de temps faut-il pour être remboursée ?</h3>
                                    <p className="text-txt">
                                        Une fois votre retour reçu et vérifié, le remboursement est traité sous 3 à 5 jours ouvrables. Le délai d'apparition sur votre compte dépend de votre mode de paiement initial.
                                    </p>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
            
            {/* Contact et assistance */}
            <motion.section 
                className="bg-primary/5 py-12 md:py-16 w-full"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4 text-center">
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-primary mb-4"
                        variants={fadeInUp}
                    >
                        Besoin d'aide supplémentaire ?
                    </motion.h2>
                    <motion.p 
                        className="text-txt mb-6 max-w-2xl mx-auto"
                        variants={fadeInUp}
                        transition={{ delay: 0.1 }}
                    >
                        Vous ne trouvez pas la réponse à votre question ? Notre équipe de service client est disponible pour vous aider.
                    </motion.p>
                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto mb-8"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        whileHover={hoverScaleShadow}
                    >
                        <motion.div 
                            className="space-y-4"
                            variants={staggerContainer}
                        >
                            <motion.p 
                                className="text-txt"
                                variants={fadeInLeft}
                            >
                                <span className="font-bold">WhatsApp :</span> +221 77 000 00 00
                            </motion.p>
                            <motion.p 
                                className="text-txt"
                                variants={fadeInRight}
                            >
                                <span className="font-bold">Email :</span> contact@lunasoulage.com
                            </motion.p>
                            <motion.p 
                                className="text-txt"
                                variants={fadeInLeft}
                            >
                                <span className="font-bold">Horaires du service client :</span> Du lundi au samedi, de 9h à 19h
                            </motion.p>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        transition={{ delay: 0.3 }}
                    >
                        <BtnCustom
                            to="https://wa.me/221770000000?text=Bonjour,%20j'ai%20une%20question%20concernant%20les%20patchs%20Luna%20Soulage"
                            className="mx-auto flex items-center gap-2 justify-center"
                        >
                            <PiWhatsappLogoFill size={20} />
                            Nous contacter via WhatsApp
                        </BtnCustom>
                    </motion.div>
                </div>
            </motion.section>
            
            {/* Badges de réassurance */}
            <motion.section 
                className="container mx-auto px-4 py-8 border-t border-ombre/10 mt-8"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
            >
                <motion.div 
                    className="flex flex-wrap justify-center gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ 
                        delayChildren: 0.3, 
                        staggerChildren: 0.1 
                    }}
                >
                    <motion.div 
                        className="bg-primary/10 text-primary text-sm font-bold py-2 px-4 rounded-full"
                        variants={badgeVariant}
                        whileHover={hoverScale}
                    >
                        Satisfaite ou remboursée
                    </motion.div>
                    <motion.div 
                        className="bg-primary/10 text-primary text-sm font-bold py-2 px-4 rounded-full"
                        variants={badgeVariant}
                        whileHover={hoverScale}
                    >
                        Livraison rapide
                    </motion.div>
                    <motion.div 
                        className="bg-primary/10 text-primary text-sm font-bold py-2 px-4 rounded-full"
                        variants={badgeVariant}
                        whileHover={hoverScale}
                    >
                        Paiement sécurisé
                    </motion.div>
                    <motion.div 
                        className="bg-primary/10 text-primary text-sm font-bold py-2 px-4 rounded-full"
                        variants={badgeVariant}
                        whileHover={hoverScale}
                    >
                        Service client réactif
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default FaqPage;