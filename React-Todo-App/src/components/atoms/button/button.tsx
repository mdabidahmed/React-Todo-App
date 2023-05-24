import React, {useState} from 'react';
import {COLOR_TOKEN} from '../../tokens/colors';
import Icon from '../icon/Icon';

interface ButtonProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  onClick?: () => void;
  children: React.ReactNode;
  icon?: any;
}

const Button: React.FC<ButtonProps> = ({variant, onClick, children, icon}) => {
  const [isHovered, setIsHovered] = useState(false);
  const getButtonStyles = (): React.CSSProperties => {
    switch (variant) {
      case 'primary':
        return {
          color: COLOR_TOKEN.primary,
          borderColor: COLOR_TOKEN.primary,
          // Other primary button styles
        };
      case 'secondary':
        return {
          color: COLOR_TOKEN.secondary,
          borderColor: COLOR_TOKEN.secondary,
          // Other secondary button styles
        };
      case 'success':
        return {
          color: COLOR_TOKEN.success,
          borderColor: COLOR_TOKEN.success,
          // Other info button styles
        };
      case 'danger':
        return {
          color: COLOR_TOKEN.danger,
          borderColor: COLOR_TOKEN.danger,
          // Other danger button styles
        };
      case 'warning':
        return {
          color: COLOR_TOKEN.warning,
          borderColor: COLOR_TOKEN.warning,
          // Other warning button styles
        };
      case 'info':
        return {
          color: COLOR_TOKEN.info,
          borderColor: COLOR_TOKEN.info,
          // Other warning button styles
        };
      case 'light':
        return {
          color: COLOR_TOKEN.light,
          borderColor: COLOR_TOKEN.light,
          // Other warning button styles
        };
      case 'dark':
        return {
          color: COLOR_TOKEN.dark,
          borderColor: COLOR_TOKEN.dark,
          // Other warning button styles
        };
      default:
        return {
          color: COLOR_TOKEN.primary,
          borderColor: COLOR_TOKEN.primary,
          // Default button styles
        };
    }
  };

  const buttonStyles: React.CSSProperties = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '50px',
    backgroundColor: 'transparent',
    padding: '6px 12px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    fontWeight: '400',
    // lineHeight: '1.5',
    ...getButtonStyles(),
  };
  const buttonHoverStyles: React.CSSProperties = {
    backgroundColor:
      variant === 'primary'
        ? COLOR_TOKEN.primary
        : variant === 'secondary'
        ? COLOR_TOKEN.secondary
        : variant === 'success'
        ? COLOR_TOKEN.success
        : variant === 'danger'
        ? COLOR_TOKEN.danger
        : variant === 'warning'
        ? COLOR_TOKEN.warning
        : variant === 'info'
        ? COLOR_TOKEN.info
        : variant === 'light'
        ? COLOR_TOKEN.light
        : variant === 'dark'
        ? COLOR_TOKEN.dark
        : 'blue',
    color:
      variant === 'primary'
        ? COLOR_TOKEN.white
        : variant === 'secondary'
        ? COLOR_TOKEN.white
        : variant === 'success'
        ? COLOR_TOKEN.white
        : variant === 'danger'
        ? COLOR_TOKEN.white
        : variant === 'warning'
        ? COLOR_TOKEN.black
        : variant === 'info'
        ? COLOR_TOKEN.white
        : variant === 'light'
        ? COLOR_TOKEN.light
        : variant === 'dark'
        ? COLOR_TOKEN.white
        : 'white',
    // Additional hover styles
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const mergedStyles = isHovered
    ? {...buttonStyles, ...buttonHoverStyles}
    : buttonStyles;
  return (
    <button
      style={mergedStyles}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {icon && <Icon iconComponent={icon} />}
      {/* Render the icon if it's provided */}
      {children}
    </button>
  );
};

export default Button;
