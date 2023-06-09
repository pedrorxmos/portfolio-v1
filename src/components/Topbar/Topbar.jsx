import './Topbar.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import { use100vh } from 'react-div-100vh';

function Topbar() {
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

	const changeTheme = () => {
		document.querySelector(':root').className === 'dark'
			? (document.querySelector(':root').className = 'light')
			: (document.querySelector(':root').className = 'dark');

		console.log(document.querySelector(':root').classList);
	};

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
								<a href="#locale" className="nav--item__locale cursor-target" alt="change language">
									en
								</a>
							</li>
							<li className="nav--item cursor-target">
								<Button size="medium" rightIcon="sun" nothing action={changeTheme} />
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
