import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Root from "./pages/layout/_layout";
import PageLoader from "./components/PageLoader"; // À créer

// Lazy loading des pages non-critiques
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProcedurePage = lazy(() => import("./pages/ProcedurePage"));
const TestimonialPage = lazy(() => import("./pages/TestimonialPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const RequirementsPage = lazy(() => import("./pages/RequirementsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

export const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Root />}>
				<Route
					index
					element={
						<Suspense fallback={<PageLoader />}>
							<HomePage />
						</Suspense>
					}
				/>
				<Route
					path="/presentation"
					element={
						<Suspense fallback={<PageLoader />}>
							<AboutPage />
						</Suspense>
					}
				/>
				<Route
					path="/instructions"
					element={
						<Suspense fallback={<PageLoader />}>
							<ProcedurePage />
						</Suspense>
					}
				/>
				<Route
					path="/temoignages"
					element={
						<Suspense fallback={<PageLoader />}>
							<TestimonialPage />
						</Suspense>
					}
				/>
				<Route
					path="/faq"
					element={
						<Suspense fallback={<PageLoader />}>
							<FaqPage />
						</Suspense>
					}
				/>
				<Route
					path="/contact"
					element={
						<Suspense fallback={<PageLoader />}>
							<ContactPage />
						</Suspense>
					}
				/>
				<Route
					path="/mentions-legales"
					element={
						<Suspense fallback={<PageLoader />}>
							<TermsPage />
						</Suspense>
					}
				/>
				<Route
					path="/politique-confidentialite"
					element={
						<Suspense fallback={<PageLoader />}>
							<PrivacyPage />
						</Suspense>
					}
				/>
				<Route
					path="/conditions-utilisation"
					element={
						<Suspense fallback={<PageLoader />}>
							<RequirementsPage />
						</Suspense>
					}
				/>
				<Route
					path="*"
					element={
						<Suspense fallback={<PageLoader />}>
							<NotFoundPage />
						</Suspense>
					}
				/>
			</Route>
		</Routes>
	);
};
