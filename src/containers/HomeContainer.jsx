import React from "react";
import { connect } from "react-redux";
import Home from "../components/Home";

const HomeContainer = ({ user }) => {
  return <Home user={user} />;
};
const mapStateToProps = state => ({
  user: state.auth.user
});
export default connect(mapStateToProps)(HomeContainer);
