import './Home.scss';
import Icon from '../../components/Icon/Icon';

function Home() {
	return (
		<>
			<main className="home">
				<big className="home__prefix">Hello, I&apos;m</big>
				<h1 className="home__name">
					<span>Pedro</span>
					<span>Ramos</span>
				</h1>
				<h2 className="home__title h4">
					Front-End Web Developer <br /> Multimedia Engineer
				</h2>

				<div className="home__social">
					<a href="https://github.com/pedrorxmos" className="cursor-target" target="_blank" rel="noreferrer">
						<Icon title="github" name="github" size="x-normal" />
					</a>
					<a href="https://www.linkedin.com/in/pedroramosguardiola/" className="cursor-target" target="_blank" rel="noreferrer">
						<Icon title="linkedin" name="linkedin" size="x-normal" />
					</a>
					<a href="https://codepen.io/pedrorxmos" className="cursor-target" target="_blank" rel="noreferrer">
						<Icon title="codepen" name="codepen" size="x-normal" />
					</a>
					<a href="https://twitter.com/" className="cursor-target" target="_blank" rel="noreferrer">
						<Icon title="twitter" name="twitter" size="x-normal" />
					</a>
					<a href="mailTo:pedrorxmosdev@gmail.com" className="cursor-target" target="_blank" rel="noreferrer">
						<Icon title="mail" name="mail" size="x-normal" />
					</a>
				</div>
			</main>
		</>
	);
}

export default Home;
