import PropTypes from 'prop-types';
import './Icons.scss';

const SvgChevronUp = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''}`}>
		<title>{title}</title>
		<path d="M36 30 24 18 12 30" />
	</svg>
);
export default SvgChevronUp;

SvgChevronUp.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
