import React from 'react';
import './Icon.styles.css';
interface IconProps {
  iconComponent: React.ReactNode;
}

const Icon: React.FC<IconProps> = ({iconComponent}) => {
  return <span className='button-icon'>{iconComponent}</span>;
};

export default Icon;
