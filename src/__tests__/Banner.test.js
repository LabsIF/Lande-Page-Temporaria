import { render, screen } from '@testing-library/react';
import AppBanner from '../components/shared/AppBanner';
import userEvent from '@testing-library/user-event';

// Isso é executado antes de cada teste. Isso é bom em vez de renderizar o componente em cada caso de teste
const setup = () => render(<AppBanner />);

// Obter evento do usuário
function setupUserEvent(jsx) {
	return {
		user: userEvent.setup(),
		...render(jsx),
	};
}

test('it shows the title in the banner', () => {
	setup();
	// Esperamos que o título 'Ola, somos LabsIF' esteja no componente do banner
	expect(screen.getByText(/Ola, somos LabsIF/i)).toBeInTheDocument();
});

test('can download cv when clicked on download cv button', async () => {
	const { user } = setupUserEvent(<AppBanner />);

	const downloadCV = screen.getByText(/Download CV/i);

	expect(downloadCV).toBeInTheDocument();

	const downloadCVButton = downloadCV.parentElement.parentElement;

	expect(downloadCVButton).toBeInTheDocument();

	await user.click(downloadCVButton);

	// const downloadLink = {
	// 	click: await user.click(downloadCVButton),
	// };
	// jest.spyOn(document, 'createElement').mockImplementation(
	// 	() => downloadLink
	// );

	// expect(downloadLink.download).toEqual('Stoman-Resume.pdf');
	// expect(downloadLink.href).toEqual('/files/Stoman-Resume.pdf');
	// expect(downloadLink.click).toHaveBeenCalledTimes(1);
});
