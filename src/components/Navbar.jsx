import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signOut } from "../redux/authReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = ({ signOut, user }) => {
  debugger;
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  const handleSignOut = e => {
    e.preventDefault();
    signOut();
  };

  const renderRedirect = () => {
    if (redirectToLogin) {
      return <Redirect to="/login" />;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">
              News
            </Link>
          </li>
        </ul>
      </div>
      {renderRedirect()}
      {user ? (
        <form class="form-inline">
          <button
            onClick={handleSignOut}
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Sign Out
          </button>
        </form>
      ) : (
        <form class="form-inline">
          <button
            onClick={() => setRedirectToLogin(true)}
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Sign In
          </button>
        </form>
      )}
    </nav>
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

Navbar.propTypes = {
  user: PropTypes.string,
  signOut: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
