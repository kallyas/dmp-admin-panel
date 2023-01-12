const NavItem = ({ to, Icon, initial, name }) => {
  return (
    <li className="nav-item">
      <a className="nav-link" href={to}>
        <i className="icon">
          <Icon />
        </i>
        <i className="sidenav-mini-icon"> {initial}</i>
        <span className="item-name">{name}</span>
      </a>
    </li>
  );
};

export default NavItem;
