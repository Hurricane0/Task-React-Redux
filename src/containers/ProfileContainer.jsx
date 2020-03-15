import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "../components/Profile";
import { getProfile } from "../redux/authReducer";

let ProfileContainer = ({
  user,
  getProfile,
  userId,
  profileData,
  errMessage,
  isFetching
}) => {
  useEffect(() => {
    getProfile(userId);
    // eslint-disable-next-line
  }, []);
  return (
    <Profile
      user={user}
      userId={userId}
      getProfile={getProfile}
      profileData={profileData}
      errMessage={errMessage}
      isFetching={isFetching}
    />
  );
};
const mapStateToProps = state => ({
  user: state.auth.user,
  userId: state.auth.userId,
  profileData: state.auth.profileData,
  errMessage: state.auth.errMessage,
  isFetching: state.auth.isFetchingProfile
});

const mapDispatchToProps = dispatch => ({
  getProfile: id => dispatch(getProfile(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
