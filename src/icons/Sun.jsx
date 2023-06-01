import PropTypes from 'prop-types';
import './Icons.scss';

const SvgSun = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''}`}>
		<title>{title}</title>
		<path d="M24 34c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10ZM24 2v4M24 42v4M8.44 8.44l2.84 2.84M36.72 36.72l2.84 2.84M2 24h4M42 24h4M8.44 39.56l2.84-2.84M36.72 11.28l2.84-2.84" />
	</svg>
);
export default SvgSun;

SvgSun.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
