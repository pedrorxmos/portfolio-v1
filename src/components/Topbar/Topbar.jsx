import './Topbar.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

function Topbar() {
	const toggleMenu = () => {
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
							<Icon title="light mode" name="sun" size="small" />
						</li>
						<li className="nav--item">
							<button className="nav__action cursor-target" onClick={toggleMenu} title="open menu">
								menu
								<Icon title="open menu" name="menu" size="small" />
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
								<Icon title="close menu" name="x" size="small" />
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Topbar;
