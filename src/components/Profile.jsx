import React from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import Preloader from "./Preloader";

const Profile = ({ user, profileData, errMessage, isFetching }) => {
  if (isFetching) {
    return <Preloader />;
  }
  if (!user) {
    return <Redirect to="/login" />;
  }
  return (
    <div style={{ paddingTop: "20px" }}>
      {errMessage && (
        <div class="alert alert-danger" role="alert">
          {errMessage}
        </div>
      )}

      <div className="shadow-sm p-3 mb-5 bg-white rounded">
        <p style={{ fontSize: "42px" }}>
          <strong>{user}</strong> profile:
        </p>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>City: </strong>
            {profileData.data.city}
          </li>

          <li className="list-group-item">
            <strong>Languages: </strong>
            <ul>
              {profileData.data.languages.map(language => (
                <li key={language}>{language}</li>
              ))}
            </ul>
          </li>

          <li className="list-group-item">
            <strong>Social Media:</strong>
            <ul>
              {profileData.data.social.map(social => (
                <li key={social.label}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={social.link}
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.string,
  profileData: PropTypes.object,
  errMessage: PropTypes.string,
  isFetching: PropTypes.bool.isRequired
};
export default Profile;
