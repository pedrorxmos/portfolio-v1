import Button from '../../components/Button/Button';
// import Footer from '../../components/Footer/Footer';
import './Contact.scss';
import Icon from '../../components/Icon/Icon';
import { useContext, useState } from 'react';
import { LocaleContext } from '../../providers/LocaleContext';
// import { use100vh } from 'react-div-100vh';

function Contact() {
	const { locale } = useContext(LocaleContext);
	const [mailStatus, setMailStatus] = useState('message thing');

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

		document.querySelector('.form-status-mail').classList.add('open');
	};

	const closeMssg = (e) => {
		document.querySelector('.form-status-mail').classList.remove('open');
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
						<form onSubmit={sendEmail} className="contact__form form" autoComplete="off">
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
