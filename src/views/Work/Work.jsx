// import Footer from '../../components/Footer/Footer';
import './Work.scss';
import ProjectButton from '../../components/ProjectButton/ProjectButton';
import { useCollection } from '../../hooks/firestore';
import Icon from '../../components/Icon/Icon';
import { use100vh } from 'react-div-100vh';
import { useContext, useEffect, useState } from 'react';
import { LocaleContext } from '../../providers/LocaleContext';

function Work() {
	const { locale } = useContext(LocaleContext);
	const data = useCollection(locale.locale['firebase-projects']);
	const [categories, setCategories] = useState([]);
	const [work, setWork] = useState([]);
	const [filter, setFilter] = useState(locale.locale['filter-title']);

	const changeCategory = (value) => {
		console.log(value);
		setWork(value !== locale.locale['filter-title'] ? data?.filter((a) => a.category === value) : data);
		setFilter(value);
		closeFilter();
	};

	const openFilter = () => {
		document.querySelector('.filter__list').classList.toggle('open');
		document.querySelector('.dropdown').classList.toggle('open');
		document.querySelector('.filter-overlay').classList.toggle('open');
	};
	const closeFilter = () => {
		document.querySelector('.filter__list').classList.remove('open');
		document.querySelector('.dropdown').classList.remove('open');
		document.querySelector('.filter-overlay').classList.remove('open');
	};

	useEffect(() => {
		setFilter(locale.locale['filter-title']);
	}, [locale]);

	useEffect(() => {
		setWork(data);
	}, [data]);

	useEffect(() => {
		const cat = [];
		data?.forEach((e) => {
			!cat.includes(e.category) ? cat.push(e.category) : '';
		});
		setCategories(cat);
	}, [categories, data]);

	return (
		<>
			<main className="work main" style={{ '--use-100vh': `${use100vh()}px` }}>
				<div className="work__container">
					<div className="work__img">
						{/* <img src="/img/blank.webp" className="selected-work" alt="selected project image" /> */}
						{data?.map((e) => (
							<img
								className="selected-work"
								id={e.NO_ID_FIELD}
								key={e.NO_ID_FIELD}
								src={e.img}
								alt={`${e.title} project image`}
							/>
						))}
					</div>
					<div className="work__projects">
						<div className="work__header">
							<div className="work__title">
								<h1>{locale.locale['work-title']}</h1>
								<small>{locale.locale['work-subtitle']}</small>
							</div>
							<div className="work__filter">
								<span onClick={openFilter}>{locale.locale['filter']}:</span>
								<button className="cursor-target dropdown" onClick={openFilter}>
									{filter}
									<Icon title="dropdown icon" name="chevron-down" size="x-small" />
								</button>
								<div className="filter-overlay" onClick={closeFilter}></div>
								<div className="filter__list">
									{filter !== locale.locale['filter-title'] && (
										<button
											className="filter-button cursor-target"
											onClick={() => changeCategory(locale.locale['filter-title'])}
										>
											{locale.locale['filter-reset']}
										</button>
									)}

									{categories.map((category) => {
										const btn =
											filter === category ? (
												''
											) : (
												<button className="filter-button cursor-target" onClick={() => changeCategory(category)}>
													{category}
												</button>
											);
										return btn;
									})}
								</div>
							</div>
						</div>
						<div className="work__list">
							{work
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
