import SvgSun from '../../icons/Sun';
import SvgCross from '../../icons/Cross';
import SvgMenu from '../../icons/Menu';
import './Topbar.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Topbar() {
	const toggleMenu = () => {
		console.log('toggle menu');
		document.querySelector('.nav').classList.toggle('nav-open');
	};

	return (
		<>
			<header className="topbar">
				<span className="logo">
					<Link to="/" className="cursor-target">
						Pedro Ramos
					</Link>
				</span>
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
						<li className="nav--item">
							<Link to="/" className="cursor-target">
								home
							</Link>
						</li>
						<li className="nav--item">
							<Link to="/about" className="cursor-target">
								about
							</Link>
						</li>
						<li className="nav--item">
							<Link to="/work" className="cursor-target">
								work
							</Link>
						</li>
						<li className="nav--item">
							<Link to="/contact" className="cursor-target">
								contact
							</Link>
						</li>
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
