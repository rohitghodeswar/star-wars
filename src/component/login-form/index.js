import { connect } from "react-redux";
import LoginForm from "./Login";
import { withRouter } from "react-router-dom";
import { loginRequest } from "./../../actions/login";
import { bindActionCreators } from 'redux';

const mapDispatchToProps = dispatch => bindActionCreators({
  loginRequest: loginData => loginRequest(loginData)
}, dispatch);

const mapStateToProps = state =>  ({
  loginInfo: state.login
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LoginForm));
