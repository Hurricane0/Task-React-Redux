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
          <div class="alert alert-danger" role="alert">
            {errMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              It is just a showcase of form working and validation
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button disabled={isFetching} type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};
Login.propTypes = {
  sign: PropTypes.func.isRequired,
  errMessage: PropTypes.string
};

export default Login;
