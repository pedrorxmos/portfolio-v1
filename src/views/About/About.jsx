import { useContext } from 'react';
import Icon from '../../components/Icon/Icon';
import { useCollection } from '../../hooks/firestore';
import './About.scss';
import { LocaleContext } from '../../providers/LocaleContext';
import { use100vh } from 'react-div-100vh';

function About() {
	const { locale } = useContext(LocaleContext);
	const data = useCollection(locale.locale['firebase-about']);

	return (
		<>
			<main className="about main" style={{ '--use-100vh': `${use100vh()}px` }}>
				<h1>{locale.locale['about-title']}</h1>
				<p className="about-subtitle">{locale.locale['about-subtitle']}</p>
				<div className="about__items">
					{data?.map((e) => (
						<div key={e.title} className="about__card">
							<Icon title={e.icon} name={e.icon} size="x-big" />
							<div className="card__info">
								<h3>{e.title}</h3>
								<p>{e.value}</p>
							</div>
						</div>
					))}
				</div>
			</main>
			{/* <Footer /> */}
		</>
	);
}

export default About;
