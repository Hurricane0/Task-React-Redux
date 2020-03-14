import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Login = ({ sign, errMessage }) => {
  const [redirectToPreviousRoute, setRedirectToPreviousRoute] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    sign({ username, password }, () => {
      setRedirectToPreviousRoute(true);
    });
  };

  if (redirectToPreviousRoute) {
    return <Redirect to="/profile" />;
  }
  return (
    <>
      <div
        style={{ marginTop: "20px" }}
        className="shadow-none p-3 mb-5 bg-light rounded"
      >
        <h3 style={{ margin: "20px 0" }}>Use these to enter: </h3>
        <p>
          <strong>Email:</strong> admin@gmail.com
        </p>
        <p>
          <strong>Password:</strong> 0000
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
              value={username}
              onChange={e => setUsername(e.target.value)}
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

          <button type="submit" class="btn btn-primary">
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
