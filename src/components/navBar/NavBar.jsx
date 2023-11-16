import { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PageRoutes } from "../../App";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pages = useMemo(() => {
    return PageRoutes.map((p) => ({ ...p, isActive: location.pathname === p.redirectPath }));
  });

  return (
    <nav className="navbar">
      <ul className="navbar-wrapper">
        {pages.map((page) => (
          <li key={`navbar-${page.redirectPath}`} className="navbar-item">
            <button onClick={() => navigate(page.redirectPath)} className={`btn ${page.isActive ? "active" : ""}`}>
              {page.display}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
