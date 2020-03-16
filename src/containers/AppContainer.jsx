import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setUser } from "../redux/authReducer";
import App from "../App";

const AppContainer = ({ setUser }) => {
  useEffect(() => {
    try {
      const id = localStorage.getItem("userId");
      if (id === null) {
        return undefined;
      }
      setUser(id);
    } catch (err) {
      return undefined;
    }
    // eslint-disable-next-line
  }, []);
  return <App />;
};

const mapDispatchToProps = dispatch => ({
  setUser: id => dispatch(setUser(id))
});

export default connect(null, mapDispatchToProps)(AppContainer);
