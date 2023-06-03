import SvgSun from '../../icons/Sun';
import SvgCross from '../../icons/Cross';
import SvgMenu from '../../icons/Menu';
import './Topbar.scss';
import Button from '../Button/Button';

function Topbar() {
	const toggleMenu = () => {
		console.log('toggle menu');
		document.querySelector('.nav').classList.toggle('nav-open');
	};

	return (
		<>
			<header className="topbar">
				<span className="logo">Pedro Ramos</span>
				<nav className="nav">
					<ul className="nav--items nav__actions">
						<li className="nav--item">
							<a href="#locale" className="nav--item__locale cursor-target" alt="change language">
								en
							</a>
						</li>
						<li className="nav--item cursor-target">
							<SvgSun title="Light Mode" size="small" />
						</li>
						<li className="nav--item">
							<button className="nav__action cursor-target" onClick={toggleMenu} title="open menu">
								menu
								<SvgMenu title="Open menu" size="small" />
							</button>
						</li>
					</ul>
					<ul className="nav--items nav__menu">
						<li className="nav--item cursor-target">home</li>
						<li className="nav--item cursor-target">about</li>
						<li className="nav--item cursor-target">work</li>
						<li className="nav--item cursor-target">contact</li>
						<li className="nav--item">
							<Button type="link" value="my resume" size="small" color="secondary" action="#mycv" />
						</li>
						<li className="nav--item">
							<button className="nav__action cursor-target" onClick={toggleMenu}>
								<SvgCross title="Close menu" size="small" />
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Topbar;
