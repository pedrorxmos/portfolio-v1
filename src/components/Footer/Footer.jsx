import './Footer.scss';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__content">
				<small className="footer__copy">
					designed and coded with <Icon title="heart" name="heart" size="x-small" /> by Pedro Ramos
				</small>
				<div className="footer__social">
					<Button type="link" rightIcon="github" justIcon size="medium" action="https://github.com/pedrorxmos" nothing />
					<Button type="link" rightIcon="linkedin" justIcon size="medium" action="https://www.linkedin.com/in/pedroramosguardiola/" nothing />
					<Button type="link" rightIcon="codepen" justIcon size="medium" action="https://codepen.io/pedrorxmos" nothing />
					<Button type="link" rightIcon="twitter" justIcon size="medium" action="https://twitter.com/pedrorxmos" nothing />
					<Button type="link" rightIcon="mail" justIcon size="medium" action="mailTo:pedrorxmosdev@gmail.com" nothing />
				</div>
			</div>
		</footer>
	);
}

export default Footer;
