// Import images
import Image1 from '../images/visao360-project.jpg';
import Image2 from '../images/visao360-project3.jpg';
import Image3 from '../images/people.jpg';
import Image5 from '../images/fabrica-project.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
} from 'react-icons/fi';

export const singleProjectData3 = {
	ProjectHeader: {
		title: 'Visão 360',
		publishDate: 'Maio 06, 2023',
		tags: 'Tecnológia / conhecimento',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Visão 360',
			img: Image1,
		},
		{
			id: 2,
			title: 'Visão 360',
			img: Image2,
		},
		{
			id: 3,
			title: 'inovação',
			img: Image3,
		},
	],
	ProjectInfo: {
		ClientHeading: 'Parcerias?',
		CompanyInfo: [
			{
				id: 1,
				title: 'Sobre parcerias  ',
				details: 'Basta entrar em contato via redes sociais ou email contato@labsif.com.br, esperamos por você!!!',
			},
		],
		ObjectivesHeading: 'Objetivo',
		ObjectivesDetails:
			'Busca levar conhecimento e inovação para diferentes públicos.',
		Technologies: [
			{
				title: 'Existe idade limite?',
				techs: [
					'Jamais! Sempre desenvolevemos formas de atuar com todos os publicos, para que não haja a exclusão de ninguém!',
				],
			},
		],
		ProjectDetailsHeading: 'Conhecimento e inovação para diferentes públicos',
		ProjectDetails: [
			{
				id: 1,
				details:
					'O projeto Visão 360 é mais uma iniciativa da LabsIF que busca levar conhecimento e inovação para diferentes públicos. Por meio desse projeto, a LabsIF organiza eventos com palestras, minicursos, oficinas e bate-papos que abrangem temas relevantes e atuais para a sociedade.',
			},
			{
				id: 2,
				details:
					'O diferencial do projeto Visão 360 está em sua abordagem, que busca atingir públicos distintos e oferecer conteúdos relevantes para cada um deles. Essa abordagem leva em conta as particularidades de cada público, seus interesses e necessidades específicas, garantindo que todos os participantes possam aproveitar ao máximo o evento.',
			},
			{
				id: 3,
				details:
					'Os eventos promovidos pelo projeto Visão 360 são realizados em parceria com instituições públicas e privadas, buscando sempre ampliar o alcance e impacto do projeto. A LabsIF conta com uma equipe de profissionais experientes em suas áreas de atuação, que buscam oferecer palestras e oficinas inovadoras e práticas para os participantes.',
			},
			{
				id: 4,
				details:
					'Com o projeto Visão 360, a LabsIF reforça seu compromisso com a disseminação de conhecimento e inovação, contribuindo para a formação de profissionais cada vez mais capacitados e preparados para os desafios do mercado de trabalho.',
			},
			{
				id: 5,
				details:
					'Opa, quase ia me esquecendo, neste mês de maio nós estaremos na 51ª Exposição de Itapetinga, levando nossas palestras e nosso estande, apresentando nossas soluções para a comunidade além de estar ouvindo problemáticas que podem receber nosso apoio para a resolução!',
			},
		],
		SocialSharingHeading: 'Compartilhar',
		SocialSharing: [
			{
				id: 2,
				name: 'Instagram',
				icon: <FiInstagram />,
				url: 'https://instagram.com/labs_if',
			},
			{
				id: 3,
				name: 'Facebook',
				icon: <FiFacebook />,
				url: 'https://www.facebook.com/profile.php?id=100092393506647',
			},
			{
				id: 4,
				name: 'LinkedIn',
				icon: <FiLinkedin />,
				url: 'https://www.linkedin.com/company/labsif/?viewAsMember=true',
			},
		],
	},
	RelatedProject: {
		title: 'Projetos relacionados',
		Projects: [
			{
				id: 1,
				title: 'Fabrica de Software',
				img: Image5,
			},
		],
	},
};
