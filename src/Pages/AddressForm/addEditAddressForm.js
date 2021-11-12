import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import AddressBookService from "../../Services/AddressBookService";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../../Components/Input";
import Textarea from "../../Components/TextArea";
import Select from "../../Components/Select";
import "./addEditAddressForm.scss";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const AddressForm = ({ match }) => {
  const history = useHistory();
  const { id } = match.params;
  const isAddMode = !id;
  const [users, setAddress] = useState("");
  useEffect(() => {
    if (!isAddMode) {
      AddressBookService.getAddressBookById(id).then((user) => {
        setAddress(user.data.data);
      });
    }
  }, [id, isAddMode]);

  const cityOptions = [
    { key: "Select City", value: "" },
    { key: "Mumbai", value: "Mumbai" },
    { key: "Pune", value: "Pune" },
    { key: "New Delhi", value: "New Delhi" },
    { key: "Firozabad", value: "Firozabad" },
  ];

  const pinCodeOptions = [
    { key: "Select PinCode", value: "" },
    { key: "400001", value: "400001" },
    { key: "500001", value: "500001" },
    { key: "500002", value: "500002" },
  ];

  const initialValues = {
    firstName: users.firstName,
    lastName: users.lastName,
    address: users.address,
    city: users.city,
    pinCode: users.pinCode,
    phoneNumber: users.phoneNumber,
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
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    pinCode: Yup.string().required("PinCode is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^([\d]{10})$/g, "Invalid phone number"),
  });

  const onValueChange = (e) => {
    setAddress({ ...users, [e.target.name]: e.target.value });
  };

  function onSubmit(values) {
    let details = {
      firstName: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      city: values.city,
      pinCode: values.pinCode,
      address: values.address,
    };
    if (isAddMode) {
      AddressBookService.createAddressBookData(details)
        .then((response) => {
          setTimeout(() => {
            history.push("/dashboard");
          }, 2000);
          toast.success(response.data.message);
        })
        .catch((error) => {
          toast.error(error);
        });
    } else {
      AddressBookService.updateAddressBookId(id, details)
        .then((response) => {
          setTimeout(() => {
            history.push("/dashboard");
          }, 2000);
          toast.success(response.data.message);
        })
        .catch((error) => {
          toast.error(error);
        });
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <div class="form-content">
        <Form className="form">
          <div className="form-head">
            <div className="head-title">
              <span>Person Address Form</span>
            </div>
            <div className="cancel-icon">
              <a href="/dashboard">
                <CloseSharpIcon />
              </a>
            </div>
          </div>
          <div className="row-content">
            <Input
              label="First Name"
              name="firstName"
              placeholder="Your First Name"
              className="input"
              onChange={onValueChange}
              value={users.firstName}
            />
          </div>
          <div className="row-content">
            <Input
              label="Last Name"
              name="lastName"
              placeholder="Your Last Name"
              className="input"
              onChange={onValueChange}
              value={users.lastName}
            />
          </div>
          <div className="row-content">
            <Textarea
              label="Address"
              name="address"
              placeholder="Address"
              className="input"
              id="address"
              onChange={onValueChange}
              value={users.address}
            />
          </div>
          <div className="select-content">
            <div>
              <Select
                label="City"
                name="city"
                options={cityOptions}
                id="city"
                onChange={onValueChange}
                value={users.city}
              />
            </div>
            <div>
              <Select
                label="PinCode"
                name="pinCode"
                options={pinCodeOptions}
                id="pinCode"
                onChange={onValueChange}
                value={users.pinCode}
              />
            </div>
            <div></div>
          </div>

          <div className="row-content">
            <Input
              control="input"
              type="text"
              label="Phone Number"
              name="phoneNumber"
              placeholder="Phone Number"
              className="input"
              id="phoneNumber"
              onChange={onValueChange}
              value={users.phoneNumber}
            />
          </div>
          <div className="button-content">
            <div className="submit-reset">
              <button
                id="submitButton"
                type="submit"
                className="button submitButton"
              >
                Add
              </button>
              <button
                id="resetButton"
                type="reset"
                className="button resetButton"
              >
                Reset
              </button>
            </div>
          </div>
          <ToastContainer />
        </Form>
      </div>
    </Formik>
  );
};

export default AddressForm;
