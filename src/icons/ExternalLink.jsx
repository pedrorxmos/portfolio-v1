import PropTypes from 'prop-types';

const SvgExternalLink = ({ title, color, size }) => (
	<svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className={`svg svg-${size} color-${color}`}>
		<title>{title}</title>
		<path d="M36 26v12a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4h12M30 6h12v12M20 28 42 6" />
	</svg>
);
export default SvgExternalLink;

SvgExternalLink.propTypes = {
	title: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.string,
};
