import BannerHome from "../assets/images/banner_home.jpg";
import WomanActive from "../assets/images/patch_image.jpg";
import PatchApplication from "../assets/images/patch_applied.jpg";
import { BtnCustom } from "../components/Btn";
import { FaLeaf, FaClock, FaSmile } from "react-icons/fa";
import { RiShieldCheckLine, RiMedicineBottleLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
    fadeInUp, 
    staggerContainer, 
    cardVariant, 
    hoverScale,
} from '../constants/animationVariants';

const HomePage = () => {
	return (
		<div className="flex flex-col w-full justify-center items-center">
			{/* Section 1: Bannière principale */}
			<motion.div
				className="lg-fully-style fully-style bg-cover bg-center bg-no-repeat md:h-[570px] sm:h-[450px] h-[400px] shadow-lg"
				style={{ backgroundImage: `url(${BannerHome})` }}
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
						ease: "easeOut",
					}}
				>
					<h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-black text-center">
						Dites adieu aux douleurs menstruelles, naturellement
					</h1>
					<p className="text-sm sm:text-base md:text-lg text-center">
						Des patchs innovants qui soulagent vos règles
						douloureuses en quelques minutes
					</p>
					<motion.div
						whileHover={hoverScale}
						whileTap={{ scale: 0.98 }}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							delay: 0.8,
							duration: 0.4,
						}}
					>
						<BtnCustom
							to="https://wa.me/221770000000?text=Bonjour,%20je%20souhaite%20commander%20des%20patchs%20Luna%20Soulage"
							className="mt-2 sm:mt-4 flex items-center gap-2"
						>
							<PiWhatsappLogoFill size={20} />
							Commander via WhatsApp
						</BtnCustom>
					</motion.div>
				</motion.div>
			</motion.div>

			{/* Section 2: Problème/Solution */}
			<motion.section
				className="container mx-auto px-4 py-12 md:py-16"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				variants={fadeInUp}
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

			{/* Section 3: Avantages clés */}
			<section className="bg-primary/5 py-12 md:py-16 w-full">
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
								<FaClock className="text-primary text-2xl" />
							</div>
							<h3 className="font-bold text-lg mb-2">Rapide</h3>
							<p className="text-txt">
								Soulagement en 15 minutes seulement
							</p>
						</motion.div>

						<motion.div
							className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
							variants={cardVariant}
							whileHover={hoverScale}
						>
							<div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-4">
								<FaLeaf className="text-primary text-2xl" />
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
								<RiMedicineBottleLine className="text-primary text-2xl" />
							</div>
							<h3 className="font-bold text-lg mb-2">Discret</h3>
							<p className="text-txt">
								Invisible sous les vêtements, portez-le où que
								vous soyez
							</p>
						</motion.div>

						<motion.div
							className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
							variants={cardVariant}
							whileHover={hoverScale}
						>
							<div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-full mb-4">
								<FaSmile className="text-primary text-2xl" />
							</div>
							<h3 className="font-bold text-lg mb-2">Pratique</h3>
							<p className="text-txt">
								Application simple et rapide, sans contraintes
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Section 4: Comment ça marche */}
			<section className="container mx-auto px-4 py-12 md:py-16">
				<motion.h2
					className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					Simple comme 1-2-3
				</motion.h2>
				<motion.div
					className="grid grid-cols-1 md:grid-cols-3 gap-8"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
				>
					<motion.div
						className="bg-card rounded-lg p-6 shadow-md text-center"
						variants={cardVariant}
						whileHover={hoverScale}
					>
						<motion.div
							className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-4"
							whileHover={{ rotate: 5 }}
							transition={{ duration: 0.3 }}
						>
							1
						</motion.div>
						<h3 className="text-xl font-bold text-primary mb-3">
							Décollez
						</h3>
						<p className="text-txt">
							Décollez le film protecteur du patch
						</p>
					</motion.div>

					<motion.div
						className="bg-card rounded-lg p-6 shadow-md text-center"
						variants={cardVariant}
						whileHover={hoverScale}
					>
						<motion.div
							className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-4"
							whileHover={{ rotate: 5 }}
							transition={{ duration: 0.3 }}
						>
							2
						</motion.div>
						<h3 className="text-xl font-bold text-primary mb-3">
							Appliquez
						</h3>
						<p className="text-txt">
							Appliquez-le sur la zone douloureuse (bas-ventre ou
							bas du dos)
						</p>
					</motion.div>

					<motion.div
						className="bg-card rounded-lg p-6 shadow-md text-center"
						variants={cardVariant}
						whileHover={hoverScale}
					>
						<motion.div
							className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-2xl font-bold mb-4"
							whileHover={{ rotate: 5 }}
							transition={{ duration: 0.3 }}
						>
							3
						</motion.div>
						<h3 className="text-xl font-bold text-primary mb-3">
							Profitez
						</h3>
						<p className="text-txt">
							Profitez d'un soulagement rapide pendant 8 heures
						</p>
					</motion.div>
				</motion.div>

				<div className="mt-8 text-center">
					<motion.div
						whileHover={{ x: 5 }}
						transition={{ duration: 0.2 }}
					>
						<NavLink
							to="/instructions"
							className="inline-flex items-center text-primary font-medium hover:underline"
						>
							Voir le mode d'emploi détaillé{" "}
							<motion.span
								animate={{ x: [0, 3, 0] }}
								transition={{
									repeat: Infinity,
									duration: 1.5,
									ease: "easeInOut",
								}}
							>
								<IoIosArrowForward className="ml-1" />
							</motion.span>
						</NavLink>
					</motion.div>
				</div>
			</section>

			{/* Section 5: Témoignage express */}
			<section className="bg-primary/5 py-12 md:py-16 w-full">
				<div className="container mx-auto px-4">
					<motion.h2
						className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						Ce que nos clientes disent
					</motion.h2>

					<motion.div
						className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						whileHover={{
							y: -5,
							boxShadow: "0 10px 25px rgba(167, 68, 136, 0.1)",
						}}
					>
						<div className="flex flex-col md:flex-row">
							<motion.div
								className="md:w-1/3"
								initial={{ opacity: 0, scale: 0.95 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.3, duration: 0.6 }}
							>
								<img
									src={WomanActive}
									alt="Fatou D., cliente satisfaite"
									className="w-full h-full object-cover"
								/>
							</motion.div>
							<div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
								<motion.p
									className="text-txt italic mb-4"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ delay: 0.5, duration: 0.6 }}
								>
									"Après des années à souffrir chaque mois,
									j'ai enfin trouvé une solution qui me permet
									de rester active pendant mes règles. Les
									patchs Luna Soulage ont changé ma vie !"
								</motion.p>
								<motion.p
									className="text-txtLight font-semibold"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ delay: 0.7, duration: 0.6 }}
								>
									— Fatou D., 28 ans
								</motion.p>

								<motion.div
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ delay: 0.9, duration: 0.6 }}
									whileHover={{ x: 5 }}
								>
									<NavLink
										to="/temoignages"
										className="mt-4 inline-flex items-center text-primary font-medium hover:underline"
									>
										Voir tous les témoignages{" "}
										<motion.span
											animate={{ x: [0, 3, 0] }}
											transition={{
												repeat: Infinity,
												duration: 1.5,
												ease: "easeInOut",
											}}
										>
											<IoIosArrowForward className="ml-1" />
										</motion.span>
									</NavLink>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Section 6: Offre et appel à l'action */}
			<section className="container mx-auto px-4 py-12 md:py-16 text-center">
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
					className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8"
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
							boxShadow: "0 10px 25px rgba(167, 68, 136, 0.1)",
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
							15 000 FCFA
						</motion.div>
						<p className="text-txt mb-6">5 patchs</p>
						<ul className="text-left mb-6 space-y-3">
							<li className="flex items-center">
								<motion.span
									className="text-primary mr-2"
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.2, duration: 0.3 }}
								>
									✓
								</motion.span>
								<span className="text-txt">
									Idéal pour tester l'efficacité
								</span>
							</li>
							<li className="flex items-center">
								<motion.span
									className="text-primary mr-2"
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.3, duration: 0.3 }}
								>
									✓
								</motion.span>
								<span className="text-txt">
									Livraison offerte à Dakar
								</span>
							</li>
						</ul>
					</motion.div>

					{/* Pack mensuel */}
					<motion.div
						className="bg-white rounded-lg p-6 shadow-md border border-primary relative"
						variants={cardVariant}
						whileHover={{
							scale: 1.03,
							boxShadow: "0 10px 25px rgba(167, 68, 136, 0.15)",
							y: -5,
						}}
					>
						<motion.div
							className="absolute -top-3 right-6 bg-primary text-white text-xs font-bold py-1 px-3 rounded"
							animate={{
								y: [0, -3, 0],
							}}
							transition={{
								repeat: Infinity,
								duration: 2,
								ease: "easeInOut",
							}}
						>
							POPULAIRE
						</motion.div>
						<h3 className="text-xl font-bold text-primary mb-3">
							Pack mensuel
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
								delay: 0.5,
							}}
						>
							30 000 FCFA
						</motion.div>
						<p className="text-txt mb-6">12 patchs</p>
						<ul className="text-left mb-6 space-y-3">
							<li className="flex items-center">
								<motion.span
									className="text-primary mr-2"
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.4, duration: 0.3 }}
								>
									✓
								</motion.span>
								<span className="text-txt">
									Économie de 5 000 FCFA
								</span>
							</li>
							<li className="flex items-center">
								<motion.span
									className="text-primary mr-2"
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.5, duration: 0.3 }}
								>
									✓
								</motion.span>
								<span className="text-txt">
									Couverture complète du cycle
								</span>
							</li>
							<li className="flex items-center">
								<motion.span
									className="text-primary mr-2"
									initial={{ opacity: 0, scale: 0 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.6, duration: 0.3 }}
								>
									✓
								</motion.span>
								<span className="text-txt">
									Livraison offerte à Dakar
								</span>
							</li>
						</ul>
					</motion.div>
				</motion.div>

				<motion.p
					className="text-txtLight text-sm mb-8"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2, duration: 0.6 }}
				>
					Satisfaite ou remboursée sous 30 jours
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
						to="https://wa.me/221770000000?text=Bonjour,%20je%20souhaite%20commander%20des%20patchs%20Luna%20Soulage"
						className="mx-auto px-8 py-2 flex items-center gap-2 justify-center"
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
							<PiWhatsappLogoFill size={20} />
						</motion.span>
						Commander via WhatsApp
					</BtnCustom>
				</motion.div>
			</section>

			{/* Section 7: FAQ rapide */}
			<section className="bg-primary/5 py-12 md:py-16 w-full">
				<div className="container mx-auto px-4">
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
						className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
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
								Oui ! 92% de nos clientes rapportent un
								soulagement significatif dès la première
								utilisation.
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

					<div className="text-center mt-8">
						<motion.div
							whileHover={{ x: 5 }}
							transition={{ duration: 0.2 }}
						>
							<NavLink
								to="/faq"
								className="inline-flex items-center text-primary font-medium hover:underline"
							>
								Plus de questions ? Consultez notre FAQ complète{" "}
								<motion.span
									animate={{ x: [0, 3, 0] }}
									transition={{
										repeat: Infinity,
										duration: 1.5,
										ease: "easeInOut",
									}}
								>
									<IoIosArrowForward className="ml-1" />
								</motion.span>
							</NavLink>
						</motion.div>
					</div>
				</div>
			</section>

			{/* Badges de réassurance */}
			<motion.section
				className="container mx-auto px-4 py-8"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				<motion.div
					className="flex flex-wrap justify-center gap-4"
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
						Fabriqué au Sénégal
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
			</motion.section>
		</div>
	);
};

export default HomePage;
