import PropTypes from 'prop-types';
import './Icons.scss';

const SvgAtSign = ({ title, color, size }) => (
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
		className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''} feather feather-at-sign`}
	>
		<title>{title}</title>
		<circle cx={12} cy={12} r={4} />
		<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
	</svg>
);
export default SvgAtSign;

SvgAtSign.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
