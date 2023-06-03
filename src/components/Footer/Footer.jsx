import SvgGithub from '../../icons/Github';
import SvgLinkedin from '../../icons/Linkedin';
import SvgCodepen from '../../icons/Codepen';
import SvgTwitter from '../../icons/Twitter';
import SvgMail from '../../icons/Mail';

import './Footer.scss';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__content">
				<small>designed and coded with ♥ by Pedro Ramos</small>
				<div className="footer__social">
					<a href="https://github.com/pedrorxmos" className="cursor-target" target="_blank" rel="noreferrer">
						<SvgGithub size="small" />
					</a>
					<a href="https://www.linkedin.com/in/pedroramosguardiola/" className="cursor-target" target="_blank" rel="noreferrer">
						<SvgLinkedin size="small" />
					</a>
					<a href="https://codepen.io/pedrorxmos" className="cursor-target" target="_blank" rel="noreferrer">
						<SvgCodepen size="small" />
					</a>
					<a href="https://twitter.com/" className="cursor-target" target="_blank" rel="noreferrer">
						<SvgTwitter size="small" />
					</a>
					<a href="mailTo:pedrorxmosdev@gmail.com" className="cursor-target" target="_blank" rel="noreferrer">
						<SvgMail size="small" />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
