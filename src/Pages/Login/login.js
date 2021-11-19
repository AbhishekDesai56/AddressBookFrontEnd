import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AddressBookService from "../../Services/AddressBookService";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../Components/Input";
import NavBar from "../../Components/NavBar";
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
      <div className="login-form-container">
        <Form className="login-form">
          <div className="login-form-head">
            <div className="login-head-title">
              <span id="header">Sign in</span>
            </div>
            <div className="login-cancel-icon"></div>
          </div>
          <div className="login-row-content">
            <Input
              type="email"
              label="Email"
              name="email"
              placeholder="Your Email"
              className="login-input"
              id="email"
            />
          </div>
          <div className="login-row-content">
            <Input
              type="password"
              label="Password"
              name="password"
              placeholder="Your Password"
              className="login-input"
              id="password"
            />
          </div>
          <div className="login-row-content">
            <a className="link-register" href="/register">
              Register
            </a>
          </div>
          <div className="login-button-content">
            <div className="login-submit-reset">
              <button
                id="submitbutton"
                type="submit"
                className="login-button submit-button"
                disabled={disable}
              >
                Submit
              </button>
            </div>
          </div>
          <ToastContainer />
        </Form>
      </div>
    </Formik>
  );
};

export default NavBar(Login);
