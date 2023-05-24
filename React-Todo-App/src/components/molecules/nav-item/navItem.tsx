import React from 'react';

interface NavItemProps {
  title: string;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({title, onClick}) => {
  return (
    <li>
      <button onClick={onClick}>{title}</button>
    </li>
  );
};

export default NavItem;
