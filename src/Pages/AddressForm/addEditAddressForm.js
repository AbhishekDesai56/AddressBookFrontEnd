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
import NavBar from "../../Components/NavBar";

const AddressForm = ({ match }) => {
  const history = useHistory();
  const { id } = match.params;
  const isAddMode = !id;
  const [users, setAddress] = useState("");
  const [disable, setDisable] = useState(false);

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
          setDisable(true);
          setTimeout(() => {
            history.push("/dashboard");
          }, 2000);
          toast.success(response.data.message);
        })
        .catch((error) => {
          setDisable(false);
          toast.error(error);
        });
    } else {
      AddressBookService.updateAddressBookId(id, details)
        .then((response) => {
          setDisable(true);
          setTimeout(() => {
            history.push("/dashboard");
          }, 2000);
          toast.success(response.data.message);
        })
        .catch((error) => {
          setDisable(false);
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
      <div className="address-form-container">
        <Form className="address-form">
          <div className="address-form-head">
            <div className="address-head-title">
              <span id="header">Person Address Form</span>
            </div>
            <div className="address-cancel-icon">
              <a href="/dashboard">
                <button class="circle cross"></button>
              </a>
            </div>
          </div>
          <div className="address-row-content">
            <Input
              type="text"
              label="First Name"
              name="firstName"
              placeholder="Your First Name"
              className="address-input"
              onChange={onValueChange}
              value={users.firstName}
              id="firstName"
            />
          </div>
          <div className="address-row-content">
            <Input
              type="text"
              label="Last Name"
              name="lastName"
              placeholder="Your Last Name"
              className="address-input"
              onChange={onValueChange}
              value={users.lastName}
              id="lastName"
            />
          </div>
          <div className="address-row-content">
            <Textarea
              label="Address"
              name="address"
              placeholder="Your Address"
              className="address-input"
              id="address"
              onChange={onValueChange}
              value={users.address}
            />
          </div>
          <div className="address-select-content">
            <div className="select-input">
              <Select
                label="City"
                name="city"
                options={cityOptions}
                id="city"
                onChange={onValueChange}
                value={users.city}
              />
            </div>
            <div className="select-input">
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

          <div className="address-row-content">
            <Input
              type="text"
              label="Phone Number"
              name="phoneNumber"
              placeholder="Phone Number"
              className="address-input"
              id="phoneNumber"
              onChange={onValueChange}
              value={users.phoneNumber}
            />
          </div>
          <div className="address-button-content">
            <div className="address-submit-reset">
              <button
                id="submit-button"
                type="submit"
                className="address-button submit-button"
                disabled={disable}
              >
                {isAddMode ? "Add" : "Update"}
              </button>
              <button
                id="reset-button"
                type="reset"
                className="address-button reset-button"
                disabled={disable}
                onClick={() => {
                  window.location.reload();
                }}
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

export default NavBar(AddressForm);
