import { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { Router } from "./Router";
import Loader from "./components/Loader";

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Temps où le chargement a commencé
		const startTime = Date.now();

		// Durée minimale d'affichage du loader (en ms)
		const minDisplayTime = 1500; // 1.5 secondes

		// Temps maximum d'attente (en ms)
		const maxWaitTime = 3000; // 3 secondes

		// Simuler le chargement des ressources
		const resourceLoadingPromise = new Promise((resolve) => {
			// Remplacez ce setTimeout par votre vrai code de chargement des ressources
			// (préchargement d'images, appels API initiaux, etc.)
			setTimeout(resolve, 500);
		});

		// Attendre que les ressources soient chargées ET que le temps minimum soit écoulé
		Promise.all([
			resourceLoadingPromise,
			new Promise((resolve) => {
				setTimeout(() => {
					const elapsedTime = Date.now() - startTime;
					const remainingTime = Math.max(0, minDisplayTime - elapsedTime);
					setTimeout(resolve, remainingTime);
				}, 0);
			}),
		]).then(() => {
			setLoading(false);
		});

		// Timeout de secours si quelque chose bloque
		const fallbackTimer = setTimeout(() => {
			setLoading(false);
		}, maxWaitTime);

		return () => clearTimeout(fallbackTimer);
	}, []);

	return (
		<AnimatePresence mode="wait">
			{loading ? (
				<motion.div
					key="loader"
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Loader />
				</motion.div>
			) : (
				<motion.div
					key="content"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					<Router />
				</motion.div>
			)}
		</AnimatePresence>
	);
}

export default App;
