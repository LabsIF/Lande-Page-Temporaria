import ProjectGallery from '../components/projects/ProjectGallery2';
import ProjectHeader from '../components/projects/ProjectHeader2';
import ProjectInfo from '../components/projects/ProjectInfo2';
import ProjectRelatedProjects from '../components/projects/ProjectRelatedProjects2';
import { SingleProjectProvider } from '../context/SingleProjectContext2';
import { motion } from 'framer-motion';

const ProjectSingle2 = () => {
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

export default ProjectSingle2;
