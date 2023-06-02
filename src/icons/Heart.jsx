import PropTypes from 'prop-types';
import './Icons.scss';

const SvgHeart = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''}`}>
		<title>{title}</title>
		<path d="M41.68 9.22a11 11 0 0 0-15.56 0L24 11.34l-2.12-2.12A11.003 11.003 0 1 0 6.32 24.78l2.12 2.12L24 42.46 39.56 26.9l2.12-2.12a11 11 0 0 0 0-15.56Z" />
	</svg>
);
export default SvgHeart;

SvgHeart.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
