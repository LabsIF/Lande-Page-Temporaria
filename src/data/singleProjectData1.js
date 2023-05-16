// Import images
import Image1 from '../images/fabrica-project.jpg';
import Image2 from '../images/programers1.jpg';
import Image3 from '../images/programers.jpg';
import Image5 from '../images/educaTech-project.jpg';
import Image6 from '../images/visao360-project.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
} from 'react-icons/fi';

export const singleProjectData1 = {
	ProjectHeader: {
		title: 'Fabrica de Software',
		publishDate: 'Maio 06, 2023',
		tags: 'Desenvolvimento de software / Aprendizado',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Fabrica de Software',
			img: Image1,
		},
		{
			id: 1,
			title: 'Fabrica de Software',
			img: Image2,
		},
		{
			id: 1,
			title: 'Fabrica de Software',
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
			'O objetivo da Fábrica de Software é capacitar estudantes de ensino superior em tecnologia, preparando-os para o mercado de trabalho e contribuindo para a evolução da sociedade através da criação de soluções inovadoras.',
		Technologies: [
			{
				title: 'Ferramentas & Tecnologias',
				techs: [
					'Aqui usamos a tecnologia que melhor resolve o seu problema!'+
					'Se Java, JavaScript, Kotlin, Python ou qualquer outra te benefeciará, ela que utilizaremos!',
				],
			},
		],
		ProjectDetailsHeading: 'Ambiente de desenvolvimento de soluções inovadoras',
		ProjectDetails: [
			{
				id: 1,
				details:
					'Com parcerias com instituições públicas e privadas, a LabsIF utiliza a Fábrica de Software como um meio de desenvolvimento de soluções inovadoras e tecnológicas. Por meio dessas parcerias, a LabsIF trabalha em projetos de grande impacto para a sociedade, como soluções para melhorar a eficiência de processos em empresas, para aprimorar o atendimento ao público em serviços públicos, para melhorar a segurança pública, entre outras.',
			},
			{
				id: 2,
				details:
					'A utilização da Fábrica de Software como um ambiente de desenvolvimento de soluções inovadoras é uma forma eficiente de colocar em prática os conhecimentos e habilidades adquiridos pelos participantes do projeto, ao mesmo tempo em que se busca atender às demandas do mercado e da sociedade. Através das parcerias, a LabsIF tem a oportunidade de trabalhar em projetos de grande relevância e impacto, contribuindo para o desenvolvimento da tecnologia e da sociedade como um todo.',
			},
			{
				id: 3,
				details:
					'Dessa forma, a Fábrica de Software não apenas oferece uma oportunidade valiosa para os participantes do projeto, mas também se apresenta como uma importante ferramenta para o desenvolvimento tecnológico do país, ao fomentar a inovação e o empreendedorismo na área de tecnologia.',
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
				title: 'Projeto EducaTech',
				img: Image5,
			},
			{
				id: 2,
				title: 'Visão 360',
				img: Image6,
			},
		],
	},
};
