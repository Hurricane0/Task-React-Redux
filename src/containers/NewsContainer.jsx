import React from "react";
import { connect } from "react-redux";
import News from "../components/News";

const NewsContainer = ({ user }) => {
  return <News user={user} />;
};
const mapStateToProps = state => ({
  user: state.auth.user
});
export default connect(mapStateToProps)(NewsContainer);
