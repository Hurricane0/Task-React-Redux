import { connect } from "react-redux";
import { signIn } from "../redux/authReducer";
import Login from "../components/Login";

const mapStateToProps = state => ({
  errMessage: state.auth.errMessage
});

const mapDispatchToProps = dispatch => ({
  sign: (params, cb) => dispatch(signIn(params, cb))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
