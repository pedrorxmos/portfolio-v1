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
	const onFocus = (e) => {
		e.target.parentElement.style.background = 'var(--light-color-80)';
	};

	const onBlur = (e) => {
		e.target.parentElement.style.background = 'var(--light-color-40)';

		if (e.target.checkValidity() === false && e.target.value !== '') e.target.classList.add('error');
		else e.target.classList.remove('error');
	};

	return (
		<>
			<main className="contact main">
				<div className="contact-content">
					<div className="contact--section">
						<h2>Contact</h2>
						<form action="" className="contact__form form" autoComplete="off">
							<label htmlFor="form-name" className="form__item cursor-target">
								<SvgUser size="normal" title="form name icon" />
								<input type="text" className="form--input" id="form-name" name="form-name" onFocus={onFocus} onBlur={onBlur} required />
								<span className="form--label">name</span>
							</label>

							<label htmlFor="form-email" className="form__item cursor-target">
								<SvgAtSign size="normal" title="form email icon" />
								<input type="email" className="form--input" id="form-email" name="form-email" onFocus={onFocus} onBlur={onBlur} required />
								<span className="form--label">email</span>
							</label>

							<label htmlFor="form-message" className="form__item cursor-target">
								<SvgMessage size="normal" title="form name icon" />
								<textarea className="form--input form--area" id="form-message" name="form-message" onFocus={onFocus} onBlur={onBlur} required />
								<span className="form--label">message</span>
							</label>

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
