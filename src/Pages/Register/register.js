import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AddressBookService from "../../Services/AddressBookService";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../Components/Input";
import "./register.scss";
import NavBar from "../../Components/NavBar";

const Register = (props) => {
  const history = useHistory();
  const [disable, setDisable] = useState(false);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Firstname is required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Lastname is required"),
    email: Yup.string().email("Email is required").required("Required"),
    password: Yup.string()
      .required("Password is required")
      .required("Required"),
  });

  const onSubmit = (values) => {
    let registerationData = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
    };

    AddressBookService.register(registerationData)
      .then((response) => {
        setDisable(true);
        setTimeout(() => {
          history.push("/");
        }, 2000);
        toast.success(response.data.message);
      })
      .catch((err) => {
        setDisable(false);
        toast.error(err);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="register-form-container">
        <Form className="register-form">
          <div className="register-form-head">
            <div className="register-head-title">
              <span id="header">Register Form</span>
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
            />
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
            />
          </div>
          <div className="register-row-content">
            <Input
              type="email"
              label="Email"
              name="email"
              placeholder="Enter your Email"
              className="register-input"
              id="email"
            />
          </div>
          <div className="register-row-content">
            <Input
              type="password"
              label="Password"
              name="password"
              placeholder="Enter your password"
              className="register-input"
              id="password"
            />
          </div>
          <div className="register-button-content">
            <div className="register-submit">
              <button
                id="submit-button"
                type="submit"
                className="register-button submit-button"
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

export default NavBar(Register);
