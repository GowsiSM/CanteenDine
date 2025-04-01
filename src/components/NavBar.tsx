import { Link } from "react-router-dom";
import "../css/NavBar.css"
function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Dishes</Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home  
        </Link>
        
        <Link to="/cart" className="nav-link">
          My Cart
        </Link>
      </div>
    </nav>
  );
}

export default NavBar