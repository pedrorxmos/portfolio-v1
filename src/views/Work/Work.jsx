import { collection } from 'firebase/firestore';
import { useFirestore, useFirestoreCollectionData } from 'reactfire';

import SvgChevronDown from '../../icons/ChevronDown';
import Footer from '../../components/Footer/Footer';
import './Work.scss';
import ProjectButton from '../../components/ProjectButton/ProjectButton';

function Work() {
	const workData = collection(useFirestore(), 'projects');
	const { data } = useFirestoreCollectionData(workData);
	console.log(data);

	return (
		<>
			<main className="work main">
				<div className="work__container">
					<div className="work__img">
						<div style={{ backgroundImage: `url('/img/about-me.webp')` }} className="selected-work"></div>
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
									<SvgChevronDown size="x-small" title="dropdown icon" />
								</button>
							</div>
						</div>
						<div className="work__list">
							{data
								?.sort((a, b) => a.order - b.order)
								.map((e) => (
									<ProjectButton key={e.NO_ID_FIELD} id={e.NO_ID_FIELD} title={e.title} img={e.img} tags={e.tags} />
								))}
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Work;
