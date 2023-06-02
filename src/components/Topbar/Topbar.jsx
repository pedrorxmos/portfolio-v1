import SvgSun from '../../icons/Sun';
import SvgCross from '../../icons/Cross';
import SvgMenu from '../../icons/Menu';
import './Topbar.scss';

function Topbar() {
	const nav = document.querySelector('.nav');
	const toggleMenu = () => {
		nav.classList.toggle('nav-open');
	};

	return (
		<>
			<header className="topbar">
				<span className="logo">Pedro Ramos</span>
				<nav className="nav">
					<ul className="nav--items nav__actions">
						<li className="nav--item">
							<a href="#locale" className="nav--item__locale" alt="change language">
								en
							</a>
						</li>
						<li className="nav--item">
							<SvgSun title="Light Mode" size="x-small" />
						</li>
						<li className="nav--item">
							<button className="nav__action" onClick={toggleMenu} title="open menu">
								menu
								<SvgMenu title="Open menu" size="x-small" />
							</button>
						</li>
					</ul>
					<ul className="nav--items nav__menu">
						<li className="nav--item">home</li>
						<li className="nav--item">about</li>
						<li className="nav--item">work</li>
						<li className="nav--item">contact</li>
						<li className="nav--item">resume</li>
						<li className="nav--item">
							<button className="nav__action" onClick={toggleMenu}>
								<SvgCross title="Close menu" size="x-small" />
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Topbar;
