import './Topbar.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { use100vh } from 'react-div-100vh';
import { useContext, useEffect, useState } from 'react';
import { useGetValue, usePostValue } from '../../hooks/localStorage';
import { LocaleContext, localeMap } from '../../providers/LocaleContext';
import en from '../../locale/en.json';
import es from '../../locale/es.json';

function Topbar() {
	const [theme, setTheme] = useState(useGetValue('theme', 'light'));
	const openMenu = () => {
		document.querySelector('.nav').classList.add('nav-open');
		document.querySelector('body').style.overflowY = 'hidden';
	};

	const closeMenu = () => {
		document.querySelector('.nav').classList.remove('nav-open');
		setTimeout(() => {
			if (!document.querySelector('main')?.classList.contains('home')) document.querySelector('body').style.overflowY = 'auto';
		}, 10);
	};

	const changeTheme = (e) => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	};

	const { locale, setLocale } = useContext(LocaleContext);

	const setLoc = (value) => {
		document.querySelector('.locale__items').classList.remove('open');
		document.querySelector('.locale-overlay').classList.remove('open');
		setLocale(localeMap.find((e) => e.localeName === value));
		usePostValue('locale', value);
	};

	const toggleLoc = () => {
		document.querySelector('.locale-overlay').classList.toggle('open');
		document.querySelector('.locale__items').classList.toggle('open');
	};

	const closeLoc = () => {
		document.querySelector('.locale-overlay').classList.remove('open');
		document.querySelector('.locale__items').classList.remove('open');
	};

	useEffect(() => {
		document.querySelector(':root').className = theme;
		usePostValue('theme', theme);
		document.querySelectorAll('.theme-button .svg').forEach((svg) => {
			svg.classList.add('animation');
			setTimeout(() => {
				svg.classList.remove('animation');
			}, 500);
		});
	}, [theme]);

	return (
		<>
			<header className="topbar" style={{ '--use-100vh': `${use100vh()}px` }}>
				<span className="logo">
					<Link to="/" className="cursor-target">
						Pedro Ramos
					</Link>
				</span>
				<nav className="nav">
					<div className="nav--items nav__actions">
						<ul className="nav--list ">
							<li className="nav--item">
								<button href="#locale" className="nav--item__locale cursor-target" alt="change language" onClick={toggleLoc}>
									{locale.localeName}
								</button>
								<div className="locale-overlay" onClick={closeLoc}></div>
								<div className="locale__items">
									{localeMap.map((l) => (
										<button href="#locale" className="nav--item__locale cursor-target" alt="change language" onClick={() => setLoc(l.localeName)}>
											{l.localeTitle}
										</button>
									))}
								</div>
							</li>
							<li className="nav--item">
								<button className={`theme-button ${theme} cursor-target`} onClick={changeTheme}>
									<Icon title="switch to dark theme" name="sun" size={'small'} className={'sun'} />
									<Icon title="switch to light theme" name="moon" size={'small'} className={'moon'} />
								</button>
							</li>
						</ul>
						<Button value="menu" size="medium" rightIcon="menu" nothing action={openMenu} />
					</div>
					<div className="nav--items  nav__menu">
						<div className="overlay" onClick={closeMenu}></div>
						<ul className="nav--list">
							<li className="nav--item">
								<Link to="/" className="cursor-target" onClick={closeMenu}>
									home
								</Link>
							</li>
							<li className="nav--item">
								<Link to="/about" className="cursor-target" onClick={closeMenu}>
									about
								</Link>
							</li>
							<li className="nav--item">
								<Link to="/work" className="cursor-target" onClick={closeMenu}>
									work
								</Link>
							</li>
							<li className="nav--item">
								<Link to="/contact" className="cursor-target" onClick={closeMenu}>
									contact
								</Link>
							</li>
							<li className="nav--item">
								<Button type="link" value="my resume" size="small" color="secondary" action="#mycv" />
							</li>
						</ul>
						<Button size="big" rightIcon="x" nothing action={closeMenu} />
					</div>
				</nav>
			</header>
		</>
	);
}

export default Topbar;
