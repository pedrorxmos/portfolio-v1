import PropTypes from 'prop-types';
import './Icons.scss';

const SvgLinkedin = ({ title, color, size }) => (
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
		className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''} feather feather-linkedin`}
	>
		<title>{title}</title>
		<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
		<rect x={2} y={9} width={4} height={12} />
		<circle cx={4} cy={4} r={2} />
	</svg>
);
export default SvgLinkedin;

SvgLinkedin.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
