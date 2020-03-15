import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Home = ({ user, data }) => {
  return (
    <div className="page-container">
      {!user ? (
        <Redirect to="/login" />
      ) : (
        <>
          <h1>Home page</h1>
          <p>Example of working Router</p>
        </>
      )}
    </div>
  );
};
Home.propTypes = {
  user: PropTypes.string,
  signOut: PropTypes.func
};
export default Home;
