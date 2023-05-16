import { useState, createContext } from 'react';
import { singleProjectData1 as singleProjectDataJson } from '../data/singleProjectData1';

const SingleProjectContext = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectDataJson,
	);

	return (
		<SingleProjectContext.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext.Provider>
	);
};

export default SingleProjectContext;
