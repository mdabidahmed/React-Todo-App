interface NavItemProps {
  title: string;
  onClick: () => void;
}
interface NavProps {
  items: any;
}
const Nav: React.FC<NavProps> = ({items}) => {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <NavItem key={index} title={item.title} onClick={item.onClick} />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
