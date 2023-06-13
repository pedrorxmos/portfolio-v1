import { useContext } from 'react';
import { LocaleContext } from '../../providers/LocaleContext';
import './Privacy.scss';

function Privacy() {
	const { locale } = useContext(LocaleContext);
	return (
		<>
			<main className="main privacy">
				{locale.localeName === 'es' && (
					<>
						<h1>Política de Privacidad</h1>
						<p>
							Esta Política de Privacidad describe cómo se recopila, utiliza y protege la información personal que usted proporciona al utilizar
							elformulario de contacto en este portfolio. Por favor, tómese un momento para revisar esta política antes de enviar cualquier
							información a través del formulario de contacto.
						</p>

						<h2 className="h3">Recopilación de información</h2>

						<p>Cuando utiliza el formulario de contacto en este portfolio, se recopilará la siguiente información personal:</p>
						<ol>
							<li>Nombre: Para dirigirme a usted de manera apropiada.</li>
							<li>Dirección de correo electrónico: Para poder responder a su consulta o comentario.</li>
							<li>Mensaje: El contenido del mensaje que me envíe.</li>
						</ol>

						<h2 className="h3">Uso de la información</h2>

						<p>
							La información personal recopilada a través del formulario de contacto se utiliza únicamente con el fin de responder a su consulta
							ocomentario. No se comparirá, venderá ni alquilará su información personal a terceros sin su consentimiento previo, excepto cuando sea
							requerido por ley.
						</p>

						<h2 className="h3">Protección de la información</h2>

						<p>
							Tomaré medidas razonables para proteger la información personal que recopilamos a través del formulario de contacto. Sin embargo, no se
							puede garantizar la seguridad completa de la información transmitida a través de Internet. Usted asume el riesgo de
							cualquiercomunicación electrónica y me libera de cualquier responsabilidad por cualquier pérdida o daño relacionado con la transmisión
							de dicha información.
						</p>

						<h2 className="h3">Enlaces a sitios web de terceros</h2>

						<p>
							Este portfolio puede contener enlaces a sitios web de terceros. Esta Política de Privacidad se aplica únicamente a la información
							recopilada a través de este formulario de contacto, por lo que no seré responsable de las prácticas de privacidad de otros sitios web.
							Se le recomienda que lea las políticas de privacidad de estos sitios web de terceros antes de proporcionar cualquier información
							personal.
						</p>

						<h2 className="h3">Consentimiento</h2>

						<p>
							Al utilizar el formulario de contacto en este portfolio, usted otorga su consentimiento para que se recopile, utilice y proteja su
							información personal de acuerdo con los términos establecidos en esta Política de Privacidad.
						</p>

						<h2 className="h3">Cambios a esta Política de Privacidad</h2>

						<p>
							Me reservo el derecho de modificar esta Política de Privacidad en cualquier momento sin previo aviso. Cualquier cambio realizado se
							publicará en esta página con una indicación de la fecha de entrada en vigor. Le recomendamos que consulte esta página regularmente para
							mantenerse informado sobre cualquier cambio.
						</p>

						<p>
							Si tiene alguna pregunta o inquietud acerca de esta Política de Privacidad, no dude en ponerse en contacto conmigo a través de la
							información proporcionada en nuestro portfolio.
						</p>

						<p>13 de Junio de 2023</p>
					</>
				)}
				{locale.localeName === 'en' && (
					<>
						<h1>Privacy Policy</h1>
						<p>
							This Privacy Policy describes how we collect, use and protect the personal information you provide when using the contact form in this
							portfolio. Please take a moment to review this policy before submitting any information via the contact form.
						</p>

						<h2 className="h3">Collection of information</h2>

						<p>When you use the contact form in this portfolio, the following personal information will be collected:</p>
						<ol>
							<li>Name: In order to address you appropriately.</li>
							<li>Email address: In order to respond to your inquiry or comment.</li>
							<li>Message: The content of the message you send me.</li>
						</ol>

						<h2 className="h3">Use of information</h2>

						<p>
							Personal information collected through the contact form is used solely for the purpose of responding to your inquiry or comment. Your
							personal information will not be shared, sold or rented to third parties without your prior consent, except where required by law.
						</p>

						<h2 className="h3">Protection of information</h2>

						<p>
							I will take reasonable steps to protect the personal information we collect through the contact form. However, the complete security of
							information transmitted over the Internet cannot be guaranteed. You assume the risk of any electronic communication and release me from
							any liability for any loss or damage related to the transmission of such information.
						</p>

						<h2 className="h3">Links to third party websites</h2>

						<p>
							This portfolio may contain links to third party websites. This Privacy Policy applies only to information collected through this contact
							form, so I will not be responsible for the privacy practices of other websites. You are encouraged to read the privacy policies of these
							third party websites before providing any personal information.
						</p>

						<h2 className="h3">Consent</h2>

						<p>
							By using the contact form in this portfolio, you consent to the collection, use and protection of your personal information in
							accordance with the terms set forth in this Privacy Policy.
						</p>

						<h2 className="h3">Changes to this Privacy Policy</h2>

						<p>
							I reserve the right to modify this Privacy Policy at any time without notice. Any changes made will be posted on this page with an
							indication of the effective date. We encourage you to check this page regularly to stay informed of any changes.
						</p>

						<p>
							If you have any questions or concerns about this Privacy Policy, please feel free to contact me through the information provided in our
							portfolio.
						</p>

						<p>June 13, 2023</p>
					</>
				)}
			</main>
		</>
	);
}

export default Privacy;
