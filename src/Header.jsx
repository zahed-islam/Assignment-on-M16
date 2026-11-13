import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h2>MyWebsite</h2>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/services">Services</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;