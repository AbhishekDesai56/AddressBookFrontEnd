import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AddressBookService from "../../Services/AddressBookService";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../Components/Input";
import Password from "../../Components/Password";
const Login = () => {
  const history = useHistory();
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
        sessionStorage.setItem("token", response.data.token);
        setTimeout(() => {
          history.push("/dashboard");
        }, 2000);
        toast.success(response.data.message);
      })
      .catch(() => {
        toast.error("Invalid Credintials");
      });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div class="form-content">
        <Form className="form">
          <div className="form-head">
            <div className="head-title">
              <span>SignUp Pages</span>
            </div>
            <div className="cancel-icon"></div>
          </div>
          <div className="row-content">
            <Input
              label="Email"
              name="email"
              placeholder="Your Email"
              className="input"
            />
          </div>
          <div className="row-content">
            <Password
              label="Password"
              name="password"
              placeholder="Your Password"
              className="input"
            />
          </div>
          <div className="button-content">
            <div className="submit-reset">
              <button
                id="submitButton"
                type="submit"
                className="button submitButton"
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

export default Login;
