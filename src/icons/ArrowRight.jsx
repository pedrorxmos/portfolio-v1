import PropTypes from 'prop-types';

const SvgArrowRight = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg svg-${size} color-${color}`}>
		<title>{title}</title>
		<path d="M10 24h28M24 10l14 14-14 14" />
	</svg>
);
export default SvgArrowRight;

SvgArrowRight.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
