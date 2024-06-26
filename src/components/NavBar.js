import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function NavBar() {
  let location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  const handleLogout = () => {
    localStorage.setItem("token", "");
    window.location.href = "/login";
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            INotebook
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    location.pathname === "/about" ? "active" : ""
                  }`}
                  href="/about"
                >
                  About
                </a>
              </li>
            </ul>
            {!localStorage.getItem("token") ? (
              <>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
                <a href="/login" className="btn btn-primary mx-2">
                  Login
                </a>
                <a href="/signup" className="btn btn-primary">
                  Signup
                </a>
              </>
            ) : (
              <button onClick={handleLogout} className="btn btn-primary">
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
