import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AddressBookService from "../../Services/AddressBookService";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../Components/Input";
import Password from "../../Components/Password";
import NavBar from "../../Components/NavBar";
import { ErrorBoundary } from "../../Helpers/ErrorBoundary";
import "./login.scss";
const Login = () => {
  const history = useHistory();
  const [disable, setDisable] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Enter a password").required("Required"),
  });

  const onSubmit = (values) => {
    let loginData = {
      email: values.email,
      password: values.password,
    };
    AddressBookService.login(loginData)
      .then((response) => {
        setDisable(true);
        sessionStorage.setItem("token", response.data.token);
        setTimeout(() => {
          history.push("/dashboard");
        }, 2000);
        toast.success(response.data.message);
      })
      .catch(() => {
        setDisable(false);
        toast.error("Invalid Credintials");
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <ErrorBoundary>
        <NavBar />
        <div className="login-form-content">
          <Form className="login-form">
            <div className="login-form-head">
              <div className="login-head-title">
                <span>Sign in</span>
              </div>
              <div className="login-cancel-icon"></div>
            </div>
            <div className="login-row-content">
              <Input
                label="Email"
                name="email"
                placeholder="Your Email"
                className="login-input"
              />
            </div>
            <div className="login-row-content">
              <Password
                label="Password"
                name="password"
                placeholder="Your Password"
                className="login-input"
              />
            </div>
            <div className="login-button-content">
              <div className="login-submit-reset">
                <button
                  id="submitButton"
                  type="submit"
                  className="login-button submitButton"
                  disabled={disable}
                >
                  Submit
                </button>
              </div>
            </div>
            <ToastContainer />
          </Form>
        </div>
      </ErrorBoundary>
    </Formik>
  );
};

export default Login;
