import PropTypes from 'prop-types';
import './Button.scss';
import Icon from '../Icon/Icon';

function Button({ type, value, color, leftIcon, rightIcon, size, action }) {
	const iconSizeMap = {
		small: 'x-small',
		medium: 'small',
		big: 'normal',
	};

	return (
		<>
			{type !== 'link' && (
				<button className={`btn${color ? ` btn-${color}` : ''}${size ? ` btn-${size}` : ''} cursor-target`} onClick={action}>
					{leftIcon ? <Icon title={leftIcon} name={leftIcon} size={iconSizeMap[size]} /> : ''}
					{value}
					{rightIcon ? <Icon title={rightIcon} name={rightIcon} size={iconSizeMap[size]} /> : ''}
				</button>
			)}
			{type === 'link' && (
				<a
					href={action}
					className={`link btn${color ? ` btn-${color}` : ''}${size ? ` btn-${size}` : ''} cursor-target`}
					target="_blank"
					rel="noreferrer"
				>
					{leftIcon ? <Icon title={leftIcon} name={leftIcon} size={iconSizeMap[size]} /> : ''}
					{value}
					{rightIcon ? <Icon title={rightIcon} name={rightIcon} size={iconSizeMap[size]} /> : ''}
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
	leftIcon: PropTypes.string,
	rightIcon: PropTypes.string,
	size: PropTypes.string,
	action: PropTypes.any,
};
