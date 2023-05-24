import React, {ReactNode} from 'react';
import './Icon.styles.css';
interface IconProps {
  active: boolean;
  children: ReactNode;
  className?: string;
  onClick: () => void;
  styles: React.CSSProperties;
  title: string;
}

const Icon: React.FC<IconProps> = ({
  active,
  children,
  className,
  onClick,
  styles,
  title,
}) => {
  return (
    <div
      style={styles}
      onClick={onClick}
      aria-label={title}
      className={`${active ? 'active' : ''} nav-icon ${className}`}>
      {children}
    </div>
  );
};

export default Icon;
