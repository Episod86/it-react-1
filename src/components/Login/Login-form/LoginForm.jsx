import React from "react";

import { reduxForm } from "redux-form";
import { createField, Input } from "../../Commons/FormsControl/FormsControl";
import { required } from "../../../utils/Validators";

import style from "../../Commons/FormsControl/FormsControl.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("Email", "email", Input, [required])}
      {createField("Password", "password", Input, [required], {
        type: "password",
      })}
      {createField(
        null,
        "rememberMe",
        Input,
        [],
        { type: "checkbox" },
        "rememberMe"
      )}

      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl &&
        createField("Symbol from image", "captcha", Input, [required])}
      {error && <div className={style.formSummaryError}>{error}</div>}
      <div className={style.buttonSubmit}>
        <button>Отправить</button>
      </div>
    </form>
  );
};

export const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);
