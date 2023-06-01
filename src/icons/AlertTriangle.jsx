import PropTypes from 'prop-types';

const SvgAlertTriangle = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg svg-${size} color-${color}`}>
		<title>{title}</title>
		<path d="M20.58 7.72 3.64 36a4 4 0 0 0 3.42 6h33.88a4 4 0 0 0 3.42-6L27.42 7.72a4 4 0 0 0-6.84 0ZM24 18v8M24 34h.02" />
	</svg>
);
export default SvgAlertTriangle;

SvgAlertTriangle.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
