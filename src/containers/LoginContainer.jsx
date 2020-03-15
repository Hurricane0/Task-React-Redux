import { connect } from "react-redux";
import { authUser } from "../redux/authReducer";
import Login from "../components/Login";

const mapStateToProps = state => ({
  errMessage: state.auth.errMessage,
  data: state.auth.data,
  isFetching: state.auth.isFetchingLogin
});

const mapDispatchToProps = dispatch => ({
  authUser: (email, password, cb) => dispatch(authUser(email, password, cb))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
