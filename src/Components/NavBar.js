import { Link } from "react-router-dom";
import shop from "../shop-solid.svg";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark sticky-top ">
        <div className="container">
          <div className="w-30 h-10">
            <img
              className="navbar-brand text-light img-fluid"
              src={shop}
              alt="logo"
            />
          </div>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon  "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white btnn"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white " to={"/about"}>
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
