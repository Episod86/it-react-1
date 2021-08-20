import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/Validators";
import { Input } from "../Commosn/FormsControl/FormsControl";
import { login, logout } from "../../redux/auth-reduser";
import { Redirect } from "react-router-dom";
import style from "../Commosn/FormsControl/FormsControl.module.css";

const LoginForm = (props) => {
  // debugger;
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"email"}
          name={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"password"}
          component={Input}
          validate={[required]}
          type={"password"}
        />
      </div>
      <div>
        <Field name={"rememberMe"} component={Input} type={"checkbox"} />
      </div>
      {props.error && (
        <div className={style.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Отправить</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "Login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });
export default connect(mapStateToProps, { login, logout })(Login);
