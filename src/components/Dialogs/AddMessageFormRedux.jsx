import React from "react";

import { Field, reduxForm } from "redux-form";
import { TextArea } from "../Commosn/FormsControl/FormsControl";
import { maxLengthCreator, required } from "../../utils/Validators";

import style from "../Commosn/FormsControl/FormsControl.module.css";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={TextArea}
          name={"newMessageBody"}
          placeholder={"Enter your message"}
          validate={[required, maxLength100]}
        />
      </div>
      <div className={style.buttonSubmit}>
        <button>Send</button>
      </div>
    </form>
  );
};

export const AddMessageFormRedux = reduxForm({
  form: "dialogAddMessageForm",
})(AddMessageForm);
