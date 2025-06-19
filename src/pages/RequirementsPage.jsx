import BannerRequirements from "../assets/images/banner_requirements.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
    fadeInUp, 
    fadeInLeft, 
    fadeInRight, 
    staggerContainer, 
    cardVariant, 
    hoverScaleShadow,
    bannerAnimation,
    bannerContentAnimation,
    listItemVariant,
} from "../constants/animationVariants";

const RequirementsPage = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            {/* Bannière principale */}
            <motion.div
                className="lg-fully-style fully-style bg-cover bg-center bg-no-repeat md:h-[400px] sm:h-[350px] h-[300px] shadow-lg"
                style={{ backgroundImage: `url(${BannerRequirements})` }}
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
                        Mentions Légales
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-center">
                        Informations légales concernant Luna Soulage
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
                <motion.div 
                    className="bg-white rounded-lg p-8 shadow-md max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    whileHover={{ boxShadow: "0 10px 25px rgba(167, 68, 136, 0.1)" }}
                >
                    <motion.h2 
                        className="text-2xl font-bold text-primary mb-6"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Dernière mise à jour : 15 juin 2025
                    </motion.h2>
                    <motion.p 
                        className="text-txt mb-4"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, nous portons à la connaissance des utilisateurs et visiteurs du site Luna Soulage les informations suivantes.
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Sections détaillées */}
            <section className="container mx-auto px-4 pb-16">
                <motion.div 
                    className="space-y-8 max-w-4xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {/* Section 1: Informations légales */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">1. Informations légales</h2>
                        
                        <motion.div 
                            className="space-y-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={fadeInLeft}>
                                <h3 className="font-bold text-txt mb-2">1.1 Propriétaire et éditeur du site</h3>
                                <p className="text-txt">
                                    <strong>Raison sociale :</strong> Luna Soulage SARL<br />
                                    <strong>Forme juridique :</strong> Société à Responsabilité Limitée<br />
                                    <strong>Capital social :</strong> 1 000 000 FCFA<br />
                                    <strong>Siège social :</strong> Dakar, Sénégal<br />
                                    <strong>Registre du commerce :</strong> RC-DAK-2023-B-12345<br />
                                    <strong>NINEA :</strong> 123456789<br />
                                    <strong>Téléphone :</strong> +221 77 000 00 00<br />
                                    <strong>Email :</strong> contact@lunasoulage.com
                                </p>
                            </motion.div>
                            
                            <motion.div variants={fadeInRight}>
                                <h3 className="font-bold text-txt mb-2">1.2 Représentant légal</h3>
                                <p className="text-txt">
                                    <strong>Directrice de la publication :</strong> Mme Aïcha Diop, en sa qualité de Gérante
                                </p>
                            </motion.div>
                            
                            <motion.div variants={fadeInLeft}>
                                <h3 className="font-bold text-txt mb-2">1.3 Hébergement</h3>
                                <p className="text-txt">
                                    <strong>Hébergeur du site :</strong> OVH SAS<br />
                                    <strong>Adresse :</strong> 2 rue Kellermann - 59100 Roubaix - France<br />
                                    <strong>Téléphone :</strong> +33 9 72 10 10 10
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Section 2: Activité */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">2. Activité</h2>
                        
                        <motion.div 
                            className="space-y-4"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <p className="text-txt">
                                Luna Soulage est une entreprise spécialisée dans la conception, la fabrication et la commercialisation de patchs naturels destinés à soulager les douleurs menstruelles. Notre activité comprend la vente en ligne via notre site web et notre service WhatsApp, ainsi que la livraison de nos produits sur l'ensemble du territoire sénégalais.
                            </p>
                            <p className="text-txt">
                                <strong>Code NAF/APE :</strong> 4646Z - Commerce de gros (commerce interentreprises) de produits pharmaceutiques
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Section 3: Conditions d'utilisation */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">3. Conditions d'utilisation du site</h2>
                        
                        <motion.div
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <p className="text-txt mb-4">
                                L'utilisation du site Luna Soulage implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ci-dessous. Ces conditions d'utilisation sont susceptibles d'être modifiées ou complétées à tout moment, sans préavis. Les utilisateurs du site sont donc invités à les consulter de manière régulière.
                            </p>
                            <p className="text-txt">
                                Le site est normalement accessible aux utilisateurs 24 heures sur 24, 7 jours sur 7, sauf en cas d'interruption, programmée ou non, pour des besoins de maintenance ou en cas de force majeure. En cas d'impossibilité d'accès au site, Luna Soulage s'engage à faire son possible pour en rétablir l'accès dans les meilleurs délais et s'efforcera d'en communiquer préalablement les dates et heures d'interruption.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Section 4: Propriété intellectuelle */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">4. Propriété intellectuelle</h2>
                        
                        <motion.div
                            variants={fadeInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <p className="text-txt mb-4">
                                Luna Soulage est propriétaire des droits de propriété intellectuelle et détient les droits d'usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels, etc.
                            </p>
                            <p className="text-txt mb-4">
                                Toute reproduction, représentation, modification, publication, adaptation totale ou partielle des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de Luna Soulage.
                            </p>
                            <p className="text-txt">
                                Toute exploitation non autorisée du site ou de son contenu, des informations qui y sont divulguées, engagerait la responsabilité de l'utilisateur et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la Propriété Intellectuelle.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Section 5: Liens hypertextes */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">5. Liens hypertextes</h2>
                        
                        <motion.div 
                            className="space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={fadeInRight}>
                                <h3 className="font-bold text-txt mb-2">5.1 Liens sortants</h3>
                                <p className="text-txt">
                                    Le site peut contenir des liens hypertextes vers d'autres sites Internet ou applications. Luna Soulage ne dispose d'aucun moyen pour contrôler les sites en connexion avec son site internet et ne répond pas de la disponibilité de tels sites et applications, ni ne la garantit. Elle ne peut être tenue responsable de tout contenu, publicité, produits ou services disponibles sur ou à partir de ces sites ou applications.
                                </p>
                            </motion.div>
                            
                            <motion.div variants={fadeInLeft}>
                                <h3 className="font-bold text-txt mb-2">5.2 Liens entrants</h3>
                                <p className="text-txt">
                                    Tout site Internet ou application est autorisé à établir un lien hypertexte vers le site de Luna Soulage, à condition que ce lien s'ouvre dans une nouvelle fenêtre du navigateur. Toutefois, Luna Soulage se réserve le droit de demander la suppression d'un lien qu'elle estime non conforme à sa politique.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Section 6: Protection des données personnelles */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">6. Protection des données personnelles</h2>
                        
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <p className="text-txt mb-4">
                                En vertu de la loi informatique et libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition concernant vos données personnelles. Ces droits peuvent être exercés en contactant Luna Soulage aux coordonnées indiquées dans les présentes mentions légales.
                            </p>
                            <p className="text-txt">
                                Pour plus de détails concernant la collecte et le traitement des données personnelles, veuillez consulter notre <a href="/politique-confidentialite" className="text-primary hover:underline">politique de confidentialité</a>.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Section 7: Cookies */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">7. Utilisation des cookies</h2>
                        
                        <motion.div
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <p className="text-txt mb-4">
                                Le site Luna Soulage peut utiliser des cookies pour améliorer l'expérience de navigation des utilisateurs et fournir des fonctionnalités personnalisées. Un cookie est un petit fichier texte qui est stocké sur votre appareil lorsque vous visitez un site web.
                            </p>
                            <p className="text-txt mb-4">
                                Les cookies utilisés par le site Luna Soulage sont principalement destinés à :
                            </p>
                            <motion.ul 
                                className="list-disc pl-6 space-y-2 text-txt mb-4"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.li variants={listItemVariant}>Mémoriser vos préférences d'affichage</motion.li>
                                <motion.li variants={listItemVariant}>Effectuer des statistiques de visite</motion.li>
                                <motion.li variants={listItemVariant}>Améliorer la pertinence des annonces publicitaires</motion.li>
                            </motion.ul>
                            <p className="text-txt">
                                Vous pouvez configurer votre navigateur pour qu'il vous avertisse lors de l'utilisation de cookies et refuse l'installation de cookies. Toutefois, certaines fonctionnalités du site pourraient ne plus être accessibles.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Section 8: Droit applicable et juridiction */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">8. Droit applicable et juridiction</h2>
                        
                        <motion.p 
                            className="text-txt mb-4"
                            variants={fadeInLeft}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Tout litige relatif à l'utilisation du site Luna Soulage est soumis au droit sénégalais. En dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de juridiction aux tribunaux compétents de Dakar.
                        </motion.p>
                    </motion.div>

                    {/* Section 9: Service clients */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">9. Service clients</h2>
                        
                        <motion.div
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <p className="text-txt mb-4">
                                Pour toute question ou réclamation concernant le site ou nos produits, notre service client est disponible :
                            </p>
                            <motion.div 
                                className="bg-primary/5 p-5 rounded-lg"
                                whileHover={{ backgroundColor: "rgba(167, 68, 136, 0.1)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-txt">
                                    <strong>Par téléphone :</strong> +221 77 000 00 00 (du lundi au samedi, de 9h à 19h)<br />
                                    <strong>Par WhatsApp :</strong> +221 77 000 00 00<br />
                                    <strong>Par email :</strong> contact@lunasoulage.com
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Section 10: Crédits */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">10. Crédits</h2>
                        
                        <motion.div 
                            className="space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={fadeInRight}>
                                <h3 className="font-bold text-txt mb-2">10.1 Conception et développement</h3>
                                <p className="text-txt">
                                    <strong>Conception du site :</strong> SMRS<br />
                                    <strong>Site web :</strong> <a href="https://smrs.sn" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.smrs.sn</a>
                                </p>
                            </motion.div>
                            
                            <motion.div variants={fadeInLeft}>
                                <h3 className="font-bold text-txt mb-2">10.2 Photographies</h3>
                                <p className="text-txt">
                                    Les images utilisées sur ce site sont la propriété de Luna Soulage ou proviennent de banques d'images libres de droits.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Section finale - Message de conclusion */}
            <section className="bg-primary/5 py-12 md:py-16 w-full">
                <div className="container mx-auto px-4 text-center">
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        whileHover={{ boxShadow: "0 10px 25px rgba(167, 68, 136, 0.1)" }}
                    >
                        <motion.h2 
                            className="text-xl font-bold text-primary mb-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Nous contacter
                        </motion.h2>
                        <motion.p 
                            className="text-txt mb-4"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Pour toute question concernant les présentes mentions légales, vous pouvez nous contacter aux coordonnées indiquées ci-dessus.
                        </motion.p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default RequirementsPage;