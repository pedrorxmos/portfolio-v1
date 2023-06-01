import PropTypes from 'prop-types';
import './Icons.scss';

const SvgLinkedin = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''}`}>
		<title>{title}</title>
		<path d="M32 16a12 12 0 0 1 12 12v14h-8V28a4 4 0 1 0-8 0v14h-8V28a12 12 0 0 1 12-12ZM12 18H4v24h8V18ZM8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
	</svg>
);
export default SvgLinkedin;

SvgLinkedin.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
