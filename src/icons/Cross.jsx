import PropTypes from 'prop-types';
import './Icons.scss';

const SvgCross = ({ title, color, size }) => (
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
		className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''} feather feather-x`}
	>
		<title>{title}</title>
		<line x1={18} y1={6} x2={6} y2={18} />
		<line x1={6} y1={6} x2={18} y2={18} />
	</svg>
);
export default SvgCross;

SvgCross.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
