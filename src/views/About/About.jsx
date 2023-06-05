import Footer from '../../components/Footer/Footer';
import { useCollection } from '../../hooks/getFirestore';
import SvgHeart from '../../icons/Heart';
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
							<SvgHeart size="x-big" title={e.icon} />
							<div className="card__info">
								<h3>{e.title}</h3>
								<p>{e.value}</p>
							</div>
						</div>
					))}
				</div>
			</main>
			<Footer />
		</>
	);
}

export default About;
