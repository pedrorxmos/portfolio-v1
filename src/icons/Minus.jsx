import PropTypes from 'prop-types';

const SvgMinus = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg svg-${size} color-${color}`}>
		<title>{title}</title>
		<path d="M10 24h28" />
	</svg>
);
export default SvgMinus;

SvgMinus.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
