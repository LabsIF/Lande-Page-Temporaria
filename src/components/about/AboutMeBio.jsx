import profileImage from '../../images/profile.jpeg';
import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';

const AboutMeBio = () => {
	const { aboutMe } = useContext(AboutMeContext);

	return (
		<div className="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div className="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src={profileImage} className="rounded-lg w-96" alt="" />
			</div>

			<div className="font-general-regular w-full sm:w-3/4 text-left">
			<div className="font-general-bold text-left">
			{aboutMe.map((title) => (
					<h2
						className="mb-4 text-4xl font-extrabold text-ternary-dark dark:text-ternary-light"
						key={title.id}
					>
						{title.title}
					</h2>
				))}
			</div>
				{aboutMe.map((bio) => (
					<p
						className="mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify"
						key={bio.id}
					>
						{bio.bio}
					</p>
				))}
			</div>
		</div>
	);
};

export default AboutMeBio;
