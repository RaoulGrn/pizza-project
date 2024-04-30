import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Pizzaris</Link>

      <SearchOrder />

      <p>Welcome</p>
    </header>
  );
}

export default Header;
