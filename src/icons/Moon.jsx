import PropTypes from 'prop-types';
import './Icons.scss';

const SvgMoon = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''}`}>
		<title>{title}</title>
		<path d="M42 25.58A18 18 0 1 1 22.42 6 14 14 0 0 0 42 25.58Z" />
	</svg>
);
export default SvgMoon;

SvgMoon.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
