import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<div className="flex flex-col h-screen bg-background text-txt font-roboto overflow-auto">
			<Header />
			<main className="flex-1">
				<Outlet />
			</main>
			<Footer />
			<ScrollToTopButton />
		</div>
	);
};

export default Root;
