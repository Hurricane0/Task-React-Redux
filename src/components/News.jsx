import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const News = ({ user }) => {
  return (
    <div className="page-container">
      {!user ? (
        <Redirect to="/login" />
      ) : (
        <>
          <h1>News</h1>
          <p>Example of working Router</p>
        </>
      )}
    </div>
  );
};
News.propTypes = {
  user: PropTypes.string,
  signOut: PropTypes.func
};

export default News;
