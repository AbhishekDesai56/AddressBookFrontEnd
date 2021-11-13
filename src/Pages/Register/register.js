import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import Input from "../../Components/Input";
import "./register.scss";

const register = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <div className="register-form-head">
        <div className="register-head-title">
          <span>Register Form</span>
        </div>
      </div>
      <div className="register-row-content">
        <Input
          control="input"
          type="text"
          label="First Name"
          name="firstName"
          placeholder="Your First Name.."
          className="register-input"
          id="firstName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
        />
        {errors.firstName && touched.firstName && (
          <div id="error-output">{errors.firstName}</div>
        )}
      </div>
      <div className="register-row-content">
        <Input
          control="input"
          type="text"
          label="Last Name"
          name="lastName"
          placeholder="Your Last Name.."
          className="register-input"
          id="lastName"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
        />
        {errors.lastName && touched.lastName && (
          <div id="error-output">{errors.lastName}</div>
        )}
      </div>
      <div className="register-row-content">
        <Input
          type="email"
          label="Email"
          name="email"
          placeholder="Enter your Email"
          className="register-input"
          id="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {errors.email && touched.email && (
          <div id="error-output">{errors.email}</div>
        )}
      </div>
      <div className="register-row-content">
        <Input
          type="password"
          label="Password"
          name="password"
          placeholder="Enter your password"
          className="register-input"
          id="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {errors.password && touched.password && (
          <div id="error-output">{errors.password}</div>
        )}
      </div>
      <div className="register-button-content">
        <div className="register-submit">
          <button
            id="submitbutton"
            type="submit"
            className="register-button submitButton"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

const MyEnhancedRegister = withFormik({
  mapPropsToValues: () => ({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  }),

  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Firstname is required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Lastname is required"),
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
})(register);

export default MyEnhancedRegister;
