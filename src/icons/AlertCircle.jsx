import PropTypes from 'prop-types';
import './Icons.scss';

const SvgAlertCircle = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''}`}>
		<title>{title}</title>
		<path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20ZM24 16v8M24 32h.02" />
	</svg>
);
export default SvgAlertCircle;

SvgAlertCircle.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
