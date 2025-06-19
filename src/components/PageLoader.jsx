// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const PageLoader = () => {
	return (
		<motion.div
			className="flex items-center justify-center py-16"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.2 }}
		>
			<div className="relative w-12 h-12">
				<motion.div
					className="absolute w-full h-full border-4 border-primary/30 rounded-full"
					animate={{ rotate: 360 }}
					transition={{
						repeat: Infinity,
						duration: 1.5,
						ease: "linear",
					}}
				/>
				<motion.div
					className="absolute w-full h-full border-4 border-transparent border-t-primary rounded-full"
					animate={{ rotate: 360 }}
					transition={{
						repeat: Infinity,
						duration: 0.8,
						ease: "linear",
					}}
				/>
			</div>
		</motion.div>
	);
};

export default PageLoader;
