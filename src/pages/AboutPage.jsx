import BannerAbout from '../assets/images/banner_about.jpg';
import PatchImage from '../assets/images/patch_image.jpg';
import PatchApplied from '../assets/images/patch_applied.jpg';
import { BtnCustom } from '../components/Btn';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
    staggerContainer, 
    cardVariant, 
    hoverScale,
    tableRowVariant
} from '../constants/animationVariants';

const AboutPage = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center">
            {/* Bannière principale */}
            <motion.div
                className="lg-fully-style fully-style bg-cover bg-center bg-no-repeat md:h-[570px] sm:h-[450px] h-[400px] shadow-lg"
                style={{ backgroundImage: `url(${BannerAbout})` }}
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
                        Les patchs Luna Soulage : une révolution contre les douleurs menstruelles
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-center">
                        Découvrez les patchs Luna Soulage, conçus spécifiquement pour les femmes qui souffrent de douleurs menstruelles. Notre solution innovante combine des ingrédients naturels et une technologie avancée pour offrir un soulagement rapide et durable, sans les effets secondaires des médicaments traditionnels.
                    </p>
                </motion.div>
            </motion.div>

            {/* Section: Caractéristiques du produit */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <motion.h2 
                    className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Qu'est-ce qui rend nos patchs uniques ?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
                    <motion.div 
                        className="rounded-lg overflow-hidden shadow-md"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.7,
                            ease: "easeOut" 
                        }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <img
                            src={PatchImage}
                            alt="Patch Luna Soulage"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                    <motion.div 
                        className="space-y-6"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                    >
                        <motion.div 
                            className="bg-card rounded-lg p-6 shadow-md"
                            variants={cardVariant}
                            whileHover={hoverScale}
                        >
                            <h3 className="text-xl font-bold text-primary mb-2">Composition naturelle</h3>
                            <p className="text-txt">
                                Nos patchs sont composés exclusivement d'ingrédients naturels soigneusement sélectionnés pour leurs propriétés apaisantes : extrait de gingembre, huile essentielle de lavande, menthe poivrée et camomille. Cette formule exclusive agit directement sur les zones douloureuses pour un soulagement optimal.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="bg-card rounded-lg p-6 shadow-md"
                            variants={cardVariant}
                            whileHover={hoverScale}
                        >
                            <h3 className="text-xl font-bold text-primary mb-2">Design discret et confortable</h3>
                            <p className="text-txt">
                                Fins, souples et adhésifs, les patchs Luna Soulage s'adaptent parfaitement à votre corps. Leur design ergonomique les rend totalement invisibles sous vos vêtements, vous permettant de les porter en toute discrétion, au travail comme pendant vos activités sportives.
                            </p>
                        </motion.div>

                        <motion.div 
                            className="bg-card rounded-lg p-6 shadow-md"
                            variants={cardVariant}
                            whileHover={hoverScale}
                        >
                            <h3 className="text-xl font-bold text-primary mb-2">Action rapide et prolongée</h3>
                            <p className="text-txt">
                                Ressentez un soulagement en seulement 15 minutes après l'application. L'effet apaisant se maintient jusqu'à 8 heures, vous offrant une journée entière de confort. Fini les prises répétées de médicaments toutes les 4 heures !
                            </p>
                        </motion.div>

                        <motion.div 
                            className="bg-card rounded-lg p-6 shadow-md"
                            variants={cardVariant}
                            whileHover={hoverScale}
                        >
                            <h3 className="text-xl font-bold text-primary mb-2">Hypoallergénique et testé dermatologiquement</h3>
                            <p className="text-txt">
                                Chaque lot de patchs Luna Soulage est testé dermatologiquement pour garantir une tolérance optimale, même pour les peaux sensibles. Sans parabènes, sans parfums artificiels et sans hormones, nos patchs respectent votre corps et votre santé.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Section: Avantages comparatifs */}
            <section className="bg-primary/5 py-12 md:py-16 w-full">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Pourquoi choisir Luna Soulage plutôt que d'autres solutions ?
                    </motion.h2>

                    {/* Tableau comparatif */}
                    <motion.div 
                        className="overflow-x-auto mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <table className="w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className="p-3 text-left">Critère</th>
                                    <th className="p-3 text-left">Patchs Luna Soulage</th>
                                    <th className="p-3 text-left">Médicaments anti-douleur</th>
                                    <th className="p-3 text-left">Autres solutions naturelles</th>
                                </tr>
                            </thead>
                            <motion.tbody
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.1 }}
                            >
                                <motion.tr className="border-b border-bordure/20" variants={tableRowVariant}>
                                    <td className="p-3 font-semibold bg-card">Efficacité</td>
                                    <td className="p-3">Soulagement en 15 min</td>
                                    <td className="p-3">Variable selon les personnes</td>
                                    <td className="p-3">Souvent lente et limitée</td>
                                </motion.tr>
                                <motion.tr className="border-b border-bordure/20" variants={tableRowVariant}>
                                    <td className="p-3 font-semibold bg-card">Durée d'action</td>
                                    <td className="p-3">Jusqu'à 8h</td>
                                    <td className="p-3">4-6h maximum</td>
                                    <td className="p-3">Souvent de courte durée</td>
                                </motion.tr>
                                <motion.tr className="border-b border-bordure/20" variants={tableRowVariant}>
                                    <td className="p-3 font-semibold bg-card">Effets secondaires</td>
                                    <td className="p-3">Aucun</td>
                                    <td className="p-3">Troubles digestifs, somnolence</td>
                                    <td className="p-3">Généralement minimes</td>
                                </motion.tr>
                                <motion.tr className="border-b border-bordure/20" variants={tableRowVariant}>
                                    <td className="p-3 font-semibold bg-card">Discrétion</td>
                                    <td className="p-3">Totale, invisible sous les vêtements</td>
                                    <td className="p-3">Nécessite de transporter des médicaments</td>
                                    <td className="p-3">Variable (tisanes, bouillotte...)</td>
                                </motion.tr>
                                <motion.tr className="border-b border-bordure/20" variants={tableRowVariant}>
                                    <td className="p-3 font-semibold bg-card">Praticité</td>
                                    <td className="p-3">Application unique</td>
                                    <td className="p-3">Prises régulières nécessaires</td>
                                    <td className="p-3">Souvent contraignant</td>
                                </motion.tr>
                                <motion.tr variants={tableRowVariant}>
                                    <td className="p-3 font-semibold bg-card">Composition</td>
                                    <td className="p-3">100% naturelle</td>
                                    <td className="p-3">Substances chimiques</td>
                                    <td className="p-3">Variable</td>
                                </motion.tr>
                            </motion.tbody>
                        </table>
                    </motion.div>

                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            delay: 0.2,
                            duration: 0.5,
                            ease: "easeOut" 
                        }}
                    >
                        <p className="text-txt mb-6">
                            Contrairement aux médicaments anti-inflammatoires qui peuvent provoquer des troubles digestifs à long terme, nos patchs n'entraînent aucun effet secondaire. Plus pratiques que les bouillottes qui vous limitent dans vos mouvements, et plus efficaces que les tisanes aux effets souvent légers, les patchs Luna Soulage vous offrent une liberté totale pendant vos règles.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section: Témoignage expert */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <motion.div 
                    className="bg-card rounded-lg p-6 md:p-8 shadow-md border-l-4 border-primary"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.7,
                        ease: "easeOut" 
                    }}
                    whileHover={{ 
                        boxShadow: "0 10px 25px rgba(167, 68, 136, 0.15)",
                        y: -5 
                    }}
                >
                    <h2 className="text-2xl font-bold text-primary mb-4">L'avis de notre experte</h2>
                    <motion.blockquote 
                        className="italic text-txt"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                            delay: 0.3,
                            duration: 0.6,
                            ease: "easeOut" 
                        }}
                    >
                        "En tant que gynécologue spécialisée dans les douleurs menstruelles, j'ai pu constater l'efficacité remarquable des patchs Luna Soulage auprès de mes patientes. Leur composition naturelle et leur mode d'action ciblé en font une alternative de choix aux traitements médicamenteux traditionnels."
                    </motion.blockquote>
                    <motion.p 
                        className="text-txtLight font-semibold mt-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                            delay: 0.5,
                            duration: 0.6,
                            ease: "easeOut" 
                        }}
                    >
                        — Dr. Sophie Martin, Gynécologue
                    </motion.p>
                </motion.div>
            </section>

            {/* Section: Notre engagement */}
            <section className="bg-primary/5 py-12 md:py-16 w-full">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Notre engagement pour votre bien-être
                    </motion.h2>
                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 0.6,
                            ease: "easeOut" 
                        }}
                    >
                        <motion.p 
                            className="text-txt mb-6"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                delay: 0.2,
                                duration: 0.6,
                                ease: "easeOut" 
                            }}
                        >
                            Chez Luna Soulage, nous nous engageons à vous offrir uniquement des produits de la plus haute qualité. Nos patchs sont fabriqués au Sénégal dans des laboratoires certifiés, suivant des normes strictes de production. Nous privilégions des ingrédients biologiques et un emballage éco-responsable, parce que prendre soin de vous signifie aussi prendre soin de notre planète.
                        </motion.p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <motion.img
                                src={PatchApplied}
                                alt="Patch Luna Soulage appliqué"
                                className="w-full md:w-1/3 h-auto rounded-lg shadow-md"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    delay: 0.3,
                                    duration: 0.7,
                                    ease: "easeOut" 
                                }}
                                whileHover={{ scale: 1.05 }}
                            />
                            <motion.div 
                                className="md:w-2/3"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    delay: 0.5,
                                    duration: 0.6,
                                    ease: "easeOut" 
                                }}
                            >
                                <h3 className="text-xl font-bold text-primary mb-3">Des résultats prouvés</h3>
                                <p className="text-txt mb-4">
                                    Nos patchs ont été testés sur un panel de femmes souffrant de douleurs menstruelles. 92% d'entre elles ont constaté une diminution significative de leurs douleurs dès la première utilisation, et 87% ont reporté une amélioration de leur qualité de vie pendant leurs règles.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Appel à l'action */}
            <section className="container mx-auto px-4 py-12 md:py-16 text-center">
                <motion.h2 
                    className="text-2xl md:text-3xl font-bold text-primary mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Prête à dire adieu aux douleurs menstruelles ?
                </motion.h2>
                <motion.p 
                    className="text-txt mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                        delay: 0.2,
                        duration: 0.6,
                        ease: "easeOut" 
                    }}
                >
                    Ne laissez plus vos règles douloureuses contrôler votre vie. Essayez les patchs Luna Soulage et redécouvrez le confort, même pendant vos jours les plus difficiles. Disponibles en pack découverte ou en abonnement mensuel pour ne jamais être prise au dépourvu.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                        delay: 0.4,
                        duration: 0.6,
                        ease: "easeOut" 
                    }}
                    whileHover={hoverScale}
                    whileTap={{ scale: 0.98 }}
                >
                    <BtnCustom
                        to=""
                        text="Commander vos patchs maintenant"
                        className="mx-auto"
                    />
                </motion.div>
            </section>
        </div>
    );
};

export default AboutPage;
