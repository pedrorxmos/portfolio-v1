import PropTypes from 'prop-types';
import './Icons.scss';

const SvgLink = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''}`}>
		<title>{title}</title>
		<path d="M30 14h6a10 10 0 0 1 0 20h-6m-12 0h-6a10 10 0 0 1 0-20h6M16 24h16" />
	</svg>
);
export default SvgLink;

SvgLink.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
