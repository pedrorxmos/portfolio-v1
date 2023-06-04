import SvgGithub from '../../icons/Github';
import SvgLinkedin from '../../icons/Linkedin';
import SvgCodepen from '../../icons/Codepen';
import SvgTwitter from '../../icons/Twitter';
import SvgMail from '../../icons/Mail';

import './Home.scss';

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
						<SvgGithub size="x-normal" title="github" />
					</a>
					<a href="https://www.linkedin.com/in/pedroramosguardiola/" className="cursor-target" target="_blank" rel="noreferrer">
						<SvgLinkedin size="x-normal" title="linkedin" />
					</a>
					<a href="https://codepen.io/pedrorxmos" className="cursor-target" target="_blank" rel="noreferrer">
						<SvgCodepen size="x-normal" title="codepen" />
					</a>
					<a href="https://twitter.com/" className="cursor-target" target="_blank" rel="noreferrer">
						<SvgTwitter size="x-normal" title="twitter" />
					</a>
					<a href="mailTo:pedrorxmosdev@gmail.com" className="cursor-target" target="_blank" rel="noreferrer">
						<SvgMail size="x-normal" title="mail" />
					</a>
				</div>
			</main>
		</>
	);
}

export default Home;
