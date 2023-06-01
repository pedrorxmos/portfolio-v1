import SvgSun from '../../icons/Sun';
import './Topbar.scss';

function Topbar() {
	return (
		<>
			<header className="topbar">
				<span className="logo">Pedro Ramos</span>
				<nav className="nav">
					<ul className="nav--items nav__actions">
						<li className="nav--item">
							<a href="#locale" className="nav--item__locale">
								en
							</a>
						</li>
						<li className="nav--item">
							<SvgSun title="Light Mode" size="x-small" />
						</li>
						<li className="nav--item">menu</li>
					</ul>
					<ul className="nav--items nav__menu">
						<li className="nav--item">home</li>
						<li className="nav--item">about</li>
						<li className="nav--item">work</li>
						<li className="nav--item">contact</li>
						<li className="nav--item">resume</li>
						<li className="nav--item">close</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Topbar;
