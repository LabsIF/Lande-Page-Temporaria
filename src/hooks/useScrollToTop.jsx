// NOTA: Esta rolagem para cima é a rolagem de trabalho real para quando o usuário clica na seta do círculo que aparece quando o uso rola para baixo.
// O outro componente `ScrollToTop` na pasta de componentes é para o comportamento padrão de reação rolar para o topo na visita de rota.

import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const useScrollToTop = () => {
	const [showScroll, setShowScroll] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', scrollToTop);
		return function cleanup() {
			window.removeEventListener('scroll', scrollToTop);
		};
	});

	const scrollToTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	const backToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', scrollToTop);

	return (
		<>
			<FiChevronUp
				className="scrollToTop"
				onClick={backToTop}
				style={{
					height: 45,
					width: 45,
					borderRadius: 50,
					right: 50,
					bottom: 50,
					display: showScroll ? 'flex' : 'none',
					padding: 5,
				}}
			/>
		</>
	);
};

export default useScrollToTop;
