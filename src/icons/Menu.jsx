import PropTypes from 'prop-types';

const SvgMenu = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg svg-${size} color-${color}`}>
		<title>{title}</title>
		<path d="m6 36 5.519-1.84a13.968 13.968 0 0 1 12.165 1.63v0a15.52 15.52 0 0 0 13.517 1.81L42 36M6 24l5.519-1.84a13.968 13.968 0 0 1 12.165 1.63v0a15.52 15.52 0 0 0 13.517 1.81L42 24M6 12l5.519-1.84a13.968 13.968 0 0 1 12.165 1.63v0a15.52 15.52 0 0 0 13.517 1.81L42 12" />
	</svg>
);
export default SvgMenu;

SvgMenu.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
