import BannerProcedure from "../assets/images/banner_procedure.jpg"; 
import PatchUnwrap from "../assets/images/patch_image.jpg"; 
import PatchApply from "../assets/images/patch_applied.jpg"; 
import PatchRemove from "../assets/images/patch_remove.jpg"; 
import PatchZones from "../assets/images/patch_zones.jpg"; 
import { BtnCustom } from "../components/Btn";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { LuClock8 } from "react-icons/lu";
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
    fadeInRight,
    fadeInLeft, 
    staggerContainer, 
    cardVariant, 
    hoverScale,
    listItemVariant
} from '../constants/animationVariants';

const ProcedurePage = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            {/* Bannière principale */}
            <motion.div
                className="lg-fully-style fully-style bg-cover bg-center bg-no-repeat md:h-[570px] sm:h-[450px] h-[400px] shadow-lg"
                style={{ backgroundImage: `url(${BannerProcedure})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.div 
                    className="flex flex-col items-center justify-center gap-3 md:gap-5 h-full bg-black/50 text-white p-4 md:p-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeOut" 
                    }}
                >
                    <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-center">
                        Comment utiliser les patchs Luna Soulage
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-center">
                        Des instructions simples pour un soulagement optimal
                    </p>
                </motion.div>
            </motion.div>

            {/* Section 1: Introduction */}
            <motion.section 
                className="container mx-auto px-4 py-12 md:py-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-txt text-center max-w-3xl mx-auto text-lg">
                    Les patchs Luna Soulage sont conçus pour être faciles à utiliser. En suivant ces instructions simples, vous obtiendrez un soulagement maximal de vos douleurs menstruelles en quelques minutes seulement.
                </p>
            </motion.section>

            {/* Section 2: Préparation */}
            <section className="bg-primary/5 py-12 md:py-16 w-full">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Préparation
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <motion.div 
                            className="space-y-6"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            <motion.div 
                                className="bg-white rounded-lg p-6 shadow-md"
                                variants={cardVariant}
                                whileHover={hoverScale}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <motion.div 
                                        className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold"
                                        whileHover={{ rotate: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >1</motion.div>
                                    <h3 className="text-xl font-bold text-primary">Nettoyez la zone</h3>
                                </div>
                                <p className="text-txt">
                                    Avant d'appliquer le patch, assurez-vous que la peau est propre et sèche. Utilisez de l'eau et du savon doux si nécessaire.
                                </p>
                            </motion.div>

                            <motion.div 
                                className="bg-white rounded-lg p-6 shadow-md"
                                variants={cardVariant}
                                whileHover={hoverScale}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <motion.div 
                                        className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold"
                                        whileHover={{ rotate: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >2</motion.div>
                                    <h3 className="text-xl font-bold text-primary">Choisissez l'emplacement</h3>
                                </div>
                                <p className="text-txt">
                                    Les patchs sont plus efficaces lorsqu'ils sont appliqués directement sur la zone douloureuse : généralement le bas-ventre ou le bas du dos.
                                </p>
                            </motion.div>

                            <motion.div 
                                className="bg-white rounded-lg p-6 shadow-md"
                                variants={cardVariant}
                                whileHover={hoverScale}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <motion.div 
                                        className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold"
                                        whileHover={{ rotate: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >3</motion.div>
                                    <h3 className="text-xl font-bold text-primary">Vérifiez la date d'expiration</h3>
                                </div>
                                <p className="text-txt">
                                    Pour garantir l'efficacité maximale, utilisez toujours des patchs avant leur date d'expiration.
                                </p>
                            </motion.div>
                        </motion.div>

                        <motion.div 
                            className="rounded-lg overflow-hidden shadow-md"
                            variants={fadeInRight}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <img
                                src={PatchZones}
                                alt="Zones d'application recommandées"
                                className="w-full h-auto object-cover"
                            />
                            <div className="bg-white p-4">
                                <p className="text-txtLight font-medium text-center">Zones d'application recommandées: bas-ventre et bas du dos</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Application étape par étape */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <motion.h2 
                    className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Application en 3 étapes simples
                </motion.h2>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div 
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                        variants={cardVariant}
                        whileHover={hoverScale}
                    >
                        <img
                            src={PatchUnwrap}
                            alt="Préparation du patch"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-3">Étape 1 : Préparation du patch</h3>
                            <p className="text-txt">
                                Sortez le patch de son emballage individuel. Évitez de toucher la surface adhésive avec vos doigts pour préserver l'efficacité des ingrédients actifs.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                        variants={cardVariant}
                        whileHover={hoverScale}
                    >
                        <img
                            src={PatchUnwrap}
                            alt="Retrait du film protecteur"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-3">Étape 2 : Retrait du film protecteur</h3>
                            <p className="text-txt">
                                Décollez délicatement le film protecteur qui recouvre la face adhésive du patch. Tenez le patch par les bords pour éviter de toucher la partie adhésive.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                        variants={cardVariant}
                        whileHover={hoverScale}
                    >
                        <img
                            src={PatchApply}
                            alt="Application sur la peau"
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-primary mb-3">Étape 3 : Application sur la peau</h3>
                            <p className="text-txt">
                                Appliquez le patch directement sur la zone douloureuse (bas-ventre ou bas du dos). Appuyez légèrement pendant quelques secondes pour vous assurer qu'il adhère bien à la peau.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Section 4: Durée d'utilisation */}
            <section className="bg-primary/5 py-12 md:py-16 w-full">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Pendant combien de temps porter le patch ?
                    </motion.h2>

                    <motion.div 
                        className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div 
                            className="flex-1 bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
                            variants={cardVariant}
                            whileHover={hoverScale}
                        >
                            <motion.div 
                                className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-4"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 1 }}
                            >
                                <LuClock8 className="text-primary text-3xl" />
                            </motion.div>
                            <p className="text-txt">
                                Le patch commence à agir après environ <span className="font-bold">15 minutes</span>
                            </p>
                        </motion.div>

                        <motion.div 
                            className="flex-1 bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
                            variants={cardVariant}
                            whileHover={hoverScale}
                        >
                            <motion.div 
                                className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-4"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 1 }}
                            >
                                <LuClock8 className="text-primary text-3xl" />
                            </motion.div>
                            <p className="text-txt">
                                L'effet dure jusqu'à <span className="font-bold">8 heures</span>
                            </p>
                        </motion.div>

                        <motion.div 
                            className="flex-1 bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
                            variants={cardVariant}
                            whileHover={hoverScale}
                        >
                            <motion.div 
                                className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full mb-4"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <IoMdCheckmarkCircle className="text-primary text-3xl" />
                            </motion.div>
                            <p className="text-txt">
                                Vous pouvez appliquer un nouveau patch si nécessaire après ce délai
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        className="bg-primary/10 border-l-4 border-primary rounded-lg p-6 mt-8 max-w-4xl mx-auto flex items-start gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            delay: 0.4,
                            duration: 0.5 
                        }}
                        whileHover={{ 
                            boxShadow: "0 6px 15px rgba(167, 68, 136, 0.15)",
                            y: -3
                        }}
                    >
                        <motion.div
                            initial={{ rotate: 0 }}
                            whileInView={{ rotate: [0, -10, 10, -10, 0] }}
                            viewport={{ once: true }}
                            transition={{ 
                                delay: 0.8,
                                duration: 0.5 
                            }}
                        >
                            <BsExclamationTriangleFill className="text-primary text-2xl flex-shrink-0 mt-1" />
                        </motion.div>
                        <div>
                            <p className="text-txt font-bold mb-1">Important :</p>
                            <p className="text-txt">
                                Si vous ressentez des démangeaisons, rougeurs ou inconfort, retirez immédiatement le patch et rincez la zone à l'eau claire.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 5: Retrait du patch */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <motion.h2 
                    className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Comment retirer le patch
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <motion.div 
                        className="md:w-1/2"
                        variants={fadeInLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={PatchRemove}
                            alt="Retrait correct du patch"
                            className="rounded-lg shadow-md w-full h-auto"
                        />
                    </motion.div>
                    <motion.div 
                        className="md:w-1/2"
                        variants={fadeInRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <p className="text-txt mb-6 text-lg">
                            Pour retirer le patch, décollez-le doucement en commençant par un coin. Tirez parallèlement à la peau plutôt que perpendiculairement pour minimiser l'inconfort.
                        </p>
                        <p className="text-txt text-lg">
                            Si nécessaire, vous pouvez humidifier légèrement le patch avec de l'eau pour faciliter son retrait.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 6: Conseils pour maximiser les effets */}
            <section className="bg-primary/5 py-12 md:py-16 w-full">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Conseils pour un soulagement optimal
                    </motion.h2>

                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div 
                            className="bg-white rounded-lg p-6 shadow-md"
                            variants={cardVariant}
                            whileHover={hoverScale}
                        >
                            <h3 className="text-xl font-bold text-primary mb-3">Appliquez dès les premiers signes</h3>
                            <p className="text-txt">
                                N'attendez pas que la douleur s'intensifie. Appliquez le patch aux premiers signes d'inconfort.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="bg-white rounded-lg p-6 shadow-md"
                            variants={cardVariant}
                            whileHover={hoverScale}
                        >
                            <h3 className="text-xl font-bold text-primary mb-3">Hydratez-vous</h3>
                            <p className="text-txt">
                                Buvez suffisamment d'eau pendant vos règles pour aider à réduire les crampes.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="bg-white rounded-lg p-6 shadow-md"
                            variants={cardVariant}
                            whileHover={hoverScale}
                        >
                            <h3 className="text-xl font-bold text-primary mb-3">Position du patch</h3>
                            <p className="text-txt">
                                Pour les douleurs lombaires, placez le patch au milieu du bas du dos. Pour les crampes abdominales, centrez-le légèrement sous le nombril.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="bg-white rounded-lg p-6 shadow-md"
                            variants={cardVariant}
                            whileHover={hoverScale}
                        >
                            <h3 className="text-xl font-bold text-primary mb-3">Combinaison avec la chaleur</h3>
                            <p className="text-txt">
                                Pour un effet amplificateur, vous pouvez appliquer une source de chaleur douce (bouillotte ou coussin chauffant) par-dessus le patch pendant 10-15 minutes.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="bg-white rounded-lg p-6 shadow-md"
                            variants={cardVariant}
                            whileHover={hoverScale}
                        >
                            <h3 className="text-xl font-bold text-primary mb-3">Activité physique légère</h3>
                            <p className="text-txt">
                                Une marche douce ou des étirements légers peuvent aider à augmenter l'efficacité du patch en favorisant la circulation sanguine.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Section 7: FAQ */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <motion.h2 
                    className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Questions fréquentes sur l'utilisation
                </motion.h2>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScale}
                    >
                        <h3 className="text-xl font-bold text-primary mb-3">Puis-je prendre une douche avec le patch ?</h3>
                        <p className="text-txt">
                            Non, il est recommandé de retirer le patch avant de vous doucher et d'en appliquer un nouveau après avoir séché votre peau.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScale}
                    >
                        <h3 className="text-xl font-bold text-primary mb-3">Puis-je utiliser plusieurs patchs simultanément ?</h3>
                        <p className="text-txt">
                            Oui, vous pouvez appliquer un patch sur le bas-ventre et un autre sur le bas du dos si vous souffrez de douleurs aux deux endroits.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScale}
                    >
                        <h3 className="text-xl font-bold text-primary mb-3">Les patchs sont-ils visibles sous les vêtements ?</h3>
                        <p className="text-txt">
                            Non, les patchs Luna Soulage sont ultra-fins et discrets, ils restent invisibles même sous des vêtements ajustés.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScale}
                    >
                        <h3 className="text-xl font-bold text-primary mb-3">Puis-je faire du sport avec le patch ?</h3>
                        <p className="text-txt">
                            Absolument ! Les patchs sont conçus pour adhérer fermement à la peau et vous permettre de maintenir toutes vos activités, y compris sportives.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Section 8: Précautions */}
            <section className="bg-primary/5 py-12 md:py-16 w-full">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Précautions d'emploi
                    </motion.h2>

                    <motion.ul 
                        className="list-disc pl-6 space-y-3 max-w-3xl mx-auto bg-white rounded-lg p-6 shadow-md"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        whileHover={{ boxShadow: "0 10px 25px rgba(167, 68, 136, 0.1)" }}
                    >
                        <motion.li 
                            className="text-txt"
                            variants={listItemVariant}
                        >
                            Ne pas utiliser sur une peau irritée, blessée ou présentant une éruption cutanée
                        </motion.li>
                        <motion.li 
                            className="text-txt"
                            variants={listItemVariant}
                        >
                            Ne pas appliquer sur le visage ou les muqueuses
                        </motion.li>
                        <motion.li 
                            className="text-txt"
                            variants={listItemVariant}
                        >
                            Ne pas utiliser pendant la grossesse sans avis médical
                        </motion.li>
                        <motion.li 
                            className="text-txt"
                            variants={listItemVariant}
                        >
                            Cesser l'utilisation en cas de réaction allergique
                        </motion.li>
                        <motion.li 
                            className="text-txt"
                            variants={listItemVariant}
                        >
                            Tenir hors de portée des enfants
                        </motion.li>
                        <motion.li 
                            className="text-txt"
                            variants={listItemVariant}
                        >
                            Consultez un médecin si vos douleurs menstruelles sont inhabituellement sévères
                        </motion.li>
                    </motion.ul>
                </div>
            </section>

            {/* Section 9: Conservation */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <motion.h2 
                    className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Conservation des patchs
                </motion.h2>

                <motion.div 
                    className="bg-white rounded-lg p-6 shadow-md max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.6,
                        ease: "easeOut" 
                    }}
                    whileHover={{ 
                        boxShadow: "0 10px 25px rgba(167, 68, 136, 0.1)",
                        y: -5 
                    }}
                >
                    <p className="text-txt text-center text-lg">
                        Pour préserver l'efficacité de vos patchs Luna Soulage, stockez-les dans leur emballage d'origine, dans un endroit sec et frais, à l'abri de la lumière directe du soleil. Ne les conservez pas dans une salle de bain humide.
                    </p>
                </motion.div>
            </section>

            {/* Appel à l'action */}
            <section className="bg-primary/5 py-12 md:py-16 w-full">
                <motion.div 
                    className="container mx-auto px-4 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-primary mb-4"
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            delay: 0.2,
                            duration: 0.5 
                        }}
                    >
                        Vous avez d'autres questions sur l'utilisation des patchs Luna Soulage ?
                    </motion.h2>
                    <motion.p 
                        className="text-txt mb-6 max-w-2xl mx-auto"
                        initial={{ y: 20 }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            delay: 0.4,
                            duration: 0.5 
                        }}
                    >
                        Notre équipe est là pour vous aider et répondre à toutes vos interrogations.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            delay: 0.6,
                            duration: 0.5 
                        }}
                    >
                        <BtnCustom
                            to="/contact"
                            text="Contactez-nous"
                            className="mx-auto"
                        />
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default ProcedurePage;
