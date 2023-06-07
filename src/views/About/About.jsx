import Icon from '../../components/Icon/Icon';
import { useCollection } from '../../hooks/getFirestore';
import './About.scss';

function About() {
	const data = useCollection('about');

	return (
		<>
			<main className="about main">
				<h1>About me</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error mollitia eos itaque quis maxime inventore.</p>
				<div className="about__items">
					{data?.map((e) => (
						<div key={e.title} className="about__card">
							<Icon title={e.icon} name={'heart'} size="x-big" />
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
