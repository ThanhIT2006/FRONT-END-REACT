import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/product">Product</NavLink>
      <NavLink to="/detail">Detail</NavLink>
    </nav>
  );
}
