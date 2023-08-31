import { Link } from "react-router-dom";
import BAlogo from "../../assets/ba-multiplica.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={BAlogo} style={{ width: "8em" }} alt="BA Multiplica Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {" "}
            <li className="nav-item">
              <Link
                className="nav-link active fontCustom1 fs-3"
                aria-current="page"
                to="/semanauno"
              >
                SEMANA aaaaa
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fontCustom1 fs-3"
                aria-current="page"
                to="/semanados"
              >
                SEMANA 2
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fontCustom1 fs-3"
                aria-current="page"
                to="/semanatres"
              >
                SEMANA 3
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fontCustom1 fs-3"
                aria-current="page"
                to="/semanacuatro"
              >
                SEMANA 4
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active fontCustom1 fs-3"
                aria-current="page"
                to="/historial"
              >
                HISTORIAL DE EVALUACIONES
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
