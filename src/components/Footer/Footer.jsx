import './Footer.scss';
import Icon from '../Icon/Icon';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__content">
				<small>designed and coded with ♥ by Pedro Ramos</small>
				<div className="footer__social">
					<a href="https://github.com/pedrorxmos" className="cursor-target" target="_blank" rel="noreferrer">
						<Icon title="github" name="github" size="small" />
					</a>
					<a href="https://www.linkedin.com/in/pedroramosguardiola/" className="cursor-target" target="_blank" rel="noreferrer">
						<Icon title="linkedin" name="linkedin" size="small" />
					</a>
					<a href="https://codepen.io/pedrorxmos" className="cursor-target" target="_blank" rel="noreferrer">
						<Icon title="codepen" name="codepen" size="small" />
					</a>
					<a href="https://twitter.com/" className="cursor-target" target="_blank" rel="noreferrer">
						<Icon title="twitter" name="twitter" size="small" />
					</a>
					<a href="mailTo:pedrorxmosdev@gmail.com" className="cursor-target" target="_blank" rel="noreferrer">
						<Icon title="mail" name="mail" size="small" />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
