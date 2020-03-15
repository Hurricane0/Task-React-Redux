import React from "react";
import { connect } from "react-redux";
import Profile from "../components/Profile";

let ProfileContainer = ({ user, data }) => {
  return <Profile user={user} />;
};
const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(ProfileContainer);
