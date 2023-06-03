import PropTypes from 'prop-types';
import './Icons.scss';

const SvgUser = ({ title, color, size }) => (
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
		className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''} feather feather-user`}
	>
		<title>{title}</title>
		<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
		<circle cx={12} cy={7} r={4} />
	</svg>
);
export default SvgUser;

SvgUser.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
