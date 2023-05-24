import React, {useState} from 'react';
import {
  AiFillAppstore,
  AiFillCheckSquare,
  AiFillDelete,
  AiFillHome,
  AiFillStar,
} from 'react-icons/ai';
import SideNavList from '../side-nav-list/sideNavList';

const SideNav = () => {
  const [activeIcon, setActiveIcon] = useState('');
  // const navigate = useNavigate();
  const handleClick = (iconName: string) => {
    setActiveIcon(iconName);
    // const category = {title: iconName, data: []};
    // navigate(`/detail/${iconName}`, {state: {category}});
  };
  const componentStyles: React.CSSProperties = {
    cursor: 'pointer',
    fontSize: '32px',
    textAlign: 'center',
  };

  const navItems: any = [
    {
      title: 'My Home',
      styles: componentStyles,
      onClick: () => handleClick('home'),
      active: activeIcon === 'home',
      iconComponent: <AiFillHome />,
    },
    {
      title: 'My App Store',
      styles: componentStyles,
      onClick: () => handleClick('myAppstore'),
      active: activeIcon === 'myAppstore',
      iconComponent: <AiFillAppstore />,
    },
    {
      title: 'My Favorite',
      styles: componentStyles,
      onClick: () => handleClick('myFavorite'),
      active: activeIcon === 'myFavorite',
      iconComponent: <AiFillStar />,
    },
    {
      title: 'My List',
      styles: componentStyles,
      onClick: () => handleClick('myList'),
      active: activeIcon === 'myList',
      iconComponent: <AiFillCheckSquare />,
    },
    {
      title: 'Delete',
      styles: componentStyles,
      onClick: () => handleClick('delete'),
      active: activeIcon === 'delete',
      iconComponent: <AiFillDelete />,
    },
  ];
  return (
    <>
      <SideNavList navItems={navItems} />
    </>
  );
};

export default SideNav;
