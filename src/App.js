import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const Sobre = lazy(() => import('./pages/AboutMe'));
const Contato = lazy(() => import('./pages/Contato.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projetos'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));
const ProjectSingle2 = lazy(() => import('./pages/ProjectSingle2.jsx'));
const ProjectSingle3 = lazy(() => import('./pages/ProjectSingle3.jsx'));


function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projetos" element={<Projects />} />
							<Route
								path="projetos/fabrica-de-software"
								element={<ProjectSingle />}
							/>
							<Route
								path="projetos/projeto-educaTech"
								element={<ProjectSingle2 />}
							/>
							<Route
								path="projetos/visao-360"
								element={<ProjectSingle3 />}
							/>

							<Route path="sobre" element={<Sobre />} />
							<Route path="contato" element={<Contato />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
