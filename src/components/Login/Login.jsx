import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { LoginReduxForm } from "./Login-form/LoginForm";

import { login, logout } from "../../redux/auth-reduser";

import style from "./Login.module.css";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div className={style.login}>
      <span className={style.loginTitle}>Login</span>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});
export default connect(mapStateToProps, { login, logout })(Login);
