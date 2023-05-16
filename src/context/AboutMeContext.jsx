import { useState, createContext } from 'react';
import { aboutMeData } from '../data/aboutMeData';
import { aboutMeData2 } from '../data/aboutMeData2';
import { aboutMeData3 } from '../data/aboutMeData3';
import { clientsHeading as clientsPageHeading } from '../data/clientsData';
import { clientsText as clientsPageText } from '../data/clientsData';
import { clientsData as clientsDataJson } from '../data/clientsData';

const AboutMeContext = createContext();

export const AboutMeProvider = ({ children }) => {
	const [aboutMe, setAboutMe] = useState(aboutMeData);
	const [aboutMe2, setAboutMe2] = useState(aboutMeData2);
	const [aboutMe3, setAboutMe3] = useState(aboutMeData3);

	const clientsHeading = clientsPageHeading;
	const clientsText = clientsPageText;

	const [clientsData, setClientsData] = useState(clientsDataJson);

	return (
		<AboutMeContext.Provider
			value={{
				aboutMe,
				setAboutMe,
				aboutMe2,
				setAboutMe2,
				aboutMe3,
				setAboutMe3,
				clientsHeading,
				clientsText,
				clientsData,
				setClientsData,
			}}
		>
			{children}
		</AboutMeContext.Provider>
	);
};

export default AboutMeContext;
