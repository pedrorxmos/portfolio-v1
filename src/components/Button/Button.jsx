import PropTypes from 'prop-types';
import './Button.scss';
import Icon from '../Icon/Icon';

function Button({ type, value, color, icon, size, action }) {
	const iconSizeMap = {
		small: 'x-small',
		medium: 'small',
		big: 'normal',
	};

	return (
		<>
			{type !== 'link' && (
				<button className={`btn${color ? ` btn-${color}` : ''}${size ? ` btn-${size}` : ''} cursor-target`} onClick={action}>
					{icon ? <Icon title="icon" name="icon" size={iconSizeMap[size]} /> : ''}
					{value}
				</button>
			)}
			{type === 'link' && (
				<a
					href={action}
					className={`link btn${color ? ` btn-${color}` : ''}${size ? ` btn-${size}` : ''} cursor-target`}
					target="_blank"
					rel="noreferrer"
				>
					{icon ? <Icon title="icon" name="icon" size={iconSizeMap[size]} /> : ''}
					{value}
				</a>
			)}
		</>
	);
}

export default Button;

Button.propTypes = {
	type: PropTypes.string,
	value: PropTypes.string.isRequired,
	color: PropTypes.string,
	icon: PropTypes.string,
	size: PropTypes.string,
	action: PropTypes.any,
};
