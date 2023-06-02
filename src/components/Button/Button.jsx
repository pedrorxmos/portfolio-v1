import PropTypes from 'prop-types';
import SvgGithub from '../../icons/Github';
import SvgExternalLink from '../../icons/ExternalLink';
import './Button.scss';

function Button({ type, value, color, icon, size, action }) {
	const iconSizeMap = {
		small: 'x-small',
		medium: 'small',
		big: 'normal',
	};

	const iconMap = {
		github: <SvgGithub size={iconSizeMap[size]} />,
		'external-link': <SvgExternalLink size={iconSizeMap[size]} />,
	};

	return (
		<>
			{type !== 'link' && (
				<button className={`btn${color ? ` btn-${color}` : ''}${size ? ` btn-${size}` : ''}`} onClick={action}>
					${icon ? iconMap[icon] : ''}
					{value}
				</button>
			)}
			{type === 'link' && (
				<a href={action} className={`link btn${color ? ` btn-${color}` : ''}${size ? ` btn-${size}` : ''}`} target="_blank" rel="noreferrer">
					{icon ? iconMap[icon] : ''}
					{value}
				</a>
			)}
		</>
	);
}

export default Button;

Button.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	color: PropTypes.string,
	icon: PropTypes.string,
	size: PropTypes.string,
	action: PropTypes.any,
};
