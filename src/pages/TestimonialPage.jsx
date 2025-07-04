import BannerTestimonial from "../assets/images/banner_testimonial.jpg"; // À ajouter dans vos assets
import Woman1 from "../assets/images/testimonial.jpg"; // À ajouter dans vos assets
import Woman2 from "../assets/images/testimonial.jpg";
import { BtnCustom } from "../components/Btn";
import { useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { WA_BUSINESS_NUMBER } from "../constants/info";
import {
	fadeInUp,
	staggerContainer,
	cardVariant,
	buttonTapAnimation,
	hoverScaleShadow,
} from "../constants/animationVariants";

const TestimonialPage = () => {
	const form = useRef();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		rating: 5,
		testimonial: "",
		consent: false,
	});
	const [showNotification, setShowNotification] = useState(false);
	const [notificationType, setNotificationType] = useState("success");
	const [notificationMessage, setNotificationMessage] = useState("");

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === "checkbox" ? checked : value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Utiliser les variables d'environnement comme dans ContactPage.jsx
		const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

		// Préparer les données du template
		const templateParams = {
			from_name: formData.name,
			from_email: formData.email,
			stars: formData.rating,
			phone_number: "xxx-xxx-xx-xx",
			subject: "Témoignage Luna Soulage",
			message: formData.testimonial,
		};

		emailjs
			.send(serviceId, templateId, templateParams, publicKey)
			.then((response) => {
				console.log(
					"Témoignage envoyé avec succès!",
					response.status,
					response.text
				);
				setNotificationType("success");
				setNotificationMessage(
					"Merci pour votre témoignage ! Il sera publié après modération."
				);
				setShowNotification(true);
				// Réinitialiser le formulaire
				setFormData({
					name: "",
					email: "",
					rating: 5,
					testimonial: "",
					consent: false,
				});

				// Fermer la notification après 5 secondes
				setTimeout(() => {
					setShowNotification(false);
				}, 5000);
			})
			.catch((error) => {
				console.error(
					"Erreur lors de l'envoi du témoignage",
					error.text
				);
				setNotificationType("error");
				setNotificationMessage(
					"Une erreur est survenue. Veuillez réessayer plus tard."
				);
				setShowNotification(true);

				// Fermer la notification après 5 secondes
				setTimeout(() => {
					setShowNotification(false);
				}, 5000);
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	};

	const renderStars = (rating) => {
		const stars = [];
		for (let i = 1; i <= 5; i++) {
			stars.push(
				i <= rating ? (
					<AiFillStar key={i} className="text-primary text-xl" />
				) : (
					<AiOutlineStar key={i} className="text-primary text-xl" />
				)
			);
		}
		return stars;
	};

	const whatsApp =
		WA_BUSINESS_NUMBER +
		"?text=Bonjour,%20je%20souhaite%20commander%20des%20patchs%20Luna%20Soulage";

	return (
		<div className="flex flex-col w-full justify-center items-center">
			{/* Bannière principale */}
			<motion.div
				className="lg-fully-style fully-style bg-cover bg-center bg-no-repeat md:h-[570px] sm:h-[450px] h-[400px] shadow-lg"
				style={{ backgroundImage: `url(${BannerTestimonial})` }}
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
						Ce qu’elles en pensent…
					</h1>
					<p className="text-sm sm:text-base md:text-lg text-center">
						Des milliers de femmes ont adopté Luna Soulage pour
						transformer leur expérience des règles. Discret, doux et
						efficace, notre patch a changé leur quotidien… et leur
						regard sur cette période. Découvrez leurs témoignages,
						entre soulagement, confiance et liberté retrouvée.
					</p>
				</motion.div>
			</motion.div>

			{/* Section 1: Introduction */}
			<motion.section
				className="container mx-auto px-4 py-12 md:py-16"
				variants={fadeInUp}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
			>
				<p className="text-txt text-center max-w-3xl mx-auto text-lg">
					Chez Luna Soulage, notre plus grande satisfaction est de
					vous voir retrouver une vie active et sereine pendant vos
					règles. Voici les témoignages authentiques de femmes qui,
					comme vous, cherchaient une solution efficace contre les
					douleurs menstruelles.
				</p>
			</motion.section>

			{/* Section 2: Témoignages vedettes */}
			<section className="bg-primary/5 py-12 md:py-16 w-full">
				<div className="container mx-auto px-4">
					<motion.h2
						className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						Histoires de transformation
					</motion.h2>

					<motion.div
						className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
					>
						{/* Témoignage 1 */}
						<motion.div
							className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
							variants={cardVariant}
							whileHover={hoverScaleShadow}
						>
							<div className="md:w-1/3">
								<motion.img
									src={Woman1}
									alt="Fatou D."
									className="w-full h-full object-cover"
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.3 }}
								/>
							</div>
							<div className="md:w-2/3 p-6">
								<div className="flex justify-between items-start mb-2">
									<h3 className="text-xl font-bold text-primary">
										Fatou D., 28 ans
									</h3>
									<div className="flex">{renderStars(5)}</div>
								</div>
								<p className="text-txtLight mb-3">
									Professeure
								</p>
								<p className="text-txt italic">
									"Pendant des années, j'ai dû annuler des
									cours à cause de mes douleurs menstruelles
									intenses. Les médicaments me donnaient des
									maux d'estomac, et rien d'autre ne semblait
									fonctionner. Une collègue m'a recommandé les
									patchs Luna Soulage et j'étais sceptique au
									début. Dès la première utilisation, j'ai
									ressenti un soulagement après environ 20
									minutes. Pour la première fois en 10 ans,
									j'ai pu enseigner normalement pendant mes
									règles. Je recommande ces patchs à toutes
									les femmes qui souffrent comme je
									souffrais."
								</p>
							</div>
						</motion.div>

						{/* Témoignage 2 */}
						<motion.div
							className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
							variants={cardVariant}
							whileHover={hoverScaleShadow}
						>
							<div className="md:w-1/3">
								<motion.img
									src={Woman2}
									alt="Aminata T."
									className="w-full h-full object-cover"
									whileHover={{ scale: 1.05 }}
									transition={{ duration: 0.3 }}
								/>
							</div>
							<div className="md:w-2/3 p-6">
								<div className="flex justify-between items-start mb-2">
									<h3 className="text-xl font-bold text-primary">
										Aminata T., 32 ans
									</h3>
									<div className="flex">{renderStars(5)}</div>
								</div>
								<p className="text-txtLight mb-3">Comptable</p>
								<p className="text-txt italic">
									"Mes crampes abdominales étaient si fortes
									que je devais rester alitée pendant au moins
									deux jours. Le patch Luna Soulage a réduit
									ma douleur de 70% en moins d'une heure. Je
									peux maintenant travailler normalement même
									les premiers jours de mes règles. C'est
									vraiment un produit révolutionnaire qui
									mérite d'être connu par toutes les femmes
									qui souffrent chaque mois."
								</p>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Section 3: Statistiques de satisfaction */}
			<section className="container mx-auto px-4 py-12 md:py-16">
				<motion.h2
					className="text-2xl md:text-3xl font-bold text-primary text-center mb-12"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					La satisfaction en chiffres
				</motion.h2>

				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
				>
					<motion.div
						className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
						variants={cardVariant}
						whileHover={hoverScaleShadow}
					>
						<motion.div
							className="text-5xl font-bold text-primary mb-3"
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 }}
						>
							92%
						</motion.div>
						<p className="text-txt">
							de nos clientes rapportent un soulagement
							significatif dès la première utilisation
						</p>
					</motion.div>

					<motion.div
						className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
						variants={cardVariant}
						whileHover={hoverScaleShadow}
					>
						<motion.div
							className="text-5xl font-bold text-primary mb-3"
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							87%
						</motion.div>
						<p className="text-txt">
							continuent à utiliser Luna Soulage après leur
							premier achat
						</p>
					</motion.div>

					<motion.div
						className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
						variants={cardVariant}
						whileHover={hoverScaleShadow}
					>
						<motion.div
							className="text-5xl font-bold text-primary mb-3"
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							95%
						</motion.div>
						<p className="text-txt">
							recommandent nos patchs à leurs amies et famille
						</p>
					</motion.div>

					<motion.div
						className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center text-center"
						variants={cardVariant}
						whileHover={hoverScaleShadow}
					>
						<motion.div
							className="text-5xl font-bold text-primary mb-3"
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							4.8/5
						</motion.div>
						<p className="text-txt">note moyenne de satisfaction</p>
					</motion.div>
				</motion.div>
			</section>

			{/* Section 4: Témoignages par problématique */}
			<section className="bg-primary/5 py-12 md:py-16 w-full">
				<div className="container mx-auto px-4">
					<motion.h2
						className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						Des solutions pour différents types de douleurs
					</motion.h2>

					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
						variants={staggerContainer}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.1 }}
					>
						{/* Pour les douleurs abdominales intenses */}
						<motion.div
							className="bg-white rounded-lg p-6 shadow-md"
							variants={cardVariant}
							whileHover={hoverScaleShadow}
						>
							<div className="flex items-center mb-3">
								{renderStars(5)}
								<span className="ml-2 font-semibold">
									Aïssatou, 29 ans, Dakar
								</span>
							</div>
							<p className="text-txt italic">
								"Franchement, j’étais sceptique au début… mais
								je n’ai jamais passé mes règles aussi
								sereinement. Le patch ne se voit pas et il m’a
								évité de prendre des médicaments. J’en parle à
								toutes mes amies maintenant."
							</p>
						</motion.div>

						{/* Pour les douleurs lombaires */}
						<motion.div
							className="bg-white rounded-lg p-6 shadow-md"
							variants={cardVariant}
							whileHover={hoverScaleShadow}
						>
							<div className="flex items-center mb-3">
								{renderStars(4)}
								<span className="ml-2 font-semibold">
									Sarah, 24 ans, Saint-Louis
								</span>
							</div>
							<p className="text-txt italic">
								“J’ai une peau sensible, donc j’étais inquiète.
								Mais aucune réaction, rien. Juste une sensation
								de confort, et surtout… plus de journée gâchée à
								cause de la douleur.”
							</p>
						</motion.div>

						{/* Pour les utilisatrices sportives */}
						<motion.div
							className="bg-white rounded-lg p-6 shadow-md"
							variants={cardVariant}
							whileHover={hoverScaleShadow}
						>
							<div className="flex items-center mb-3">
								{renderStars(4)}
								<span className="ml-2 font-semibold">
									Coumba, 32 ans, Thiès
								</span>
							</div>
							<p className="text-txt italic">
								“Ce patch est une bénédiction ! Je le mets le
								matin et j’oublie même que j’ai mes règles. Il
								tient vraiment 24h, même sous mes vêtements
								serrés.”
							</p>
						</motion.div>

						{/* Pour les douleurs nocturnes */}
						<motion.div
							className="bg-white rounded-lg p-6 shadow-md"
							variants={cardVariant}
							whileHover={hoverScaleShadow}
						>
							<div className="flex items-center mb-3">
								{renderStars(5)}
								<span className="ml-2 font-semibold">
									Aïda, 20 ans, Ziguinchor
								</span>
							</div>
							<p className="text-txt italic">
								“Luna Soulage m’a changé la vie. Plus besoin de
								cacher ma douleur ou de m’absenter. Et en plus,
								j’adore l’emballage ! Féminin, classe et
								discret.”
							</p>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Section 5: Avant / Après */}
			<section className="container mx-auto px-4 py-12 md:py-16">
				<motion.h2
					className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					Avant et après Luna Soulage
				</motion.h2>

				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.1 }}
				>
					{/* Avant/Après 1 */}
					<motion.div
						className="bg-white rounded-lg shadow-md overflow-hidden"
						variants={cardVariant}
						whileHover={hoverScaleShadow}
					>
						<div className="grid grid-cols-2">
							<motion.div
								className="p-6 bg-primary/10"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<h3 className="font-bold text-primary mb-2">
									Avant
								</h3>
								<p className="text-txt">
									"Je prenais jusqu'à 6 comprimés
									d'antidouleurs par jour pendant mes règles."
								</p>
							</motion.div>
							<motion.div
								className="p-6"
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.3 }}
							>
								<h3 className="font-bold text-primary mb-2">
									Après
								</h3>
								<p className="text-txt">
									"Je n'ai plus besoin de médicaments, un
									patch le matin et parfois un autre le soir
									suffisent."
								</p>
							</motion.div>
						</div>
						<div className="p-4 border-t border-ombre/10">
							<p className="text-txtLight text-right">
								— Coumba F., 27 ans
							</p>
						</div>
					</motion.div>

					{/* Avant/Après 2 */}
					<motion.div
						className="bg-white rounded-lg shadow-md overflow-hidden"
						variants={cardVariant}
						whileHover={hoverScaleShadow}
					>
						<div className="grid grid-cols-2">
							<motion.div
								className="p-6 bg-primary/10"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<h3 className="font-bold text-primary mb-2">
									Avant
								</h3>
								<p className="text-txt">
									"Je devais annuler mes rendez-vous et rester
									à la maison les deux premiers jours de mes
									règles."
								</p>
							</motion.div>
							<motion.div
								className="p-6"
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.3 }}
							>
								<h3 className="font-bold text-primary mb-2">
									Après
								</h3>
								<p className="text-txt">
									"Je continue toutes mes activités sans
									interruption, même les jours les plus
									difficiles."
								</p>
							</motion.div>
						</div>
						<div className="p-4 border-t border-ombre/10">
							<p className="text-txtLight text-right">
								— Nadia B., 34 ans
							</p>
						</div>
					</motion.div>

					{/* Avant/Après 3 */}
					<motion.div
						className="bg-white rounded-lg shadow-md overflow-hidden"
						variants={cardVariant}
						whileHover={hoverScaleShadow}
					>
						<div className="grid grid-cols-2">
							<motion.div
								className="p-6 bg-primary/10"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<h3 className="font-bold text-primary mb-2">
									Avant
								</h3>
								<p className="text-txt">
									"Les douleurs me réveillaient la nuit et je
									passais des journées entières avec une
									bouillotte."
								</p>
							</motion.div>
							<motion.div
								className="p-6"
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.3 }}
							>
								<h3 className="font-bold text-primary mb-2">
									Après
								</h3>
								<p className="text-txt">
									"Je dors paisiblement et je n'ai plus besoin
									de bouillotte, le patch fait tout le travail
									!"
								</p>
							</motion.div>
						</div>
						<div className="p-4 border-t border-ombre/10">
							<p className="text-txtLight text-right">
								— Bineta S., 30 ans
							</p>
						</div>
					</motion.div>

					{/* Avant/Après 4 */}
					<motion.div
						className="bg-white rounded-lg shadow-md overflow-hidden"
						variants={cardVariant}
						whileHover={hoverScaleShadow}
					>
						<div className="grid grid-cols-2">
							<motion.div
								className="p-6 bg-primary/10"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.1 }}
							>
								<h3 className="font-bold text-primary mb-2">
									Avant
								</h3>
								<p className="text-txt">
									"J'avais toujours des maux de tête et
									nausées à cause des anti-inflammatoires."
								</p>
							</motion.div>
							<motion.div
								className="p-6"
								initial={{ opacity: 0, x: 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.5, delay: 0.3 }}
							>
								<h3 className="font-bold text-primary mb-2">
									Après
								</h3>
								<p className="text-txt">
									"Avec les patchs, je n'ai plus d'effets
									secondaires et je me sens bien mieux pendant
									mon cycle."
								</p>
							</motion.div>
						</div>
						<div className="p-4 border-t border-ombre/10">
							<p className="text-txtLight text-right">
								— Mariama L., 26 ans
							</p>
						</div>
					</motion.div>
				</motion.div>
			</section>

			{/* Section 6: Section interactive - Laissez votre avis */}
			<section className="bg-primary/5 py-12 md:py-16 w-full">
				<div className="container mx-auto px-4">
					<motion.h2
						className="text-2xl md:text-3xl font-bold text-primary text-center mb-4"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						Partagez votre expérience
					</motion.h2>

					<motion.p
						className="text-txt text-center max-w-3xl mx-auto mb-8"
						variants={fadeInUp}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
					>
						Vous utilisez déjà les patchs Luna Soulage ? Votre
						témoignage pourrait aider d'autres femmes à franchir le
						pas. Partagez votre expérience en quelques mots.
					</motion.p>

					<motion.form
						ref={form}
						onSubmit={handleSubmit}
						className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.7 }}
						whileHover={{
							boxShadow: "0 10px 25px rgba(167, 68, 136, 0.1)",
						}}
					>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-txt font-medium mb-1"
							>
								Nom (optionnel pour publication)
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleChange}
								className="w-full px-3 py-2 border border-ombre/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="email"
								className="block text-txt font-medium mb-1"
							>
								Email (non publié)
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full px-3 py-2 border border-ombre/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
							/>
						</div>

						<div className="mb-4">
							<label className="block text-txt font-medium mb-1">
								Note sur 5 étoiles
							</label>
							<div className="flex">
								{[1, 2, 3, 4, 5].map((star) => (
									<motion.button
										key={star}
										type="button"
										onClick={() =>
											setFormData((prev) => ({
												...prev,
												rating: star,
											}))
										}
										className="text-2xl focus:outline-none"
										whileHover={{ scale: 1.2 }}
										whileTap={{ scale: 0.9 }}
									>
										{star <= formData.rating ? (
											<AiFillStar className="text-primary" />
										) : (
											<AiOutlineStar className="text-primary" />
										)}
									</motion.button>
								))}
							</div>
							<input
								type="hidden"
								name="rating"
								value={formData.rating}
							/>
						</div>

						<div className="mb-4">
							<label
								htmlFor="testimonial"
								className="block text-txt font-medium mb-1"
							>
								Votre témoignage
							</label>
							<textarea
								id="testimonial"
								name="testimonial"
								value={formData.testimonial}
								onChange={handleChange}
								required
								rows="4"
								className="w-full px-3 py-2 border border-ombre/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
								placeholder="Partagez votre expérience avec les patchs Luna Soulage..."
							></textarea>
						</div>

						<div className="mb-6">
							<label className="flex items-start">
								<input
									type="checkbox"
									name="consent"
									checked={formData.consent}
									onChange={handleChange}
									required
									className="mt-1 mr-2"
								/>
								<span className="text-sm text-txt">
									En soumettant ce formulaire, j'accepte que
									mon témoignage puisse être publié sur le
									site. Mon email reste confidentiel et ne
									sera jamais partagé.
								</span>
							</label>
						</div>

						<div className="text-center">
							<motion.button
								type="submit"
								className="bg-primary text-white font-bold rounded-lg py-2 px-6 hover:bg-primary/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
								whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
								whileTap={buttonTapAnimation}
								disabled={isSubmitting}
							>
								{isSubmitting ? (
									<div className="flex items-center justify-center">
										<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
										Envoi en cours...
									</div>
								) : (
									"Envoyer mon témoignage"
								)}
							</motion.button>
						</div>
					</motion.form>

					{/* Notification après envoi du formulaire */}
					<AnimatePresence>
						{showNotification && (
							<motion.div
								className={`fixed top-5 right-5 p-4 rounded-lg shadow-lg z-50 flex items-center gap-3 ${
									notificationType === "success"
										? "bg-green-50 border-l-4 border-green-500"
										: "bg-red-50 border-l-4 border-red-500"
								}`}
								initial={{ opacity: 0, x: 50 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: 50 }}
								transition={{ duration: 0.3 }}
							>
								{notificationType === "success" ? (
									<div className="bg-green-100 p-2 rounded-full">
										<FiCheck className="text-green-600 text-xl" />
									</div>
								) : (
									<div className="bg-red-100 p-2 rounded-full">
										<span className="text-red-600 text-xl font-bold">
											!
										</span>
									</div>
								)}
								<p
									className={`font-medium ${
										notificationType === "success"
											? "text-green-800"
											: "text-red-800"
									}`}
								>
									{notificationMessage}
								</p>
								<button
									onClick={() => setShowNotification(false)}
									className="ml-auto text-gray-400 hover:text-gray-600"
								>
									×
								</button>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</section>

			{/* Section 7: Questions fréquentes */}
			<section className="container mx-auto px-4 py-12 md:py-16">
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
						whileHover={hoverScaleShadow}
					>
						<h3 className="text-xl font-bold text-primary mb-3">
							Les témoignages sont-ils authentiques ?
						</h3>
						<p className="text-txt">
							Oui, tous les témoignages présentés sur notre site
							proviennent de véritables clientes qui ont acheté et
							utilisé nos patchs. Nous ne modifions jamais le
							contenu de leurs avis, bien que certains puissent
							être légèrement abrégés.
						</p>
					</motion.div>

					<motion.div
						className="bg-white rounded-lg p-6 shadow-md"
						variants={cardVariant}
						whileHover={hoverScaleShadow}
					>
						<h3 className="text-xl font-bold text-primary mb-3">
							Comment puis-je vérifier l'efficacité pour mon cas ?
						</h3>
						<p className="text-txt">
							Chaque femme est unique et ressent les douleurs
							menstruelles différemment. Nous vous recommandons
							d'essayer notre pack découverte pour évaluer
							l'efficacité des patchs dans votre cas particulier.
						</p>
					</motion.div>

					<motion.div
						className="bg-white rounded-lg p-6 shadow-md"
						variants={cardVariant}
						whileHover={hoverScaleShadow}
					>
						<h3 className="text-xl font-bold text-primary mb-3">
							Les résultats sont-ils garantis ?
						</h3>
						<p className="text-txt">
							Bien que la grande majorité de nos clientes
							rapportent un soulagement significatif, l'efficacité
							peut varier d'une personne à l'autre. C'est pourquoi
							nous offrons une garantie satisfaite ou remboursée
							de 30 jours.
						</p>
					</motion.div>
				</motion.div>
			</section>

			{/* Section 8: Appel à l'action */}
			<section className="bg-primary/5 py-12 md:py-16 w-full">
				<motion.div
					className="container mx-auto px-4 text-center"
					variants={fadeInUp}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					<motion.h2
						className="text-2xl md:text-3xl font-bold text-primary mb-4"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						Rejoignez des milliers de femmes libérées des douleurs
						menstruelles
					</motion.h2>

					<motion.p
						className="text-txt mb-8 max-w-3xl mx-auto"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						Ne laissez plus vos règles contrôler votre vie. Essayez
						les patchs Luna Soulage et redécouvrez le confort, même
						pendant vos jours les plus difficiles.
					</motion.p>

					<motion.div
						className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5 }}
					>
						<BtnCustom
							to={whatsApp}
							text="Commander maintenant"
							className=""
						/>

						<BtnCustom
							to="/presentation"
							text="En savoir plus sur nos patchs"
							className=""
						/>
					</motion.div>
				</motion.div>
			</section>
		</div>
	);
};

export default TestimonialPage;
