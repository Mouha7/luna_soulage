// Variantes d'animation de base pour les transitions et entrées
export const fadeInUp = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export const fadeInLeft = {
	hidden: { opacity: 0, x: -30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

export const fadeInRight = {
	hidden: { opacity: 0, x: 30 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.6,
			ease: "easeOut",
		},
	},
};

// Animation pour afficher les éléments en séquence (effet cascade)
export const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};

// Animation pour les cartes qui apparaissent l'une après l'autre
export const cardVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
};

// Animation pour les lignes de tableau
export const tableRowVariant = {
	hidden: { opacity: 0, x: -10 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
			ease: "easeOut",
		},
	},
};

// Animation pour les éléments de liste
export const listItemVariant = {
	hidden: { opacity: 0, x: -10 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.3,
			ease: "easeOut",
		},
	},
};

// Animation pour le hover des éléments
export const hoverScale = {
	scale: 1.03,
	transition: {
		duration: 0.2,
		ease: "easeInOut",
	},
};

// Animation pour le hover des cartes avec ombre
export const hoverScaleShadow = {
	scale: 1.03,
	boxShadow: "0 10px 20px rgba(167, 68, 136, 0.1)",
	transition: {
		duration: 0.2,
		ease: "easeInOut",
	},
};

// Animation pour les bannières - version modifiée avec propriétés complètes
export const bannerAnimation = {
	hidden: { opacity: 0, scale: 1.05 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 1.2,
			ease: "easeOut",
		},
	},
};

// Animation pour le contenu des bannières - version améliorée
export const bannerContentAnimation = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.3,
			duration: 0.8,
			ease: "easeOut",
		},
	},
};

// Animation pour les éléments qui doivent attirer l'attention
export const pulseAnimation = {
	scale: [1, 1.05, 1],
	opacity: [0.9, 1, 0.9],
	transition: {
		repeat: Infinity,
		duration: 5,
		ease: "easeInOut",
	},
};

// Animation pour les petits déplacements verticaux (effet flottant)
export const floatAnimation = {
	y: [0, -3, 0],
	transition: {
		repeat: Infinity,
		duration: 2,
		ease: "easeInOut",
	},
};

// Animation pour les indicateurs de direction (flèches)
export const arrowAnimation = {
	x: [0, 3, 0],
	transition: {
		repeat: Infinity,
		duration: 1.5,
		ease: "easeInOut",
	},
};

// Animation pour la rotation des éléments
export const rotateAnimation = {
	rotate: 360,
	transition: {
		duration: 1,
	},
};

// Animation pour les éléments d'alerte (attention)
export const alertAnimation = {
	rotate: [0, -10, 10, -10, 0],
	transition: {
		duration: 0.5,
	},
};

// Animation pour les interactions avec les boutons
export const buttonTapAnimation = {
	scale: 0.98,
};

// Animation variants spécifiques à cette page
export const iconContainerVariant = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: "easeOut",
			delay: 0.2,
		},
	},
};

export const compassVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.8,
		},
	},
};

export const searchVariant = {
	hidden: { opacity: 0, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 20,
			delay: 0.6,
		},
	},
};

export const titleVariant = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: 0.3,
		},
	},
};

export const dividerVariant = {
	hidden: { width: 0 },
	visible: {
		width: "4rem",
		transition: {
			duration: 0.5,
			delay: 0.4,
		},
	},
};

export const badgeVariant = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
		},
	},
};

// Animation variant spécifique pour le changement de tab
export const tabContentVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeOut",
		},
	},
	exit: {
		opacity: 0,
		y: -20,
		transition: {
			duration: 0.3,
		},
	},
};

// Animation spécifique pour les liens du footer
export const footerLinkVariant = {
	hover: {
		x: 5,
		color: "#A74488",
		transition: { duration: 0.2 },
	},
};

// Animation pour les logos de paiement
export const paymentLogoVariant = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: { duration: 0.3 },
	},
	hover: {
		y: -3,
		boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
		transition: { duration: 0.2 },
	},
};

// Animation pour les icônes sociales
export const socialIconVariant = {
	hover: {
		scale: 1.2,
		color: "#A74488",
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 10,
		},
	},
};
