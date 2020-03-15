import React from "react";
import { connect } from "react-redux";
import Home from "../components/Home";

const HomeContainer = ({ user, data }) => {
  return <Home user={user} data={data} />;
};
const mapStateToProps = state => ({
  user: state.auth.user,
  data: state.auth.data
});
export default connect(mapStateToProps)(HomeContainer);
