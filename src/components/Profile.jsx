import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Profile = ({ user }) => {
  return (
    <div>
      {user ? (
        <>
          <p className="greeting">
            Hello <strong>{user}</strong>
          </p>
          <p className="example-profile">It is an example of Profile</p>
        </>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.string,
  signOut: PropTypes.func
};
export default Profile;
