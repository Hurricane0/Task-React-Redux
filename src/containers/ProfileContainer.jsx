import React from "react";
import { connect } from "react-redux";
import Profile from "../components/Profile";
import { getProfile } from "../redux/authReducer";

let ProfileContainer = ({ user, getProfile, userId, profileData }) => {
  return (
    <Profile
      user={user}
      userId={userId}
      getProfile={getProfile}
      profileData={profileData}
    />
  );
};
const mapStateToProps = state => ({
  user: state.auth.user,
  userId: state.auth.userId,
  profileData: state.auth.profileData
});

const mapDispatchToProps = dispatch => ({
  getProfile: id => dispatch(getProfile(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
