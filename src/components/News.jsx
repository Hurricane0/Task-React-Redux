import React from "react";
import PropTypes from "prop-types";

const News = ({ data }) => {
  return (
    <div className="page-container">
      <h1>News</h1>
      <p>Example of working Router</p>
    </div>
  );
};
News.propTypes = {
  data: PropTypes.array.isRequired
};

export default News;
