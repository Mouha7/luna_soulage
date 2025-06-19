import BannerTerms from "../assets/images/banner_terms.jpg"; // À ajouter dans vos assets
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

const TermsPage = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            {/* Bannière principale */}
            <motion.div
                className="lg-fully-style fully-style bg-cover bg-center bg-no-repeat md:h-[400px] sm:h-[350px] h-[300px] shadow-lg"
                style={{ backgroundImage: `url(${BannerTerms})` }}
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
                        Conditions Générales d'Utilisation
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-center">
                        Merci de lire attentivement les conditions qui régissent l'utilisation de notre site
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
                        className="text-txt mb-6"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Les présentes conditions générales d'utilisation (ci-après les "CGU") régissent votre utilisation du site web www.lunasoulage.com (ci-après le "Site") et votre relation avec Luna Soulage (ci-après "nous", "notre" ou "nos"). Veuillez lire attentivement ces CGU avant d'utiliser le Site.
                    </motion.p>
                    <motion.p 
                        className="text-txt mb-6"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.2 }}
                    >
                        En accédant à ce Site ou en l'utilisant, vous acceptez d'être lié par ces CGU. Si vous n'acceptez pas ces CGU, veuillez ne pas utiliser le Site.
                    </motion.p>
                </motion.div>
            </motion.section>

            {/* Sections détaillées des CGU */}
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
                        <h2 className="text-xl font-bold text-primary mb-4">1. Utilisation du site</h2>
                        <motion.div 
                            className="space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={fadeInLeft}>
                                <h3 className="font-bold text-txt mb-2">1.1 Conditions d'accès</h3>
                                <p className="text-txt">
                                    L'accès au Site est ouvert à toute personne disposant d'un accès à Internet. Nous nous réservons le droit de suspendre ou de limiter l'accès à tout ou partie du Site, sans préavis, notamment pour des raisons de maintenance.
                                </p>
                            </motion.div>
                            <motion.div variants={fadeInRight}>
                                <h3 className="font-bold text-txt mb-2">1.2 Comportement de l'utilisateur</h3>
                                <p className="text-txt">
                                    En utilisant le Site, vous vous engagez à ne pas :
                                </p>
                                <motion.ul 
                                    className="list-disc pl-6 mt-2 space-y-1 text-txt"
                                    variants={staggerContainer}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                >
                                    <motion.li variants={listItemVariant}>Utiliser le Site d'une manière qui pourrait endommager, désactiver, surcharger ou altérer le Site</motion.li>
                                    <motion.li variants={listItemVariant}>Utiliser des robots, des scrapers ou d'autres moyens automatisés pour accéder au Site</motion.li>
                                    <motion.li variants={listItemVariant}>Collecter des informations sur d'autres utilisateurs</motion.li>
                                    <motion.li variants={listItemVariant}>Publier du contenu illégal, trompeur, malveillant ou discriminatoire</motion.li>
                                    <motion.li variants={listItemVariant}>Usurper l'identité d'une personne ou d'une entité, ou déformer votre affiliation avec une personne ou une entité</motion.li>
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
                        <h2 className="text-xl font-bold text-primary mb-4">2. Produits et commandes</h2>
                        <motion.div 
                            className="space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={fadeInLeft}>
                                <h3 className="font-bold text-txt mb-2">2.1 Informations sur les produits</h3>
                                <p className="text-txt">
                                    Les patchs Luna Soulage sont conçus pour soulager les douleurs menstruelles. Bien que nos produits aient été élaborés avec le plus grand soin, nous ne garantissons pas leur efficacité pour toutes les utilisatrices. Les résultats peuvent varier en fonction des individus.
                                </p>
                            </motion.div>
                            <motion.div variants={fadeInRight}>
                                <h3 className="font-bold text-txt mb-2">2.2 Processus de commande</h3>
                                <p className="text-txt">
                                    Les commandes s'effectuent via notre service WhatsApp. En passant une commande, vous confirmez que toutes les informations fournies sont exactes et complètes. Nous nous réservons le droit de refuser toute commande à notre seule discrétion.
                                </p>
                            </motion.div>
                            <motion.div variants={fadeInLeft}>
                                <h3 className="font-bold text-txt mb-2">2.3 Prix et paiement</h3>
                                <p className="text-txt">
                                    Les prix sont indiqués en francs CFA (FCFA) et sont susceptibles de changer sans préavis. Le paiement est accepté via Orange Money, Wave, Free Money ou en espèces à la livraison (uniquement pour Dakar).
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Section 3 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">3. Livraison</h2>
                        <motion.div 
                            className="space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={fadeInLeft}>
                                <h3 className="font-bold text-txt mb-2">3.1 Délais de livraison</h3>
                                <p className="text-txt">
                                    Les délais de livraison sont donnés à titre indicatif. Pour Dakar et sa banlieue, la livraison est généralement effectuée dans les 24 à 48 heures suivant la confirmation de la commande. Pour les autres régions du Sénégal, le délai est de 3 à 5 jours ouvrables.
                                </p>
                            </motion.div>
                            <motion.div variants={fadeInRight}>
                                <h3 className="font-bold text-txt mb-2">3.2 Frais de livraison</h3>
                                <p className="text-txt">
                                    La livraison est gratuite à Dakar. Pour les autres régions, des frais de livraison s'appliquent en fonction de la distance (entre 1000 et 3000 FCFA).
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Section 4 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">4. Retours et remboursements</h2>
                        <motion.div 
                            className="space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.div variants={fadeInLeft}>
                                <h3 className="font-bold text-txt mb-2">4.1 Politique de satisfaction</h3>
                                <p className="text-txt">
                                    Nous offrons une garantie "Satisfaite ou remboursée" de 30 jours. Si vous n'êtes pas satisfaite de nos produits, vous pouvez demander un remboursement intégral dans les 30 jours suivant votre achat.
                                </p>
                            </motion.div>
                            <motion.div variants={fadeInRight}>
                                <h3 className="font-bold text-txt mb-2">4.2 Procédure de retour</h3>
                                <p className="text-txt">
                                    Pour retourner un produit, contactez-nous par WhatsApp au +221 77 000 00 00. Nous vous fournirons les instructions pour le retour et organiserons la collecte du produit à votre adresse.
                                </p>
                            </motion.div>
                            <motion.div variants={fadeInLeft}>
                                <h3 className="font-bold text-txt mb-2">4.3 Conditions de remboursement</h3>
                                <p className="text-txt">
                                    Une fois votre retour reçu et vérifié, le remboursement est traité sous 3 à 5 jours ouvrables. Le délai d'apparition sur votre compte dépend de votre mode de paiement initial.
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Section 5 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">5. Propriété intellectuelle</h2>
                        <motion.p 
                            className="text-txt mb-4"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Le contenu du Site, y compris mais sans s'y limiter, les textes, graphiques, images, logos, icônes de boutons, logiciels et autres contenus, est la propriété exclusive de Luna Soulage ou de ses fournisseurs de contenu et est protégé par les lois sénégalaises et internationales sur le droit d'auteur.
                        </motion.p>
                        <motion.p 
                            className="text-txt"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Toute utilisation non autorisée du contenu du Site peut constituer une violation des lois sur le droit d'auteur, les réglementations sur les marques de commerce et autres lois. Vous ne pouvez pas reproduire, modifier, distribuer ou republier le matériel contenu sur ce Site sans notre consentement écrit préalable.
                        </motion.p>
                    </motion.div>

                    {/* Section 6 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">6. Protection des données personnelles</h2>
                        <motion.p 
                            className="text-txt mb-4"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            La protection de vos données personnelles est importante pour nous. Notre politique de confidentialité décrit comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous utilisez notre Site.
                        </motion.p>
                        <motion.p 
                            className="text-txt"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            En utilisant notre Site, vous consentez à la collecte et à l'utilisation de vos informations conformément à notre politique de confidentialité, que vous pouvez consulter <a href="/politique-confidentialite" className="text-primary hover:underline">ici</a>.
                        </motion.p>
                    </motion.div>

                    {/* Section 7 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">7. Limitation de responsabilité</h2>
                        <motion.div
                            className="space-y-4"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.p 
                                className="text-txt mb-4"
                                variants={fadeInLeft}
                            >
                                Luna Soulage s'efforce de maintenir les informations de ce Site à jour et exactes. Cependant, nous ne garantissons pas l'exactitude, l'exhaustivité ou la fiabilité des informations fournies sur ce Site.
                            </motion.p>
                            <motion.p 
                                className="text-txt mb-4"
                                variants={fadeInRight}
                            >
                                En aucun cas, Luna Soulage ne sera responsable des dommages directs, indirects, spéciaux, punitifs ou consécutifs résultant de l'utilisation ou de l'incapacité d'utiliser ce Site ou les produits achetés via ce Site.
                            </motion.p>
                            <motion.p 
                                className="text-txt"
                                variants={fadeInLeft}
                            >
                                Les patchs Luna Soulage sont destinés à soulager les douleurs menstruelles et ne constituent pas un traitement médical. En cas de douleurs persistantes ou inhabituellement sévères, nous vous recommandons de consulter un professionnel de santé.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    {/* Section 8 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">8. Modifications des CGU</h2>
                        <motion.p 
                            className="text-txt"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Nous nous réservons le droit de modifier ces CGU à tout moment. Les modifications entrent en vigueur dès leur publication sur le Site. Votre utilisation continue du Site après la publication des CGU modifiées signifie que vous acceptez ces modifications. Nous vous encourageons à consulter régulièrement cette page pour vous tenir informé des mises à jour.
                        </motion.p>
                    </motion.div>

                    {/* Section 9 */}
                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h2 className="text-xl font-bold text-primary mb-4">9. Loi applicable et juridiction compétente</h2>
                        <motion.p 
                            className="text-txt"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            Ces CGU sont régies et interprétées conformément aux lois du Sénégal. Tout litige découlant de ou lié à ces CGU sera soumis à la juridiction exclusive des tribunaux compétents de Dakar, Sénégal.
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
                            Si vous avez des questions concernant ces CGU, veuillez nous contacter à l'adresse suivante :
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

            {/* Section finale - Acceptation des CGU */}
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
                            Acceptation des conditions générales
                        </motion.h2>
                        <motion.p 
                            className="text-txt"
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            En utilisant notre site web ou en passant une commande, vous confirmez avoir lu, compris et accepté les présentes conditions générales d'utilisation dans leur intégralité.
                        </motion.p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default TermsPage;