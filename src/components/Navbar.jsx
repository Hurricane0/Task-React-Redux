import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../redux/authReducer";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navbar = ({ signOut, user }) => {
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
      {user && (
        <form class="form-inline">
          <button
            onClick={signOut}
            class="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Sign Out
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
  signOut: dispatch(signOut)
});

Navbar.propTypes = {
  user: PropTypes.string,
  signOut: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
