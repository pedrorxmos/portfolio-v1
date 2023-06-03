import PropTypes from 'prop-types';
import './Icons.scss';

const SvgArrowDown = ({ title, color, size }) => (
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
		className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''} feather feather-arrow-down`}
	>
		<title>{title}</title>
		<line x1={12} y1={5} x2={12} y2={19} />
		<polyline points="19 12 12 19 5 12" />
	</svg>
);
export default SvgArrowDown;

SvgArrowDown.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
