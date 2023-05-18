import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import developerLight from '../../images/priceCode1.png';
import developerDark from '../../images/priceCode1.png';
import { motion } from 'framer-motion';
import HireMeModal from '../HireMeModal';
import { useState } from 'react';
import { FiMapPin } from 'react-icons/fi';

const AppBanner = () => {
	const [activeTheme] = useThemeSwitcher();
	const [showModal, setShowModal] = useState(false);

	function showHireMeModal() {
		if (!showModal) {
			document
				.getElementsByTagName('html')[0]
				.classList.add('overflow-y-hidden');
			setShowModal(true);
		} else {
			document
				.getElementsByTagName('html')[0]
				.classList.remove('overflow-y-hidden');
			setShowModal(false);
		}
	}

	return (
		
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
		>
			<div className="w-full md:w-1/3 text-left">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.1,
					}}
					className="font-general-semibold mt-10 text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
				>
					Olá, Somos o Labs_IF
				</motion.h1>
				<motion.h5
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.2,
					}}
					className="font-general-xs mt-10 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
				>
					Com nossas parcerias, levamos soluções inovadoras para toda a comunidade, resolvendo problemas reais e criando um impacto positivo na vida das pessoas. Se você quer aprender, contribuir e fazer a diferença.
					Nos encontre dentro da exposição!
				</motion.h5>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: 'easeInOut',
						duration: 0.9,
						delay: 0.3,
					}}
					className="flex justify-center sm:block"
				>
					<a			
								href='https://goo.gl/maps/vpQFt9KR6NnjANmVA?coh=178572&entry=tt'
								className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"aria-label="Localização">
									<FiMapPin className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiMapPin>
									<span className="text-sm sm:text-lg font-general-medium duration-100">
										Localização
									</span>

					</a>
				
								

				</motion.div>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -180 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
				className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
			>
				<img id='imgHome'
					src={
						activeTheme === 'dark' ? developerLight : developerDark
					}
					alt="Developer"
				/>
			</motion.div>
				<div>
					{showModal ? (
						<HireMeModal
							onClose={showHireMeModal}
							onRequest={showHireMeModal}
						/>
					) : null}
					{showModal ? showHireMeModal : null}
				</div>

		</motion.section>
	);
};

export default AppBanner;
