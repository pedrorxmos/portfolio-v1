import './Home.scss';
import Button from '../../components/Button/Button';
import { use100vh } from 'react-div-100vh';
import { LocaleContext } from '../../providers/LocaleContext';
import { useContext } from 'react';

function Home() {
	if (document.querySelector('main')?.classList.contains('home')) document.querySelector('body').style.overflow = 'hidden';
	else document.querySelector('body').style.overflow = 'scroll';

	const { locale } = useContext(LocaleContext);
	console.log(locale);

	return (
		<>
			<main className="home" style={{ height: use100vh(), overflow: 'hidden' }}>
				<div className="home__name">
					<big className="home__prefix">{locale.locale['home-prefix']}</big>
					<h1>Pedro Ramos</h1>
				</div>

				<h2 className="home__title h4">{locale.locale['home-title']}</h2>

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
