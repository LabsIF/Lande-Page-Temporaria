import { motion } from 'framer-motion';
import ContactDetails from '../components/contact/ContactDetails';

const Contato = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="flex justify-center  mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-10"
		>
			<ContactDetails />
		</motion.div>
	);
};

export default Contato;
