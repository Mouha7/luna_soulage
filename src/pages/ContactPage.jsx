import { useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { BtnCustom } from "../components/Btn";
import BannerContact from "../assets/images/banner_contact.jpg";
import { PiWhatsappLogoFill } from "react-icons/pi";
import { MdOutlineShoppingCart, MdOutlineQuestionAnswer, MdOutlineSupportAgent } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import emailjs from '@emailjs/browser';
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
    floatAnimation,
    buttonTapAnimation,
    listItemVariant
} from "../constants/animationVariants";

const ContactPage = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        consent: false,
    });

    // État pour gérer l'affichage du message
    const [showMessage, setShowMessage] = useState(false);
    const [messageType, setMessageType] = useState(''); // 'success' ou 'error'
    const [messageText, setMessageText] = useState('');

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
        
        // Configuration EmailJS
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
        
        // Préparer les données du template
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            phone_number: formData.phone,
            subject: formData.subject,
            message: formData.message,
        };
        
        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email envoyé avec succès!', response.status, response.text);
                setMessageType('success');
                setMessageText('Votre message a bien été envoyé!');
                setShowMessage(true);
                // Réinitialiser le formulaire
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                    consent: false,
                });
            })
            .catch((error) => {
                console.error('Erreur lors de l\'envoi de l\'email:', error);
                setMessageType('error');
                setMessageText('Une erreur est survenue. Veuillez réessayer.');
                setShowMessage(true);
            })
            .finally(() => {
                setIsSubmitting(false);
            });

            // Fermer le message après 5 secondes
            setTimeout(() => {
                setShowMessage(false);
            }, 5000);
    };
    
    return (
        <div className="flex flex-col w-full justify-center items-center">
            {/* Bannière principale */}
            <motion.div
                className="lg-fully-style fully-style bg-cover bg-center bg-no-repeat md:h-[570px] sm:h-[450px] h-[400px] shadow-lg"
                style={{ backgroundImage: `url(${BannerContact})` }}
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
                        Contactez-nous / Commandez
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-center">
                        Nous sommes à votre écoute pour toutes vos questions ou
                        commandes
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
                <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
                    Comment pouvons-nous vous aider ?
                </h2>
                <p className="text-txt text-center max-w-3xl mx-auto mb-12 text-lg">
                    Que vous souhaitiez commander nos patchs Luna Soulage, poser
                    une question sur nos produits ou partager votre expérience,
                    nous sommes là pour vous. Choisissez ci-dessous l'option qui
                    vous convient le mieux pour nous contacter.
                </p>
            </motion.section>

            {/* Section 2: Méthodes de contact principales */}
            <section className="container mx-auto px-4 mb-12 md:mb-16">
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {/* Option 1: Commander via WhatsApp */}
                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col h-full"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <motion.div 
                            className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full text-primary text-3xl mx-auto mb-4"
                            animate={floatAnimation}
                        >
                            <MdOutlineShoppingCart />
                        </motion.div>
                        <h3 className="text-xl font-bold text-primary mb-2">
                            Commander rapidement
                        </h3>
                        <p className="text-txt mb-6 flex-grow">
                            La façon la plus simple et rapide de commander vos
                            patchs Luna Soulage. Notre équipe vous répondra dans
                            les 30 minutes pendant nos heures d'ouverture.
                        </p>
                        <div className="mt-auto">
                            <BtnCustom
                                to="https://wa.me/221770000000?text=Bonjour,%20je%20souhaite%20commander%20des%20patchs%20Luna%20Soulage"
                                className="w-full flex items-center gap-2 justify-center"
                            >
                                <PiWhatsappLogoFill size={20} />
                                Commander via WhatsApp
                            </BtnCustom>
                            <p className="text-txtLight text-sm mt-3">
                                Disponible 7j/7 de 8h à 20h
                            </p>
                        </div>
                    </motion.div>

                    {/* Option 2: Questions et informations */}
                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col h-full"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <motion.div 
                            className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full text-primary text-3xl mx-auto mb-4"
                            animate={floatAnimation}
                        >
                            <MdOutlineQuestionAnswer />
                        </motion.div>
                        <h3 className="text-xl font-bold text-primary mb-2">
                            Questions sur nos produits
                        </h3>
                        <p className="text-txt mb-6 flex-grow">
                            Vous avez des questions sur nos patchs ou besoin
                            d'informations supplémentaires avant de commander ?
                            Notre équipe se fera un plaisir de vous aider.
                        </p>
                        <div className="mt-auto">
                            <BtnCustom
                                to="https://wa.me/221770000000?text=Bonjour,%20j'ai%20une%20question%20concernant%20les%20patchs%20Luna%20Soulage"
                                className="w-full flex items-center gap-2 justify-center"
                            >
                                <PiWhatsappLogoFill size={20} />
                                Poser une question
                            </BtnCustom>
                            <p className="text-txtLight text-sm mt-3">
                                Réponse garantie sous 2 heures
                            </p>
                        </div>
                    </motion.div>

                    {/* Option 3: Support et suivi de commande */}
                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md text-center flex flex-col h-full"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <motion.div 
                            className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-full text-primary text-3xl mx-auto mb-4"
                            animate={floatAnimation}
                        >
                            <MdOutlineSupportAgent />
                        </motion.div>
                        <h3 className="text-xl font-bold text-primary mb-2">
                            Support et suivi
                        </h3>
                        <p className="text-txt mb-6 flex-grow">
                            Besoin d'aide concernant une commande déjà passée ou
                            un problème avec nos produits ? Contactez notre
                            service client.
                        </p>
                        <div className="mt-auto">
                            <BtnCustom
                                to="https://wa.me/221770000000?text=Bonjour,%20j'ai%20besoin%20d'aide%20concernant%20ma%20commande%20Luna%20Soulage"
                                className="w-full flex items-center gap-2 justify-center"
                            >
                                <PiWhatsappLogoFill size={20} />
                                Contacter le support
                            </BtnCustom>
                            <p className="text-txtLight text-sm mt-3">
                                Support personnalisé et prioritaire
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Section 3: Formulaire de contact */}
            <section className="bg-primary/5 py-12 md:py-16 w-full">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-primary text-center mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Envoyez-nous un message
                    </motion.h2>
                    <motion.p 
                        className="text-txt text-center max-w-3xl mx-auto mb-8"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        Si vous préférez nous écrire directement, utilisez le
                        formulaire ci-dessous. Nous vous répondrons dans les
                        meilleurs délais.
                    </motion.p>

                    <motion.form
                        ref={form}
                        onSubmit={handleSubmit}
                        className="bg-white rounded-lg p-6 shadow-md max-w-2xl mx-auto relative overflow-hidden"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        whileHover={{ boxShadow: "0 10px 25px rgba(167, 68, 136, 0.1)" }}
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 mt-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-txt font-medium mb-1"
                                >
                                    Nom et prénom*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-3 py-2 border border-ombre/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-txt font-medium mb-1"
                                >
                                    Email*
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
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="phone"
                                className="block text-txt font-medium mb-1"
                            >
                                Téléphone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-ombre/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="subject"
                                className="block text-txt font-medium mb-1"
                            >
                                Objet du message*
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border border-ombre/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                            >
                                <option value="">Sélectionnez un objet</option>
                                <option value="question">
                                    Question sur les produits
                                </option>
                                <option value="devis">Demande de devis</option>
                                <option value="commande">
                                    Suivi de commande
                                </option>
                                <option value="probleme">
                                    Problème technique
                                </option>
                                <option value="partenariat">Partenariat</option>
                                <option value="autre">Autre</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="message"
                                className="block text-txt font-medium mb-1"
                            >
                                Votre message*
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-3 py-2 border border-ombre/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
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
                                    J'accepte que mes données soient traitées
                                    pour répondre à ma demande. Pour en savoir
                                    plus sur la gestion de vos données et vos
                                    droits, consultez notre politique de
                                    confidentialité.*
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
                                    "Envoyer le message"
                                )}
                            </motion.button>
                        </div>
                    </motion.form>

                    {/* Message de confirmation */}
                    {showMessage && (
                        <AnimatePresence>
                            <motion.div 
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className={`message-notification ${messageType === 'success' ? 'success' : 'error'}`}
                            >
                                <div className="message-content">
                                    {messageType === 'success' ? (
                                        <FiCheck className="message-icon" />
                                    ) : (
                                        <span className="message-icon">!</span>
                                    )}
                                    <p>{messageText}</p>
                                    <button 
                                        className="close-btn" 
                                        onClick={() => setShowMessage(false)}
                                    >
                                        ×
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    )}
                </div>
            </section>

            {/* Section 4: Processus de commande */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <motion.h2 
                    className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Comment commander ?
                </motion.h2>

                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {/* Étape 1 */}
                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md text-center"
                        variants={cardVariant}
                        whileHover={hoverScale}
                    >
                        <motion.div 
                            className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4"
                            whileHover={{ rotate: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            1
                        </motion.div>
                        <h3 className="text-lg font-bold text-primary mb-2">
                            Choisir votre pack
                        </h3>
                        <p className="text-txt">
                            Sélectionnez le pack qui correspond le mieux à vos
                            besoins : pack découverte (5 patchs) ou pack mensuel
                            (12 patchs).
                        </p>
                    </motion.div>

                    {/* Étape 2 */}
                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md text-center"
                        variants={cardVariant}
                        whileHover={hoverScale}
                    >
                        <motion.div 
                            className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4"
                            whileHover={{ rotate: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            2
                        </motion.div>
                        <h3 className="text-lg font-bold text-primary mb-2">
                            Contacter notre équipe
                        </h3>
                        <p className="text-txt">
                            Cliquez sur le bouton "Commander via WhatsApp" et
                            envoyez-nous un message avec les détails de votre
                            commande.
                        </p>
                    </motion.div>

                    {/* Étape 3 */}
                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md text-center"
                        variants={cardVariant}
                        whileHover={hoverScale}
                    >
                        <motion.div 
                            className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4"
                            whileHover={{ rotate: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            3
                        </motion.div>
                        <h3 className="text-lg font-bold text-primary mb-2">
                            Confirmer votre commande
                        </h3>
                        <p className="text-txt">
                            Notre conseillère vous guidera pour finaliser votre
                            commande et confirmer votre adresse de livraison.
                        </p>
                    </motion.div>

                    {/* Étape 4 */}
                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md text-center"
                        variants={cardVariant}
                        whileHover={hoverScale}
                    >
                        <motion.div 
                            className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4"
                            whileHover={{ rotate: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            4
                        </motion.div>
                        <h3 className="text-lg font-bold text-primary mb-2">
                            Paiement sécurisé
                        </h3>
                        <p className="text-txt">
                            Choisissez votre méthode de paiement préférée
                            (Orange Money, Wave, Free Money ou paiement à la
                            livraison pour Dakar).
                        </p>
                    </motion.div>

                    {/* Étape 5 */}
                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md text-center"
                        variants={cardVariant}
                        whileHover={hoverScale}
                    >
                        <motion.div 
                            className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4"
                            whileHover={{ rotate: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            5
                        </motion.div>
                        <h3 className="text-lg font-bold text-primary mb-2">
                            Livraison rapide
                        </h3>
                        <p className="text-txt">
                            Recevez vos patchs Luna Soulage directement chez
                            vous, avec une livraison gratuite à Dakar.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Section 5: Coordonnées directes */}
            <section className="bg-primary/5 py-12 md:py-16 w-full">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Nos coordonnées
                    </motion.h2>

                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ boxShadow: "0 10px 25px rgba(167, 68, 136, 0.1)" }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div 
                                className="space-y-4"
                                variants={fadeInLeft}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div 
                                    className="flex items-center gap-3"
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaPhoneAlt className="text-primary text-xl flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-txt">
                                            Téléphone
                                        </p>
                                        <p className="text-txtLight">
                                            +221 77 000 00 00
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div 
                                    className="flex items-center gap-3"
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <PiWhatsappLogoFill className="text-primary text-xl flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-txt">
                                            WhatsApp
                                        </p>
                                        <p className="text-txtLight">
                                            +221 77 000 00 00
                                        </p>
                                    </div>
                                </motion.div>
                                <motion.div 
                                    className="flex items-center gap-3"
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaEnvelope className="text-primary text-xl flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-txt">
                                            Email
                                        </p>
                                        <p className="text-txtLight">
                                            contact@lunasoulage.com
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                            <motion.div 
                                className="space-y-4"
                                variants={fadeInRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <motion.div 
                                    className="flex items-center gap-3"
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <FaClock className="text-primary text-xl flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-txt">
                                            Horaires d'ouverture
                                        </p>
                                        <p className="text-txtLight">
                                            Du lundi au samedi de 9h à 19h
                                        </p>
                                    </div>
                                </motion.div>
                                <BtnCustom
                                    to="https://wa.me/221770000000?text=Bonjour,%20je%20souhaite%20commander%20des%20patchs%20Luna%20Soulage"
                                    className="w-full mt-4 flex items-center gap-2 justify-center"
                                >
                                    <PiWhatsappLogoFill size={20} />
                                    Nous contacter maintenant
                                </BtnCustom>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Section 6: FAQ rapide */}
            <section className="container mx-auto px-4 py-12 md:py-16">
                <motion.h2 
                    className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Questions fréquentes sur les commandes
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
                        whileHover={hoverScaleShadow}
                    >
                        <h3 className="text-xl font-bold text-primary mb-3">
                            Quel est le délai de livraison ?
                        </h3>
                        <p className="text-txt">
                            À Dakar et environs : 24 à 48 heures
                            <br />
                            Autres régions du Sénégal : 3 à 5 jours ouvrables
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h3 className="text-xl font-bold text-primary mb-3">
                            Quels modes de paiement acceptez-vous ?
                        </h3>
                        <p className="text-txt">
                            Nous acceptons Orange Money, Wave, Free Money et le
                            paiement à la livraison pour Dakar.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h3 className="text-xl font-bold text-primary mb-3">
                            La livraison est-elle gratuite ?
                        </h3>
                        <p className="text-txt">
                            Oui, la livraison est gratuite à Dakar. Pour les
                            autres régions, des frais s'appliquent selon la
                            distance.
                        </p>
                    </motion.div>

                    <motion.div 
                        className="bg-white rounded-lg p-6 shadow-md"
                        variants={cardVariant}
                        whileHover={hoverScaleShadow}
                    >
                        <h3 className="text-xl font-bold text-primary mb-3">
                            Puis-je suivre ma commande ?
                        </h3>
                        <p className="text-txt">
                            Oui, vous recevrez un message WhatsApp avec les
                            informations de suivi dès que votre commande sera
                            expédiée.
                        </p>
                    </motion.div>
                </motion.div>
            </section>

            {/* Section 7: Témoignage client */}
            <section className="bg-primary/5 py-12 md:py-16 w-full">
                <div className="container mx-auto px-4">
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-primary text-center mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Ce que nos clientes disent de notre service
                    </motion.h2>

                    <motion.div 
                        className="bg-white rounded-lg p-8 shadow-md max-w-3xl mx-auto relative"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        whileHover={{ boxShadow: "0 10px 25px rgba(167, 68, 136, 0.1)" }}
                    >
                        <motion.div 
                            className="text-primary text-7xl absolute -top-4 left-6 opacity-30"
                            initial={{ scale: 0.5, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 0.3 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            "
                        </motion.div>
                        <p className="text-txt text-lg italic mb-6 text-center">
                            Le service client de Luna Soulage est exceptionnel !
                            J'ai commandé un vendredi soir et j'ai reçu mes
                            patchs le samedi matin. L'équipe a été très réactive
                            et m'a guidée tout au long du processus de commande.
                            Je recommande vivement !
                        </p>
                        <p className="text-txtLight font-medium text-center">
                            – Fatou D., Dakar
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 8: Appel à l'action final */}
            <motion.section 
                className="container mx-auto px-4 py-12 md:py-16 text-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                    Prête à soulager vos douleurs menstruelles ?
                </h2>
                <p className="text-txt mb-8 max-w-3xl mx-auto">
                    Ne laissez plus les douleurs menstruelles contrôler votre
                    vie. Commandez dès aujourd'hui vos patchs Luna Soulage et
                    redécouvrez le confort pendant vos règles.
                </p>
                <motion.div 
                    className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <BtnCustom
                        to="https://wa.me/221770000000?text=Bonjour,%20je%20souhaite%20commander%20des%20patchs%20Luna%20Soulage"
                        text={
                            <span className="flex items-center gap-2 justify-center">
                                <PiWhatsappLogoFill size={20} />
                                Commander maintenant via WhatsApp
                            </span>
                        }
                        className=""
                    />

                    <BtnCustom
                        to="/presentation"
                        text="En savoir plus sur nos produits"
                        className=""
                    />
                </motion.div>
            </motion.section>

            {/* Section 9: Politique de confidentialité */}
            <motion.section 
                className="container mx-auto px-4 py-8 border-t border-ombre/10 mt-8"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                <p className="text-txtLight text-sm text-center max-w-4xl mx-auto">
                    En nous contactant, vous acceptez notre politique de
                    confidentialité. Vos données personnelles sont uniquement
                    utilisées pour traiter votre demande et ne seront jamais
                    partagées avec des tiers sans votre consentement explicite.
                    <a
                        href="/politique-confidentialite"
                        className="text-primary hover:underline ml-1"
                    >
                        Voir notre politique de confidentialité complète
                    </a>
                </p>
            </motion.section>

            {/* Badges de réassurance */}
            <motion.section 
                className="container mx-auto px-4 py-8 border-t border-ombre/10"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.div 
                    className="flex flex-wrap justify-center gap-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible" 
                    viewport={{ once: true }}
                >
                    <motion.div 
                        className="bg-primary/10 text-primary text-sm font-bold py-2 px-4 rounded-full flex items-center gap-2"
                        variants={listItemVariant}
                        whileHover={{ scale: 1.05, x: 0 }}
                    >
                        <FiCheck /> Réponse rapide
                    </motion.div>
                    <motion.div 
                        className="bg-primary/10 text-primary text-sm font-bold py-2 px-4 rounded-full flex items-center gap-2"
                        variants={listItemVariant}
                        whileHover={{ scale: 1.05, x: 0 }}
                    >
                        <FiCheck /> Service client 7j/7
                    </motion.div>
                    <motion.div 
                        className="bg-primary/10 text-primary text-sm font-bold py-2 px-4 rounded-full flex items-center gap-2"
                        variants={listItemVariant}
                        whileHover={{ scale: 1.05, x: 0 }}
                    >
                        <FiCheck /> Paiement sécurisé
                    </motion.div>
                    <motion.div 
                        className="bg-primary/10 text-primary text-sm font-bold py-2 px-4 rounded-full flex items-center gap-2"
                        variants={listItemVariant}
                        whileHover={{ scale: 1.05, x: 0 }}
                    >
                        <FiCheck /> Livraison rapide
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    );
};

export default ContactPage;
