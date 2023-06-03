import PropTypes from 'prop-types';
import './Icons.scss';

const SvgMenu = ({ title, color, size }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''} feather feather-menu`}
	>
		<title>{title}</title>
		<path d="M3 6L6.78597 4.73801C8.18932 4.27023 9.72777 4.44786 10.9876 5.22314L13.4419 6.73347C14.742 7.53355 16.3364 7.69585 17.7711 7.17415L21 6" />
		<path d="M3 12L6.78597 10.738C8.18932 10.2702 9.72777 10.4479 10.9876 11.2231L13.4419 12.7335C14.742 13.5336 16.3364 13.6958 17.7711 13.1741L21 12" />
		<path d="M3 18L6.78597 16.738C8.18932 16.2702 9.72777 16.4479 10.9876 17.2231L13.4419 18.7335C14.742 19.5336 16.3364 19.6958 17.7711 19.1741L21 18" />
	</svg>
);
export default SvgMenu;

SvgMenu.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
