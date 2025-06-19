import BannerPrivacy from "../assets/images/banner_privacy.jpg"; // À ajouter dans vos assets
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

const PrivacyPage = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            {/* Bannière principale */}
            <motion.div
                className="lg-fully-style fully-style bg-cover bg-center bg-no-repeat md:h-[400px] sm:h-[350px] h-[300px] shadow-lg"
                style={{ backgroundImage: `url(${BannerPrivacy})` }}
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
                        Politique de Confidentialité
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-center">
                        Comment nous protégeons vos données personnelles
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
                        Chez Luna Soulage, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web et nos services.
                    </motion.p>
                    <motion.p 
                        className="text-txt mb-4"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        En utilisant notre site web et nos services, vous acceptez les pratiques décrites dans cette politique de confidentialité. Nous vous encourageons à la lire attentivement pour comprendre comment nous traitons vos données.
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
                    {/* Section 1 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">1. Informations que nous collectons</h2>
                        
                        <motion.div 
                            className="space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={fadeInLeft}>
                                <h3 className="font-bold text-txt mb-2">1.1 Informations que vous nous fournissez</h3>
                                <p className="text-txt">
                                    Nous collectons les informations que vous nous fournissez directement lorsque vous :
                                </p>
                                <motion.ul 
                                    className="list-disc pl-6 mt-2 space-y-1 text-txt"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <motion.li variants={listItemVariant}>Passez une commande (nom, prénom, adresse de livraison, numéro de téléphone, etc.)</motion.li>
                                    <motion.li variants={listItemVariant}>Nous contactez via le formulaire de contact ou WhatsApp</motion.li>
                                    <motion.li variants={listItemVariant}>Partagez un témoignage ou une expérience</motion.li>
                                    <motion.li variants={listItemVariant}>Vous inscrivez à notre newsletter</motion.li>
                                </motion.ul>
                            </motion.div>
                            <motion.div variants={fadeInRight}>
                                <h3 className="font-bold text-txt mb-2">1.2 Informations collectées automatiquement</h3>
                                <p className="text-txt">
                                    Lorsque vous visitez notre site, nous collectons automatiquement certaines informations techniques, notamment :
                                </p>
                                <motion.ul 
                                    className="list-disc pl-6 mt-2 space-y-1 text-txt"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <motion.li variants={listItemVariant}>Votre adresse IP</motion.li>
                                    <motion.li variants={listItemVariant}>Informations sur votre navigateur et appareil</motion.li>
                                    <motion.li variants={listItemVariant}>Pages visitées et temps passé sur le site</motion.li>
                                    <motion.li variants={listItemVariant}>Cookies et technologies similaires</motion.li>
                                </motion.ul>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Section 2 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">2. Comment nous utilisons vos informations</h2>
                        <p className="text-txt mb-4">
                            Nous utilisons vos informations personnelles pour les fins suivantes :
                        </p>
                        <motion.ul 
                            className="list-disc pl-6 space-y-2 text-txt"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.li variants={listItemVariant}>Traiter et livrer vos commandes</motion.li>
                            <motion.li variants={listItemVariant}>Communiquer avec vous concernant votre commande ou votre demande</motion.li>
                            <motion.li variants={listItemVariant}>Vous fournir un service client et un support technique</motion.li>
                            <motion.li variants={listItemVariant}>Vous informer sur nos produits, promotions ou événements (avec votre consentement)</motion.li>
                            <motion.li variants={listItemVariant}>Améliorer notre site web et nos produits</motion.li>
                            <motion.li variants={listItemVariant}>Respecter nos obligations légales</motion.li>
                            <motion.li variants={listItemVariant}>Prévenir la fraude et protéger la sécurité de notre site</motion.li>
                        </motion.ul>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">3. Partage et divulgation de vos informations</h2>
                        <p className="text-txt mb-4">
                            Nous ne vendons pas vos données personnelles à des tiers. Nous partageons vos informations uniquement dans les cas suivants :
                        </p>
                        <motion.div 
                            className="space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={fadeInLeft}>
                                <h3 className="font-bold text-txt mb-2">3.1 Prestataires de services</h3>
                                <p className="text-txt">
                                    Nous collaborons avec des prestataires de services qui nous aident à exploiter notre entreprise (services de livraison, prestataires de paiement, hébergement web, etc.). Ces prestataires ont accès à vos informations uniquement pour effectuer des tâches en notre nom et sont tenus de ne pas les divulguer ou les utiliser à d'autres fins.
                                </p>
                            </motion.div>
                            <motion.div variants={fadeInRight}>
                                <h3 className="font-bold text-txt mb-2">3.2 Exigences légales</h3>
                                <p className="text-txt">
                                    Nous pouvons divulguer vos informations si la loi nous y oblige ou si nous croyons de bonne foi que cette divulgation est nécessaire pour :
                                </p>
                                <motion.ul 
                                    className="list-disc pl-6 mt-2 space-y-1 text-txt"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <motion.li variants={listItemVariant}>Répondre à une obligation légale</motion.li>
                                    <motion.li variants={listItemVariant}>Protéger nos droits ou notre propriété</motion.li>
                                    <motion.li variants={listItemVariant}>Prévenir ou enquêter sur d'éventuels abus en relation avec notre service</motion.li>
                                    <motion.li variants={listItemVariant}>Protéger la sécurité personnelle des utilisateurs de notre service ou du public</motion.li>
                                </motion.ul>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Section 4 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">4. Conservation des données</h2>
                        <motion.p 
                            className="text-txt mb-4"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Nous conservons vos données personnelles aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cette politique de confidentialité, à moins qu'une période de conservation plus longue ne soit requise ou permise par la loi.
                        </motion.p>
                        <motion.p 
                            className="text-txt"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Pour les données liées aux commandes, nous les conservons pendant une durée de 3 ans après votre dernière commande pour des raisons comptables et de service client. Les données de contact utilisées à des fins marketing sont conservées jusqu'à ce que vous vous désinscriviez de nos communications.
                        </motion.p>
                    </motion.div>

                    {/* Section 5 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">5. Cookies et technologies similaires</h2>
                        <motion.p 
                            className="text-txt mb-4"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Notre site utilise des cookies et des technologies similaires pour améliorer votre expérience. Les cookies sont de petits fichiers texte stockés sur votre navigateur qui nous permettent de :
                        </motion.p>
                        <motion.ul 
                            className="list-disc pl-6 space-y-2 text-txt mb-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.li variants={listItemVariant}>Mémoriser vos préférences</motion.li>
                            <motion.li variants={listItemVariant}>Comprendre comment vous utilisez notre site</motion.li>
                            <motion.li variants={listItemVariant}>Personnaliser votre expérience</motion.li>
                            <motion.li variants={listItemVariant}>Mesurer l'efficacité de nos communications</motion.li>
                        </motion.ul>
                        <motion.p 
                            className="text-txt"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Vous pouvez configurer votre navigateur pour refuser tous les cookies ou pour vous avertir lorsqu'un cookie est envoyé. Cependant, certaines fonctionnalités du site pourraient ne pas fonctionner correctement sans cookies.
                        </motion.p>
                    </motion.div>

                    {/* Section 6 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">6. Sécurité des données</h2>
                        <motion.p 
                            className="text-txt mb-4"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Nous prenons la sécurité de vos données personnelles très au sérieux et mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations contre l'accès non autorisé, la modification, la divulgation ou la destruction.
                        </motion.p>
                        <motion.p 
                            className="text-txt"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Cependant, aucune méthode de transmission sur Internet ou méthode de stockage électronique n'est 100% sécurisée. Bien que nous nous efforcions d'utiliser des moyens commercialement acceptables pour protéger vos données personnelles, nous ne pouvons garantir leur sécurité absolue.
                        </motion.p>
                    </motion.div>

                    {/* Section 7 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">7. Vos droits concernant vos données</h2>
                        <motion.p 
                            className="text-txt mb-4"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Conformément aux lois sur la protection des données, vous disposez des droits suivants concernant vos données personnelles :
                        </motion.p>
                        <motion.ul 
                            className="list-disc pl-6 space-y-2 text-txt"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.li variants={listItemVariant}><span className="font-semibold">Droit d'accès</span> : vous pouvez demander une copie des données personnelles que nous détenons à votre sujet.</motion.li>
                            <motion.li variants={listItemVariant}><span className="font-semibold">Droit de rectification</span> : vous pouvez nous demander de corriger ou mettre à jour vos données personnelles si elles sont inexactes ou incomplètes.</motion.li>
                            <motion.li variants={listItemVariant}><span className="font-semibold">Droit à l'effacement</span> : vous pouvez nous demander de supprimer vos données personnelles dans certaines circonstances.</motion.li>
                            <motion.li variants={listItemVariant}><span className="font-semibold">Droit à la limitation du traitement</span> : vous pouvez nous demander de limiter temporairement le traitement de vos données.</motion.li>
                            <motion.li variants={listItemVariant}><span className="font-semibold">Droit à la portabilité des données</span> : vous pouvez recevoir une copie de vos données dans un format structuré et couramment utilisé.</motion.li>
                            <motion.li variants={listItemVariant}><span className="font-semibold">Droit d'opposition</span> : vous pouvez vous opposer au traitement de vos données à des fins de marketing direct ou pour des raisons liées à votre situation particulière.</motion.li>
                        </motion.ul>
                    </motion.div>

                    {/* Section 8 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">8. Comment exercer vos droits</h2>
                        <motion.p 
                            className="text-txt mb-4"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Pour exercer l'un des droits mentionnés ci-dessus, veuillez nous contacter par :
                        </motion.p>
                        <motion.ul 
                            className="list-disc pl-6 space-y-2 text-txt mb-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.li variants={listItemVariant}>Email : <a href="mailto:contact@lunasoulage.com" className="text-primary hover:underline">contact@lunasoulage.com</a></motion.li>
                            <motion.li variants={listItemVariant}>WhatsApp : +221 77 000 00 00</motion.li>
                            <motion.li variants={listItemVariant}>Via le formulaire de contact sur notre site</motion.li>
                        </motion.ul>
                        <motion.p 
                            className="text-txt"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Nous répondrons à votre demande dans un délai d'un mois. Ce délai peut être prolongé de deux mois supplémentaires si nécessaire, compte tenu de la complexité et du nombre de demandes.
                        </motion.p>
                    </motion.div>

                    {/* Section 9 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">9. Modifications de notre politique de confidentialité</h2>
                        <motion.p 
                            className="text-txt mb-4"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page et, si les changements sont significatifs, nous vous en informerons par email ou par une notification visible sur notre site.
                        </motion.p>
                        <motion.p 
                            className="text-txt"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Nous vous encourageons à consulter régulièrement cette politique pour rester informé de la façon dont nous protégeons vos informations.
                        </motion.p>
                    </motion.div>

                    {/* Section 10 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">10. Contact</h2>
                        <motion.p 
                            className="text-txt mb-4"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques en matière de protection des données, veuillez nous contacter à :
                        </motion.p>
                        <motion.div 
                            className="bg-primary/5 p-4 rounded-lg"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ backgroundColor: "rgba(167, 68, 136, 0.1)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <p className="text-txt">
                                <span className="font-bold">Luna Soulage</span><br />
                                Email : contact@lunasoulage.com<br />
                                Téléphone : +221 77 000 00 00<br />
                                WhatsApp : +221 77 000 00 00
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Section finale - Acceptation */}
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
                            En résumé
                        </motion.h2>
                        <motion.p 
                            className="text-txt mb-4"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Nous prenons la protection de vos données personnelles très au sérieux et nous nous engageons à être transparents sur la manière dont nous collectons et utilisons vos informations.
                        </motion.p>
                        <motion.p 
                            className="text-txt"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            En utilisant notre site web et nos services, vous consentez à notre politique de confidentialité. Si vous n'acceptez pas cette politique, veuillez ne pas utiliser notre site ou nos services.
                        </motion.p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPage;