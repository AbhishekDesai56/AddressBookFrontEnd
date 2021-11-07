import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import Input from "../../Components/Input";
import "./login.scss";
const Login = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <form class="form" onSubmit={handleSubmit}>
      <div class="form-head">
        <div class="head-title">
          <span>Login Form</span>
        </div>
      </div>
      <div class="row-content">
        <Input
          type="email"
          label="Email"
          name="email"
          id="email"
          data-testid="email-input"
          placeholder="Enter your Email"
          className="input"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && (
          <div id="error-output">{errors.email}</div>
        )}
      </div>
      <div class="row-content">
        <Input
          type="password"
          label="Password"
          name="password"
          id="password"
          placeholder="Enter your password"
          className="input"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && (
          <div id="error-output">{errors.password}</div>
        )}
      </div>
      <div class="button-content">
        <div class="submit-reset">
          <button
            id="submitbutton"
            type="submit"
            name="submit"
            class="button submitButton"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

const MyEnhancedLogin = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    password: Yup.string().max(255).required("Password is required"),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
})(Login);

export default MyEnhancedLogin;
