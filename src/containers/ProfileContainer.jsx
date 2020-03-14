import React from "react";
import { connect } from "react-redux";
import Profile from "../components/Profile";

let ProfileContainer = ({ user }) => {
  return <Profile user={user} />;
};
const mapStateToProps = state => ({
  user: state.auth.user
});
// ProfileContainer = connect(mapStateToProps)(Profile);
// export default ProfileContainer;
export default connect(mapStateToProps)(ProfileContainer);
