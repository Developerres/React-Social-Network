import cn from "../Login/Login.module.css";
import { Form, Field } from "react-final-form";
import React from "react";

const handleSubmit = async (values) => {
  const emailO = values.email;

  window.alert(JSON.stringify(values, 0, 2));
};

const required = (value) => (value ? undefined : "Required");

const Login = (props) => {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Field name="email" validate={required}>
            {({ input, meta }) => (
              <div>
                <input {...input} type="text" placeholder="Email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="password" validate={required}>
            {({ input, meta }) => (
              <div>
                <input {...input} type="password" placeholder="Password" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="remember" type="checkbox">
            {({ input, meta }) => (
              <div>
                <input {...input} type="checkbox" />
                <label>Remember me</label>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default Login;
