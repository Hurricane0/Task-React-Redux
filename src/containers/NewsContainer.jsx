import React from "react";
import { connect } from "react-redux";
import News from "../components/News";

const NewsContainer = ({ data }) => {
  return <News data={data} />;
};
const mapStateToProps = state => ({
  data: []
});
export default connect(mapStateToProps)(NewsContainer);
