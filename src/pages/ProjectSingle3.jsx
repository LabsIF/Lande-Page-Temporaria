import ProjectGallery from '../components/projects/ProjectGallery3';
import ProjectHeader from '../components/projects/ProjectHeader3';
import ProjectInfo from '../components/projects/ProjectInfo3';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects3';
import { SingleProjectProvider } from '../context/SingleProjectContext3';
import { motion } from 'framer-motion';

const ProjectSingle3 = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.6,
				delay: 0.15,
			}}
			className="container mx-auto mt-5 sm:mt-10"
		>
			<SingleProjectProvider>
				<ProjectHeader />
				<ProjectGallery />
				<ProjectInfo />
				<ProjectRelatedProjects />
			</SingleProjectProvider>
		</motion.div>
	);
};

export default ProjectSingle3;
