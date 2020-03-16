import React from "react";
import PropTypes from "prop-types";
import Preloader from "../components/Preloader";

const News = ({ data, isFetchingNews }) => {
  if (isFetchingNews) {
    return <Preloader />;
  }
  return (
    <>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Some news here:
      </h1>
      {data.map(item => (
        <div
          key={item.id}
          style={{ borderColor: "rgb(187, 187, 187)" }}
          className="card mb-3"
        >
          <div className="card-header">{item.title}...</div>
          <div className="card-body text-dark">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};
News.propTypes = {
  data: PropTypes.array.isRequired,
  isFetchingNews: PropTypes.bool
};

export default News;
