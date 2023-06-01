import PropTypes from 'prop-types';

const SvgCopy = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg svg-${size} color-${color}`}>
		<title>{title}</title>
		<path d="M40 18H22a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V22a4 4 0 0 0-4-4Z" />
		<path d="M10 30H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h18a4 4 0 0 1 4 4v2" />
	</svg>
);
export default SvgCopy;

SvgCopy.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
