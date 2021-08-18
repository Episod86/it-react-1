import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder={"Login"} name={"Login"} component={"input"} />
      </div>
      <div>
        <Field placeholder={"Password"} name={"Password"} component={"input"} />
      </div>
      <div>
        <Field name={"RememberMe"} component={"input"} type={"checkbox"} />
      </div>
      <div>
        <button>Отправить</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "Login",
})(LoginForm);

export const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
