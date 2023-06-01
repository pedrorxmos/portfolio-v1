import PropTypes from 'prop-types';

const SvgCross = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg svg-${size} color-${color}`}>
		<title>{title}</title>
		<path d="M32.006 13.867 11.243 41.156c-.531.698-1.632.433-1.767-.434-.948-6.085-3.428-22.963-3.475-33.33-.004-.888 1.066-1.292 1.671-.643L41.506 43" />
	</svg>
);
export default SvgCross;

SvgCross.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
