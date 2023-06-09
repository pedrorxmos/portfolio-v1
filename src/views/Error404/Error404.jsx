import Button from '../../components/Button/Button';
// import Footer from '../../components/Footer/Footer';
import './Error404.scss';
import Icon from '../../components/Icon/Icon';
import { useContext } from 'react';
import { LocaleContext } from '../../providers/LocaleContext';
import { use100vh } from 'react-div-100vh';
import { Link } from 'react-router-dom';
// import { use100vh } from 'react-div-100vh';

function Error404() {
	const { locale } = useContext(LocaleContext);

	return (
		<>
			<main className="error-404 main" style={{ '--use-100vh': `${use100vh()}px` }}>
				<span className="error-404-message">{locale.locale['404-message']}</span>
				<big className="error-404-number">404</big>
				<span className="error-404-error">{locale.locale['404-error']}</span>
				<Link to="/" className="error-404-button">
					{locale.locale['404-back']}
				</Link>
			</main>
			{/* <Footer /> */}
		</>
	);
}

export default Error404;
