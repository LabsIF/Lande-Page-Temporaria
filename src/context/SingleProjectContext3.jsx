import { useState, createContext } from 'react';
import { singleProjectData3 as singleProjectDataJson } from '../data/singleProjectData3';

const SingleProjectContext3 = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectDataJson,
	);

	return (
		<SingleProjectContext3.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext3.Provider>
	);
};

export default SingleProjectContext3;
