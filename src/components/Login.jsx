import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Login = ({ errMessage, authUser, location, isFetching }) => {
  const [redirectToPreviousRoute, setRedirectToPreviousRoute] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [errMessage]);

  const handleSubmit = e => {
    e.preventDefault();

    authUser(email, password, () => setRedirectToPreviousRoute(true));
  };

  if (redirectToPreviousRoute) {
    return <Redirect to={from} />;
  }
  return (
    <>
      <div
        style={{ marginTop: "20px" }}
        className="shadow-none p-3 mb-5 bg-light rounded"
      >
        <h3 style={{ margin: "20px 0" }}>Use these to enter: </h3>
        <p>
          <strong>Email:</strong> max@test.com
        </p>
        <p>
          <strong>Password:</strong> 12345
        </p>
      </div>
      <div className="shadow p-3 mb-5 bg-white rounded">
        {errMessage && (
          <div className="alert alert-danger" role="alert">
            {errMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              It is just a showcase of form working and validation
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button
            disabled={isFetching}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
Login.propTypes = {
  authUser: PropTypes.func.isRequired,
  errMessage: PropTypes.string,
  isFetching: PropTypes.bool.isRequired
};

export default Login;
