import { React } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarExample01"
            aria-controls="navbarExample01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarExample01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item active">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="m-5 p-5 text-center bg-light">
        <div className="d-flex justify-content-center">
          <div className="d-flex  align-items-end">
            <i class="fas fa-shopping-bag fa-3x"></i>
          </div>
          <div>
            <h1 className="mb-3">Coupons and Offers</h1>
            <h4 className="mb-3">Today's DEAL !!</h4>
          </div>
          <div className="d-flex align-items-end">
            <i class="fas fa-cart-arrow-down fa-3x"></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
