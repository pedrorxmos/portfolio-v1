import PropTypes from 'prop-types';
import './Icons.scss';

const SvgChevronDown = ({ title, color, size }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth={2}
		strokeLinecap="round"
		strokeLinejoin="round"
		className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''} ffeather feather-chevron-down`}
	>
		<title>{title}</title>
		<polyline points="6 9 12 15 18 9" />
	</svg>
);
export default SvgChevronDown;

SvgChevronDown.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
