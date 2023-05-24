import React from 'react';
import './navItem.styles.css';
interface NavItemProps {
  active: boolean;
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  styles: React.CSSProperties;
  title: string;
}

const NavItem: React.FC<NavItemProps> = ({
  active,
  children,
  className,
  onClick,
  styles,
  title,
}) => {
  return (
    <li
      style={styles}
      onClick={onClick}
      aria-label={title}
      className={`${active ? 'active' : ''} nav-icon ${className}`}>
      {children}
    </li>
  );
};

export default NavItem;
