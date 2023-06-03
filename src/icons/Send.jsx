import PropTypes from 'prop-types';
import './Icons.scss';

const SvgSend = ({ title, color, size }) => (
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
		className={`svg ${size ? `svg-${size}` : ''} ${color ? `color-${color}` : ''} feather feather-send`}
	>
		<title>{title}</title>
		<line x1={22} y1={2} x2={11} y2={13} />
		<polygon points="22 2 15 22 11 13 2 9 22 2" />
	</svg>
);
export default SvgSend;

SvgSend.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
