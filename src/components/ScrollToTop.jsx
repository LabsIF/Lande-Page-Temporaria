// NOTA: Este scroll to top é o comportamento padrão de reação ao scroll to top ao visitar uma nova rota.
// Para o comportamento de rolar para cima em um evento de clique, criei um gancho personalizado com o nome de useScrollToTop na pasta de ganchos que os rolos usam para o topo da página quando rolam para baixo na página.

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
};

export default ScrollToTop;
