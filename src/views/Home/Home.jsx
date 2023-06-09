import './Home.scss';
import Button from '../../components/Button/Button';
import { use100vh } from 'react-div-100vh';

function Home() {
	if (document.querySelector('main')?.classList.contains('home')) document.querySelector('body').style.overflow = 'hidden';
	else document.querySelector('body').style.overflow = 'scroll';

	return (
		<>
			<main className="home" style={{ height: use100vh(), overflow: 'hidden' }}>
				<div className="home__name">
					<big className="home__prefix">Hello, I&apos;m</big>
					<h1>Pedro Ramos</h1>
				</div>

				<h2 className="home__title h4">Front-End Web Developer & Multimedia Engineer</h2>

				<div className="home__social">
					<Button type="link" rightIcon="github" justIcon size="x-big" color="primary" action="https://github.com/pedrorxmos" />
					<Button type="link" rightIcon="linkedin" justIcon size="x-big" color="primary" action="https://www.linkedin.com/in/pedroramosguardiola/" />
					<Button type="link" rightIcon="codepen" justIcon size="x-big" color="primary" action="https://codepen.io/pedrorxmos" />
					<Button type="link" rightIcon="twitter" justIcon size="x-big" color="primary" action="https://twitter.com/pedrorxmos" />
					<Button type="link" rightIcon="mail" justIcon size="x-big" color="primary" action="mailTo:pedrorxmosdev@gmail.com" />
				</div>
			</main>
		</>
	);
}

export default Home;
