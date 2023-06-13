import Button from '../../components/Button/Button';
// import Footer from '../../components/Footer/Footer';
import './Contact.scss';
import Icon from '../../components/Icon/Icon';
import emailjs from '@emailjs/browser';
import { useContext, useState, useRef } from 'react';
import { LocaleContext } from '../../providers/LocaleContext';
import { Link } from 'react-router-dom';
// import { use100vh } from 'react-div-100vh';

function Contact() {
	const { locale } = useContext(LocaleContext);
	const [mailStatus, setMailStatus] = useState('message thing');
	const form = useRef();

	const onFocus = (e) => {
		e.target.parentElement.style.background = 'var(--light-color-80)';
	};

	const onBlur = (e) => {
		e.target.parentElement.style.background = 'var(--light-color-40)';

		if (e.target.checkValidity() === false && e.target.value !== '') e.target.classList.add('error');
		else e.target.classList.remove('error');
	};

	const sendEmail = (e) => {
		e.preventDefault();

		setMailStatus(locale.locale['form-pending']);
		document.querySelector('.form-status-mail').classList.add('open');

		emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE, import.meta.env.VITE_EMAIL_TEMPLATE, form.current, import.meta.env.VITE_EMAIL_USER).then(
			(result) => {
				// console.log(result.text);
				setMailStatus(locale.locale['form-sent']);
				document.querySelector('.form-status-mail').classList.add('sent');
			},
			(error) => {
				// console.log(error.text);
				setMailStatus(`${locale.locale['form-pending']}: ${error.text}`);
				document.querySelector('.form-status-mail').classList.add('error');
			}
		);

		e.target.reset();
	};

	const closeMssg = (e) => {
		document.querySelector('.form-status-mail').classList.remove('open');
		setTimeout(() => {
			document.querySelector('.form-status-mail').classList.remove('error');
			document.querySelector('.form-status-mail').classList.remove('sent');
		}, 500);
	};

	return (
		<>
			<main className="contact main">
				<div className="form-status-mail">
					<small className="status-message">
						<Icon title="send" name="send" size="x-small" />
						{mailStatus}
					</small>

					<Button size="small" rightIcon="x" nothing action={closeMssg} title={locale.locale['menu-close']} />
				</div>
				<div className="contact-content">
					<div className="contact--section">
						<h2>{locale.locale['contact-title']}</h2>
						<form ref={form} onSubmit={sendEmail} className="contact__form form" autoComplete="off">
							<label htmlFor="form-name" className="form__item cursor-target">
								<Icon title="form name icon" name="user" size="normal" />
								<input type="text" className="form--input" id="form-name" name="form-name" onFocus={onFocus} onBlur={onBlur} required />
								<span className="form--label">{locale.locale['contact-name-form']}</span>
							</label>

							<label htmlFor="form-email" className="form__item cursor-target">
								<Icon title="form email icon" name="at-sign" size="normal" />
								<input type="email" className="form--input" id="form-email" name="form-email" onFocus={onFocus} onBlur={onBlur} required />
								<span className="form--label">{locale.locale['contact-email-form']}</span>
							</label>

							<label htmlFor="form-message" className="form__item cursor-target">
								<Icon title="form message icon" name="message-circle" size="normal" />
								<textarea className="form--input form--area" id="form-message" name="form-message" onFocus={onFocus} onBlur={onBlur} required />
								<span className="form--label">{locale.locale['contact-message-form']}</span>
							</label>

							<small className="form-consent">
								{locale.locale['form-consent']}{' '}
								<a href="/privacy" target="_blank">
									{locale.locale['form-privacy']}
								</a>
							</small>

							<Button value={locale.locale['contact-button']} color="main" size="medium" />
						</form>
					</div>

					<div className="contact__social">
						<a href="https://github.com/pedrorxmos" className="cursor-target" target="_blank" rel="noreferrer" title="github">
							<Icon title="github" name="github" size="x-normal" />
						</a>
						<a href="https://www.linkedin.com/in/pedroramosguardiola/" className="cursor-target" target="_blank" rel="noreferrer" title="linkedin">
							<Icon title="linkedin" name="linkedin" size="x-normal" />
						</a>
						<a href="https://codepen.io/pedrorxmos" className="cursor-target" target="_blank" rel="noreferrer" title="codepen">
							<Icon title="codepen" name="codepen" size="x-normal" />
						</a>
						<a href="https://twitter.com/" className="cursor-target" target="_blank" rel="noreferrer" title="twitter">
							<Icon title="twitter" name="twitter" size="x-normal" />
						</a>
						<a
							href="mailTo:pedrorxmosdev@gmail.com"
							className="cursor-target"
							target="_blank"
							rel="noreferrer"
							title={locale.locale['contact-email-form']}
						>
							<Icon title={locale.locale['contact-email-form']} name="mail" size="x-normal" />
						</a>
					</div>
				</div>
			</main>
			{/* <Footer /> */}
		</>
	);
}

export default Contact;
