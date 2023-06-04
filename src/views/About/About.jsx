import Footer from '../../components/Footer/Footer';
import SvgHeart from '../../icons/Heart';
import './About.scss';

function About() {
	return (
		<>
			<main className="about main">
				<h1>About me</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi error mollitia eos itaque quis maxime inventore.</p>
				<div className="about__items">
					<div className="about__card">
						<SvgHeart size="x-big" title="about-section" />
						<div className="card__info">
							<h3>Lorem ipsum</h3>
							<p>HTML, CSS/Scss, JavaScript, TypeScript, SQL, PHP, Python, Java, ISML</p>
						</div>
					</div>
					<div className="about__card">
						<SvgHeart size="x-big" title="about-section" />
						<div className="card__info">
							<h3>Lorem ipsum</h3>
							<p>HTML, CSS/Scss, JavaScript, TypeScript, SQL, PHP, Python, Java, ISML</p>
						</div>
					</div>
					<div className="about__card">
						<SvgHeart size="x-big" title="about-section" />
						<div className="card__info">
							<h3>Lorem ipsum</h3>
							<p>HTML, CSS/Scss, JavaScript</p>
						</div>
					</div>
					<div className="about__card">
						<SvgHeart size="x-big" title="about-section" />
						<div className="card__info">
							<h3>Lorem ipsum</h3>
							<p>HTML, CSS/Scss</p>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default About;
