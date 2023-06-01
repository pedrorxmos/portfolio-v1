import PropTypes from 'prop-types';
import './Icons.scss';

const SvgCodepen = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''}`}>
		<title>{title}</title>
		<path d="m24 4 20 13v14L24 44 4 31V17L24 4ZM24 44V31" />
		<path d="M44 17 24 31 4 17" />
		<path d="m4 31 20-14 20 14M24 4v13" />
	</svg>
);
export default SvgCodepen;

SvgCodepen.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
