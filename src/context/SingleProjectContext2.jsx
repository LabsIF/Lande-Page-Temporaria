import { useState, createContext } from 'react';
import { singleProjectData2 as singleProjectDataJson } from '../data/singleProjectData2';

const SingleProjectContext2 = createContext();

export const SingleProjectProvider = ({ children }) => {
	const [singleProjectData, setSingleProjectData] = useState(
		singleProjectDataJson,
	);

	return (
		<SingleProjectContext2.Provider
			value={{ singleProjectData, setSingleProjectData }}
		>
			{children}
		</SingleProjectContext2.Provider>
	);
};

export default SingleProjectContext2;
