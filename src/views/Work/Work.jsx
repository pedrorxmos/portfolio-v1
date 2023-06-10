// import Footer from '../../components/Footer/Footer';
import './Work.scss';
import ProjectButton from '../../components/ProjectButton/ProjectButton';
import { useCollection } from '../../hooks/firestore';
import Icon from '../../components/Icon/Icon';
import { use100vh } from 'react-div-100vh';
import { useContext } from 'react';
import { LocaleContext } from '../../providers/LocaleContext';

function Work() {
	const { locale } = useContext(LocaleContext);
	const data = useCollection(locale.locale['firebase-projects']);

	return (
		<>
			<main className="work main" style={{ '--use-100vh': `${use100vh()}px` }}>
				<div className="work__container">
					<div className="work__img">
						{/* <img src="/img/blank.webp" className="selected-work" alt="selected project image" /> */}
						{data?.map((e) => (
							<img className="selected-work" id={e.NO_ID_FIELD} key={e.NO_ID_FIELD} src={`/img/${e.img}.webp`} alt={`${e.title} project image`} />
						))}
					</div>
					<div className="work__projects">
						<div className="work__header">
							<div className="work__title">
								<h1>{locale.locale['work-title']}</h1>
								<small>{locale.locale['work-subtitle']}</small>
							</div>
							<div className="work__filter">
								<span>{locale.locale['filter']}:</span>
								<button className="cursor-target dropdown">
									{locale.locale['filter-title']}
									<Icon title="dropdown icon" name="chevron-down" size="x-small" />
								</button>
							</div>
						</div>
						<div className="work__list">
							{data
								?.sort((a, b) => a.order - b.order)
								.map((e) => (
									<ProjectButton key={e.NO_ID_FIELD} id={e.NO_ID_FIELD} title={e.title} tags={e.tags} />
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
