import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio2 = () => {
	const { aboutMe2 } = useContext(AboutMeContext);

	return (
			<div className="">
			{aboutMe2.map((title) => (
					<h2
						className="mb-4 text-4xl text-ternary-dark dark:text-ternary-light text-center"
						key={title.id}
					>
						{title.title}
					</h2>
				))}
				{aboutMe2.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
	);
};

export default AboutMeBio2;
