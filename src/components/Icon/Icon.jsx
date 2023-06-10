import PropTypes from 'prop-types';
import './Icon.scss';
import { useIconsInnerSVG } from '../../hooks/useIconsInnerSvg';

function Icon({ title, size, name, className }) {
	return (
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
			className={`svg${size ? ` svg-${size}` : ''}${className ? ` ${className}` : ''} feather feather-${name}`}
		>
			<title>{title}</title>
			{useIconsInnerSVG(name)}
		</svg>
	);
}

export default Icon;

Icon.propTypes = {
	title: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	size: PropTypes.string,
};
