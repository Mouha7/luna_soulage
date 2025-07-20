import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { RiShieldCheckLine } from "react-icons/ri";
import { BtnCustom } from "./components/Btn";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Loader from "./components/Loader";
import { WA_BUSINESS_NUMBER } from "./constants/info";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import TestimonialsCarousel from "./components/TestimonialsCarousel";

// Images - Assurez-vous d'avoir ces images dans vos assets
import BannerHome from "./assets/images/banner.png";
import PatchApplication from "./assets/images/patch_applied.jpg";
import PatchUnwrap from "./assets/images/patch_unwrap.png";
import PatchApply from "./assets/images/patch_applied.jpg";
import PatchPrepare from "./assets/images/patch_prepare.jpg";
// import PatchRemove from "./assets/images/patch_remove.jpg";

// Animations
import {
	fadeInUp,
	staggerContainer,
	cardVariant,
	hoverScale,
	hoverScaleShadow,
	bannerAnimation,
	bannerContentAnimation,
} from "./constants/animationVariants";

const App = () => {
	const [loading, setLoading] = useState(true);

	const whatsApp =
		WA_BUSINESS_NUMBER +
		"?text=Bonjour,%20je%20souhaite%20commander%20des%20patchs%20Luna%20Soulage";

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<div className="flex flex-col w-full">
			{/* 0. HEADER */}
			<Header />

			{/* 1. HERO SECTION */}
			<motion.div
				className="bg-cover bg-center bg-no-repeat md:h-[700px] sm:h-[600px] h-[500px] shadow-lg relative"
				style={{ backgroundImage: `url(${BannerHome})` }}
				variants={bannerAnimation}
				initial="hidden"
				animate="visible"
				id="hero"
			>
				<motion.div
					className="flex flex-col items-center justify-center gap-3 md:gap-5 h-full bg-black/25 text-white p-4 md:p-5"
					variants={bannerContentAnimation}
				>
					<motion.h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-center max-w-4xl">
						Dites adieu aux douleurs menstruelles, naturellement
					</motion.h1>
					<p className="text-sm sm:text-base md:text-lg text-center max-w-2xl">
						Des patchs innovants qui soulagent vos règles
						douloureuses en quelques minutes
					</p>
					<motion.div
						whileHover={hoverScale}
						whileTap={{ scale: 0.98 }}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.8, duration: 0.4 }}
					>
						<BtnCustom
							to={whatsApp}
							className="mt-2 sm:mt-4 flex items-center gap-2 text-lg px-8 py-3"
						>
							<motion.span
								animate={{
									rotate: [0, 10, -10, 10, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatDelay: 3,
								}}
							>
								<PiWhatsappLogoFill size={24} />
							</motion.span>
							Commander via WhatsApp
						</BtnCustom>
					</motion.div>
				</motion.div>
			</motion.div>

			{/* 2. PROBLÈME/SOLUTION */}
			<motion.section
				className="container mx-auto px-4 py-12 md:py-16"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				variants={fadeInUp}
				id="problem-solution"
			>
				<div className="flex flex-col md:flex-row gap-8 items-center">
					<motion.div className="md:w-1/2" variants={fadeInUp}>
						<h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
							Vos règles ne devraient pas vous arrêter
						</h2>
						<motion.div
							className="bg-card rounded-lg p-6 shadow-md mb-6"
							whileHover={hoverScale}
						>
							<h3 className="text-xl font-bold text-txtLight mb-2">
								Le problème
							</h3>
							<p className="text-txt mb-4">
								Plus de 80% des femmes souffrent de douleurs
								menstruelles qui limitent leurs activités
								quotidiennes. Médicaments aux effets
								secondaires, bouillottes encombrantes, tisanes
								peu efficaces... Les solutions traditionnelles
								ne sont jamais parfaites.
							</p>
						</motion.div>
						<motion.div
							className="bg-card rounded-lg p-6 shadow-md"
							whileHover={hoverScale}
							transition={{ delay: 0.1 }}
						>
							<h3 className="text-xl font-bold text-primary mb-2">
								Notre solution
							</h3>
							<p className="text-txt">
								Les patchs Luna Soulage offrent une alternative
								naturelle, efficace et discrète. Appliqués
								directement sur la zone douloureuse, ils
								libèrent des actifs naturels qui apaisent les
								crampes en seulement 15 minutes, avec un effet
								qui dure jusqu'à 8 heures.
							</p>
						</motion.div>
					</motion.div>
					<motion.div
						className="md:w-1/2"
						variants={fadeInUp}
						whileHover={{ scale: 1.02 }}
						transition={{ duration: 0.3 }}
					>
						<img
							src={PatchApplication}
							alt="Application du patch Luna Soulage"
							className="rounded-lg shadow-lg w-full h-auto"
						/>
					</motion.div>
				</div>
			</motion.section>

			{/* 3. AVANTAGES CLÉS */}
			<section
				className="bg-primary/5 py-12 md:py-16 w-full"
				id="key-benefits"
			>
				<div className="container mx-auto px-4">
					<motion.h2
						className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						Pourquoi les femmes adorent Luna Soulage
					</motion.h2>
					<motion.div
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
					>
						<motion.div
							className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
							variants={cardVariant}
							whileHover={hoverScale}
						>
							<div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-4">
								<span className="text-primary text-2xl">
									🌿
								</span>
							</div>
							<h3 className="font-bold text-lg mb-2">Naturel</h3>
							<p className="text-txt">
								100% d'ingrédients naturels, sans produits
								chimiques
							</p>
						</motion.div>

						<motion.div
							className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
							variants={cardVariant}
							whileHover={hoverScale}
						>
							<div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-4">
								<RiShieldCheckLine className="text-primary text-2xl" />
							</div>
							<h3 className="font-bold text-lg mb-2">
								Longue durée
							</h3>
							<p className="text-txt">
								Effet apaisant jusqu'à 8 heures consécutives
							</p>
						</motion.div>

						<motion.div
							className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
							variants={cardVariant}
							whileHover={hoverScale}
						>
							<div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-4">
								<span className="text-primary text-2xl">
									👁️
								</span>
							</div>
							<h3 className="font-bold text-lg mb-2">Discret</h3>
							<p className="text-txt">
								Ultra-fin et invisible, même sous des vêtements
								ajustés
							</p>
						</motion.div>

						<motion.div
							className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
							variants={cardVariant}
							whileHover={hoverScale}
						>
							<div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-4">
								<span className="text-primary text-2xl">
									⚡
								</span>
							</div>
							<h3 className="font-bold text-lg mb-2">Rapide</h3>
							<p className="text-txt">
								Soulagement ressenti en 15 minutes seulement
							</p>
						</motion.div>

						<motion.div
							className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
							variants={cardVariant}
							whileHover={hoverScale}
						>
							<div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-4">
								<span className="text-primary text-2xl">
									✋
								</span>
							</div>
							<h3 className="font-bold text-lg mb-2">Simple</h3>
							<p className="text-txt">
								Application simple et rapide, sans contraintes
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* 4. COMMENT ÇA MARCHE */}
			<section
				className="container mx-auto px-4 py-12 md:py-16"
				id="how-it-works"
			>
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
							src={PatchPrepare}
							alt="Préparation du patch"
							className="w-full h-48 object-cover"
						/>
						<div className="p-6">
							<h3 className="text-xl font-bold text-primary mb-3">
								Étape 1 : Préparation du patch
							</h3>
							<p className="text-txt">
								Sortez le patch de son emballage individuel.
								Évitez de toucher la surface adhésive avec vos
								doigts pour préserver l'efficacité des
								ingrédients actifs.
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
							<h3 className="text-xl font-bold text-primary mb-3">
								Étape 2 : Retrait du film protecteur
							</h3>
							<p className="text-txt">
								Décollez délicatement le film protecteur qui
								recouvre la face adhésive du patch. Tenez le
								patch par les bords pour éviter de toucher la
								partie adhésive.
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
							<h3 className="text-xl font-bold text-primary mb-3">
								Étape 3 : Application sur la peau
							</h3>
							<p className="text-txt">
								Appliquez le patch directement sur la zone
								douloureuse (bas-ventre ou bas du dos). Appuyez
								légèrement pendant quelques secondes pour vous
								assurer qu'il adhère bien à la peau.
							</p>
						</div>
					</motion.div>
				</motion.div>
			</section>

			{/* 5. TÉMOIGNAGES EXPRESS */}
			<section
				className="bg-primary/5 py-12 md:py-16 w-full"
				id="testimonials"
			>
				<div className="container mx-auto px-4">
					<motion.h2
						className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						Elles ont testé, elles approuvent
					</motion.h2>

					{/* Nouveau Carousel */}
                    <TestimonialsCarousel />

					{/* Statistiques */}
					<motion.div
						className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
					>
						<motion.div
							className="bg-white rounded-lg p-6 shadow-md text-center"
							variants={cardVariant}
							whileHover={hoverScaleShadow}
						>
							<motion.div
								className="text-4xl font-bold text-primary mb-2"
								initial={{ scale: 0.8, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5 }}
							>
								92%
							</motion.div>
							<p className="text-txt">
								de satisfaction dès la première utilisation
							</p>
						</motion.div>

						<motion.div
							className="bg-white rounded-lg p-6 shadow-md text-center"
							variants={cardVariant}
							whileHover={hoverScaleShadow}
						>
							<motion.div
								className="text-4xl font-bold text-primary mb-2"
								initial={{ scale: 0.8, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								95%
							</motion.div>
							<p className="text-txt">
								recommandent à leurs amies
							</p>
						</motion.div>

						<motion.div
							className="bg-white rounded-lg p-6 shadow-md text-center"
							variants={cardVariant}
							whileHover={hoverScaleShadow}
						>
							<motion.div
								className="text-4xl font-bold text-primary mb-2"
								initial={{ scale: 0.8, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								4.8/5
							</motion.div>
							<p className="text-txt">note moyenne</p>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* 6. FAQ RAPIDE */}
			<section className="container mx-auto px-4 py-12 md:py-16" id="faq">
				<motion.h2
					className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					Questions fréquentes
				</motion.h2>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
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
						<h3 className="text-xl font-bold text-primary mb-3">
							Les patchs sont-ils vraiment efficaces ?
						</h3>
						<p className="text-txt">
							Oui ! 92% de nos clientes rapportent un soulagement
							significatif dès la première utilisation.
						</p>
					</motion.div>

					<motion.div
						className="bg-white rounded-lg p-6 shadow-md"
						variants={cardVariant}
						whileHover={hoverScale}
					>
						<h3 className="text-xl font-bold text-primary mb-3">
							Combien de temps dure l'effet ?
						</h3>
						<p className="text-txt">
							L'effet apaisant dure jusqu'à 8 heures, couvrant
							toute votre journée.
						</p>
					</motion.div>

					<motion.div
						className="bg-white rounded-lg p-6 shadow-md"
						variants={cardVariant}
						whileHover={hoverScale}
					>
						<h3 className="text-xl font-bold text-primary mb-3">
							Les patchs sont-ils visibles ?
						</h3>
						<p className="text-txt">
							Non, ils sont ultra-fins et conçus pour rester
							discrets, même sous des vêtements ajustés.
						</p>
					</motion.div>
				</motion.div>
			</section>

			{/* 7. PACKS ET PRIX */}
			<section
				className="bg-primary/5 py-12 md:py-16 w-full"
				id="packs-prix"
			>
				<div className="container mx-auto px-4 text-center">
					<motion.h2
						className="text-2xl md:text-3xl font-bold text-primary mb-8"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						Retrouvez votre liberté, même pendant vos règles
					</motion.h2>

					<motion.div
						className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
					>
						{/* Pack découverte */}
						<motion.div
							className="bg-white rounded-lg p-6 shadow-md border border-ombre/10"
							variants={cardVariant}
							whileHover={{
								scale: 1.03,
								boxShadow:
									"0 10px 25px rgba(167, 68, 136, 0.1)",
								y: -5,
							}}
						>
							<h3 className="text-xl font-bold text-primary mb-3">
								Pack découverte
							</h3>
							<motion.div
								className="text-4xl font-bold text-primary mb-2"
								animate={{
									scale: [1, 1.05, 1],
									opacity: [0.9, 1, 0.9],
								}}
								transition={{
									repeat: Infinity,
									duration: 5,
									ease: "easeInOut",
								}}
							>
								8 000 FCFA
							</motion.div>
							<p className="text-txt mb-6">2 patchs</p>
							<ul className="text-left mb-6 space-y-3">
								<li className="flex items-center">
									<span className="text-primary mr-2">✓</span>
									<span className="text-txt">
										Idéal pour tester l'efficacité
									</span>
								</li>
							</ul>
						</motion.div>

						{/* Pack sérénité */}
						<motion.div
							className="bg-white rounded-lg p-6 shadow-md border border-primary relative"
							variants={cardVariant}
							whileHover={{
								scale: 1.03,
								boxShadow:
									"0 10px 25px rgba(167, 68, 136, 0.2)",
								y: -5,
							}}
						>
							<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
								<span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
									POPULAIRE
								</span>
							</div>
							<h3 className="text-xl font-bold text-primary mb-3">
								Pack Sérénité
							</h3>
							<motion.div
								className="text-4xl font-bold text-primary mb-2"
								animate={{
									scale: [1, 1.1, 1],
									opacity: [0.8, 1, 0.8],
								}}
								transition={{
									repeat: Infinity,
									duration: 4,
									ease: "easeInOut",
								}}
							>
								14 000 FCFA
							</motion.div>
							<p className="text-txt mb-6">4 patchs</p>
							<ul className="text-left mb-6 space-y-3">
								<li className="flex items-center">
									<span className="text-primary mr-2">✓</span>
									<span className="text-txt">
										Couverture complète du cycle
									</span>
								</li>
								<li className="flex items-center">
									<span className="text-primary mr-2">✓</span>
									<span className="text-txt">
										Livraison offerte à Dakar
									</span>
								</li>
							</ul>
						</motion.div>

						{/* Pack liberté */}
						<motion.div
							className="bg-white rounded-lg p-6 shadow-md border border-primary relative"
							variants={cardVariant}
							whileHover={{
								scale: 1.03,
								boxShadow:
									"0 10px 25px rgba(167, 68, 136, 0.2)",
								y: -5,
							}}
						>
							<h3 className="text-xl font-bold text-primary mb-3">
								Pack Liberté
							</h3>
							<motion.div
								className="text-4xl font-bold text-primary mb-2"
								animate={{
									scale: [1, 1.1, 1],
									opacity: [0.8, 1, 0.8],
								}}
								transition={{
									repeat: Infinity,
									duration: 4,
									ease: "easeInOut",
								}}
							>
								24 000 FCFA
							</motion.div>
							<p className="text-txt mb-6">8 patchs</p>
							<ul className="text-left mb-6 space-y-3">
								<li className="flex items-center">
									<span className="text-primary mr-2">✓</span>
									<span className="text-txt">
										Couverture complète de 2 cycles
									</span>
								</li>
								<li className="flex items-center">
									<span className="text-primary mr-2">✓</span>
									<span className="text-txt">
										Livraison offerte à Dakar
									</span>
								</li>
							</ul>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* 8. CTA FINAL */}
			<section className="container mx-auto px-4 py-12 md:py-16 text-center">
				<motion.h2
					className="text-2xl md:text-3xl font-bold text-primary mb-6"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					Prête à retrouver votre confort ?
				</motion.h2>

				<motion.p
					className="text-txt mb-8 max-w-2xl mx-auto"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.6 }}
				>
					Rejoignez des milliers de femmes qui ont déjà transformé
					leur expérience des règles avec Luna Soulage.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.4, duration: 0.6 }}
					whileHover={hoverScale}
					whileTap={{ scale: 0.98 }}
				>
					<BtnCustom
						to={whatsApp}
						className="mx-auto px-8 py-3 text-lg flex items-center gap-3 justify-center"
					>
						<motion.span
							animate={{
								rotate: [0, 10, -10, 10, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatDelay: 3,
							}}
						>
							<PiWhatsappLogoFill size={24} />
						</motion.span>
						Commander maintenant via WhatsApp
					</BtnCustom>
				</motion.div>

				{/* Badges de réassurance */}
				<motion.div
					className="flex flex-wrap justify-center gap-4 mt-8"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.div
						className="bg-primary/10 text-primary text-sm font-bold py-2 px-4 rounded-full"
						variants={cardVariant}
						whileHover={{
							scale: 1.1,
							backgroundColor: "rgba(167, 68, 136, 0.2)",
						}}
					>
						100% naturel
					</motion.div>
					<motion.div
						className="bg-primary/10 text-primary text-sm font-bold py-2 px-4 rounded-full"
						variants={cardVariant}
						whileHover={{
							scale: 1.1,
							backgroundColor: "rgba(167, 68, 136, 0.2)",
						}}
					>
						Testé dermatologiquement
					</motion.div>
					<motion.div
						className="bg-primary/10 text-primary text-sm font-bold py-2 px-4 rounded-full"
						variants={cardVariant}
						whileHover={{
							scale: 1.1,
							backgroundColor: "rgba(167, 68, 136, 0.2)",
						}}
					>
						Livraison rapide
					</motion.div>
				</motion.div>
			</section>

			{/* 9. PIED DE PAGE */}
			<Footer />

			{/* Bouton retour en haut */}
			<ScrollToTopButton />
		</div>
	);
};

export default App;
