// Import images
import Image1 from '../images/educaTech-project.jpg';
import Image2 from '../images/class1.jpg';
import Image3 from '../images/educaTech-project2.jpg';
import Image5 from '../images/fabrica-project.jpg';
// Import icons
import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
} from 'react-icons/fi';

export const singleProjectData2 = {
	ProjectHeader: {
		title: 'Projeto EducaTech',
		publishDate: 'Maio 06, 2023',
		tags: 'Tecnologia / Educacional',
	},
	ProjectImages: [
		{
			id: 1,
			title: 'Projeto EducaTech',
			img: Image1,
		},
		{
			id: 2,
			title: 'Projeto EducaTech',
			img: Image2,
		},
		{
			id: 3,
			title: 'Projeto EducaTech',
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
			'O Educatech visa a inserção da tecnologia dentro das escolas, a partir de cursos, minicursos, palestras e direcionamento junto às escolas, pois sabemos que a escola é um ambiente preparatório para futuros profissionais que demandarão de conhecimento na área, a partir disso queremos ser essa fonte de conhecimento para as escolas.',
		Technologies: [
			{
				title: 'Existe idade limite?',
				techs: [
					'Jamais! A educação é levada a todos que fazem parte do ambiente escolar!',
				],
			},
		],
		ProjectDetailsHeading: 'Tecnologia nas escolas e instituições de ensino',
		ProjectDetails: [
			{
				id: 1,
				details:
					'O projeto EducaTech é uma iniciativa da LabsIF que visa levar a tecnologia para dentro das escolas e instituições de ensino, capacitando alunos e professores para o uso de ferramentas digitais em sala de aula e preparando-os para o mercado de trabalho cada vez mais digital.',
			},
			{
				id: 2,
				details:
					'O EducaTech oferece uma série de palestras e workshops para alunos e educadores, abrangendo temas como redes sociais, cibersegurança, marketing digital, empreendedorismo, inteligência artificial, design visual, entre outros. Essas palestras são ministradas por especialistas em suas áreas de atuação e buscam oferecer aos participantes conhecimentos atualizados e relevantes.',
			},
			{
				id: 3,
				details:
					'Além das palestras, o EducaTech também oferece cursos de capacitação e treinamento em tecnologia para educadores, visando aprimorar suas habilidades digitais e torná-los mais aptos a utilizar as ferramentas digitais em sala de aula. Esses cursos são desenvolvidos por profissionais com experiência em tecnologia educacional e buscam oferecer aos educadores uma abordagem prática e aplicada do uso de tecnologias em sala de aula.',
			},
			{
				id: 4,
				details:
					'Enfim, o projeto EducaTech é uma das iniciativas da LabsIF que busca desenvolver habilidades e competências em tecnologia, oferecendo aos participantes um ambiente de aprendizado prático e inovador. Com o EducaTech, a LabsIF reforça seu compromisso com a formação de profissionais altamente qualificados e preparados para os desafios do mercado de trabalho atual.',
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
