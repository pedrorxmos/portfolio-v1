import Button from '../../components/Button/Button';
// import Footer from '../../components/Footer/Footer';
import './Contact.scss';
import Icon from '../../components/Icon/Icon';
// import { use100vh } from 'react-div-100vh';

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
								<Icon title="form name icon" name="user" size="normal" />
								<input type="text" className="form--input" id="form-name" name="form-name" onFocus={onFocus} onBlur={onBlur} required />
								<span className="form--label">name</span>
							</label>

							<label htmlFor="form-email" className="form__item cursor-target">
								<Icon title="form email icon" name="at-sign" size="normal" />
								<input type="email" className="form--input" id="form-email" name="form-email" onFocus={onFocus} onBlur={onBlur} required />
								<span className="form--label">email</span>
							</label>

							<label htmlFor="form-message" className="form__item cursor-target">
								<Icon title="form message icon" name="message-circle" size="normal" />
								<textarea className="form--input form--area" id="form-message" name="form-message" onFocus={onFocus} onBlur={onBlur} required />
								<span className="form--label">message</span>
							</label>

							<Button value="get in touch" color="main" size="medium" />
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
						<a href="mailTo:pedrorxmosdev@gmail.com" className="cursor-target" target="_blank" rel="noreferrer" title="mail">
							<Icon title="mail" name="mail" size="x-normal" />
						</a>
					</div>
				</div>
			</main>
			{/* <Footer /> */}
		</>
	);
}

export default Contact;
