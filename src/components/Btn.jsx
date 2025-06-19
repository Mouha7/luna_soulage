import { NavLink } from "react-router-dom";

export function BtnCustom({
	text,
	to,
	className,
	disabled,
	node,
	children,
}) {
	// Vérifier si l'URL est externe (commence par http ou https)
	const isExternal = to && (to.startsWith("http") || to.startsWith("https"));

	// Pour les liens externes, utiliser un élément 'a' standard
	if (isExternal) {
		return (
			<a
				className={`w-fit bg-primary text-white font-bold rounded-[8px] py-2 px-6 hover:bg-primary/80 transition-colors ${className} ${
					disabled ? "opacity-50 cursor-not-allowed" : ""
				}`}
				href={to}
				target="_blank"
				rel="noopener noreferrer"
			>
				{children || node || text}
			</a>
		);
	}

	// Pour les liens internes, utiliser NavLink
	return (
		<NavLink
			className={`w-fit bg-primary text-white font-bold rounded-[8px] py-2 px-6 hover:bg-primary/80 transition-colors ${className} ${
				disabled ? "opacity-50 cursor-not-allowed" : ""
			}`}
			to={to || "#"}
			style={{ pointerEvents: disabled ? "none" : "auto" }}
		>
			{children || node || text}
		</NavLink>
	);
}

export function BtnLightCustom({
	text,
	to,
	className,
	disabled,
	children,
}) {
	// Vérifier si l'URL est externe
	const isExternal = to && (to.startsWith("http") || to.startsWith("https"));

	// Pour les liens externes
	if (isExternal) {
		return (
			<a
				className={`w-fit bg-bio text-primary rounded-[8px] font-bold py-2 px-6 hover:bg-bio/80 transition-colors ${className} ${
					disabled ? "opacity-50 cursor-not-allowed" : ""
				}`}
				href={to}
				target="_blank"
				rel="noopener noreferrer"
			>
				{children || text}
			</a>
		);
	}

	// Pour les liens internes
	return (
		<NavLink
			className={`w-fit bg-bio text-primary rounded-[8px] font-bold py-2 px-6 hover:bg-bio/80 transition-colors ${className} ${
				disabled ? "opacity-50 cursor-not-allowed" : ""
			}`}
			to={to || "#"}
			style={{ pointerEvents: disabled ? "none" : "auto" }}
		>
			{children || text}
		</NavLink>
	);
}
