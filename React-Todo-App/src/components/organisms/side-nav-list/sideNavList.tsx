import NavItem from '../../molecules/nav-item/navItem';
interface NavItemProps {
  active: boolean;
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  styles: React.CSSProperties;
  title: string;
}
interface NavProps {
  navItems: NavItemProps[];
}
const SideNavList: React.FC<NavProps> = ({navItems}: any) => {
  return (
    <nav>
      {navItems.map((item: any, index: any) => (
        <NavItem
          key={index}
          title={item.title}
          styles={item.styles}
          onClick={item.onClick}
          active={item.active}>
          {item.iconComponent}
        </NavItem>
      ))}
    </nav>
  );
};

export default SideNavList;
