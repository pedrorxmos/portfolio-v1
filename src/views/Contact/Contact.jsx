import Button from '../../components/Button/Button';
import Footer from '../../components/Footer/Footer';
import SvgUser from '../../icons/User';
import SvgAtSign from '../../icons/AtSign';
import SvgMessage from '../../icons/Message';
import './Contact.scss';
import SvgGithub from '../../icons/Github';
import SvgLinkedin from '../../icons/Linkedin';
import SvgCodepen from '../../icons/Codepen';
import SvgTwitter from '../../icons/Twitter';
import SvgMail from '../../icons/Mail';

function Contact() {
	return (
		<>
			<main className="contact main">
				<div className="contact-content">
					<div className="contact--section">
						<h2>Contact</h2>
						<form action="" className="contact__form">
							<div className="form__item">
								<SvgUser />
								<label htmlFor="form-name" className="form--label">
									name
								</label>
								<input type="text" className="form--input" name="form-name" />
							</div>

							<div className="form__item">
								<SvgAtSign />
								<label htmlFor="form-email" className="form--label">
									email
								</label>
								<input type="text" className="form--input" name="form-email" />
							</div>

							<div className="form__item">
								<SvgMessage />
								<label htmlFor="form-message" className="form--label">
									message
								</label>
								<textarea className="form--input form--area" name="form-message" />
							</div>

							<Button value="get in touch" />
						</form>
					</div>

					<div className="contact__social">
						<a href="https://github.com/pedrorxmos" className="cursor-target" target="_blank" rel="noreferrer" title="github">
							<SvgGithub size="x-normal" title="github" />
						</a>
						<a href="https://www.linkedin.com/in/pedroramosguardiola/" className="cursor-target" target="_blank" rel="noreferrer" title="linkedin">
							<SvgLinkedin size="x-normal" title="linkedin" />
						</a>
						<a href="https://codepen.io/pedrorxmos" className="cursor-target" target="_blank" rel="noreferrer" title="codepen">
							<SvgCodepen size="x-normal" title="codepen" />
						</a>
						<a href="https://twitter.com/" className="cursor-target" target="_blank" rel="noreferrer" title="twitter">
							<SvgTwitter size="x-normal" title="twitter" />
						</a>
						<a href="mailTo:pedrorxmosdev@gmail.com" className="cursor-target" target="_blank" rel="noreferrer" title="mail">
							<SvgMail size="x-normal" title="mail" />
						</a>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Contact;
