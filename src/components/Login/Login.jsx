import cn from "../Login/Login.module.css";
import { Form, Field } from "react-final-form";
import { FORM_ERROR } from "final-form";
import React from "react";
import { connect } from "react-redux";
import { login } from "./../../redux/authReducer";
import { Redirect } from "react-router-dom";

const required = (value) => (value ? undefined : "Required");

const Login = (props) => {
  if (props.isAuth) return <Redirect to={"/profile"} />;

  return (
    <div>
      <h2>Login</h2>
      <LoginForm {...props} />
    </div>
  );
};

const LoginForm = (props) => {
  debugger;
  const handleSubmit = async (values) => {
    props.login(values.email, values.password, values.rememberMe);
    // if (values.password !== "finalformrocks") {
    //   return { [FORM_ERROR]: "Login Failed" };
    // }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ submitError, handleSubmit, submitting }) => (
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
          <Field name="rememberMe" type="checkbox">
            {({ input, meta }) => (
              <div>
                <label>
                  <input {...input} type="checkbox" />
                  Remember me
                </label>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          {submitError && <div className="error">{submitError}</div>}
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

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
