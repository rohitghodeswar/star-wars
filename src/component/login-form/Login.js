import React, { Component } from "react";
import HeaderText from "./../common/HeaderText";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { isLogin: false };
  }

  componentWillReceiveProps(newProps) {
    let { login } = newProps.loginInfo;
    if (login.success) {
      this.props.history.push("/search");
    } else {
      this.setState({ isLogin: true });
      window.setTimeout(() => {
        this.setState({ isLogin: false });
      }, 5000);
    }
  }

  login() {
    this.props.loginRequest(this.state);
  }

  onChangeInput(e, currentField) {
    let loginFormState = {};
    loginFormState[currentField] = e.target.value;
    this.setState(loginFormState);
  }

  render() {
    const { isLogin } = this.state;
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark justify-content-center">
          <HeaderText text="STAR WARS" />
        </nav>

        <form className="container login-form">
          <div className="form-group">
            {isLogin && (
              <p className="text-danger">Username and Password is Incorrect</p>
            )}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Star-Wars character name"
              onChange={e => this.onChangeInput(e, "username")}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter your Star-Wars birth year"
              onChange={e => this.onChangeInput(e, "password")}
            />
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-dark btn-block text-warning"
              onClick={() => this.login()}
            >
              _____Star-Wars_____
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
