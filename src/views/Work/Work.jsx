import { collection } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

import SvgArrowDown from '../../icons/ArrowDown';
import Footer from '../../components/Footer/Footer';
import './Work.scss';

function Work() {
	const workData = collection(useFirestore(), 'projects');
	const { data } = useFirestoreCollectionData(workData);
	// console.log(data);

	// document.querySelector('.dropdown')?.addEventListener('mouseenter', () => {
	// 	document.querySelector('.selected-work').style.backgroundImage = `url('/img/${'portfolio'}.webp')`;
	// });

	// document.querySelector('.dropdown')?.addEventListener('mouseleave', () => {
	// 	document.querySelector('.selected-work').style.backgroundImage = `url('/img/${'blank'}.webp')`;
	// });

	return (
		<>
			<main className="work">
				<div className="work__container">
					<div className="work__img">
						<div style={{ backgroundImage: `url('/img/${'about-me'}.webp')` }} className="selected-work"></div>
					</div>
					<div className="work__projects">
						<div className="work__header">
							<div className="work__title">
								<h1>Featured Work</h1>
								<small>click on the project to see more details</small>
							</div>
							<div className="work__filter">
								<span>Filter:</span>
								<button className="cursor-target dropdown">
									All
									<SvgArrowDown size="x-small" title="dropdown icon" />
								</button>
							</div>
						</div>
						<div className="work__list">the projects list</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Work;
