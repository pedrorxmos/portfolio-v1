import Footer from '../../components/Footer/Footer';
import './Work.scss';
import ProjectButton from '../../components/ProjectButton/ProjectButton';
import { useCollection } from '../../hooks/getFirestore';
import Icon from '../../components/Icon/Icon';
import { use100vh } from 'react-div-100vh';

function Work() {
	const data = useCollection('projects');

	return (
		<>
			<main className="work main" style={{ height: use100vh() }}>
				<div className="work__container">
					<div className="work__img">
						<div className="selected-work"></div>
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
									<Icon title="dropdown icon" name="chevron-down" size="x-small" />
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
			{/* <Footer /> */}
		</>
	);
}

export default Work;
