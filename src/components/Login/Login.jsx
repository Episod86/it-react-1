import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/Validators";
import { Input } from "../Commosn/FormsControl/FormsControl";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Login"}
          name={"Login"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          placeholder={"Password"}
          name={"Password"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field name={"RememberMe"} component={Input} type={"checkbox"} />
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
