import PropTypes from 'prop-types';

const SvgPlus = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg svg-${size} color-${color}`}>
		<title>{title}</title>
		<path d="M24 10v28M10 24h28" />
	</svg>
);
export default SvgPlus;

SvgPlus.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
