import React from "react";
import PropTypes from "prop-types";

const News = () => {
  return (
    <div className="page-container">
      <h1>News</h1>
      <p>Example of working Router</p>
    </div>
  );
};
News.propTypes = {
  user: PropTypes.string,
  signOut: PropTypes.func
};

export default News;
