// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Logo from "../assets/images/logo.png";

const Loader = () => {
	return (
		<motion.div
			className="fixed inset-0 bg-white flex items-center justify-center z-50"
			initial={{ opacity: 1 }}
			exit={{
				opacity: 0,
				transition: { duration: 0.5, ease: "easeInOut" },
			}}
		>
			<motion.div
				className="flex flex-col items-center"
				initial={{ opacity: 0, y: 20 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { duration: 0.5 },
				}}
			>
				<motion.img
					src={Logo}
					alt="Luna Soulage"
					className="w-32 h-auto mb-6"
					initial={{ scale: 0.8 }}
					animate={{
						scale: [0.8, 1.1, 1],
						transition: {
							duration: 1.2,
							times: [0, 0.6, 1],
							ease: "easeInOut",
						},
					}}
				/>
				<motion.div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
					<motion.div
						className="h-full bg-primary rounded-full"
						initial={{ width: 0 }}
						animate={{
							width: "100%",
							transition: { duration: 1.5, ease: "easeInOut" },
						}}
					/>
				</motion.div>
				<motion.p
					className="text-primary mt-3 text-sm font-medium"
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 0.3, duration: 0.5 },
					}}
				>
					Chargement de votre solution bien-être...
				</motion.p>
			</motion.div>
		</motion.div>
	);
};

export default Loader;
