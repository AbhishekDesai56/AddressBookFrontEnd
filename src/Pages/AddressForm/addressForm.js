import React from "react";
import "./addressForm.scss";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { withFormik } from "formik";
import * as Yup from "yup";
import Input from "../../Components/Input";
import Textarea from "../../Components/TextArea";
import Select from "../../Components/Select";
const AddressForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

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
  return (
    <form class="form" onSubmit={handleSubmit}>
      <div class="form-head">
        <div class="head-title">
          <span>Person Address Form</span>
        </div>
        <div class="cancel-icon">
          <a href="../pages/home.html">
            <img src={CloseSharpIcon} alt="Menu" id="headings2_menu" />
          </a>
        </div>
      </div>
      <div class="input-name-content">
        <div class="a">
          <Input
            control="input"
            type="text"
            label="First Name"
            name="firstName"
            placeholder="Your First Name.."
            className="input"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
          {errors.firstName && touched.firstName && (
            <div id="feedback">{errors.firstName}</div>
          )}
        </div>
        <div class="a">
          <Input
            control="input"
            type="text"
            label="Last Name"
            name="lastName"
            placeholder="Your Last Name.."
            className="input"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
          {errors.lastName && touched.lastName && (
            <div id="feedback">{errors.lastName}</div>
          )}
        </div>
      </div>
      <div class="row-content">
        <Textarea
          control="textarea"
          label="Address"
          name="address"
          placeholder="Address"
          className="input"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.address}
        />
        {errors.address && touched.address && (
          <div id="feedback">{errors.address}</div>
        )}
      </div>
      <div class="row-content">
        <Select
          control="select"
          label="City"
          name="city"
          options={cityOptions}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.city}
        />
        {errors.city && touched.city && <div id="feedback">{errors.city}</div>}
      </div>
      <div class="row-content">
        <Select
          control="select"
          label="PinCode"
          name="pinCode"
          options={pinCodeOptions}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.pinCode}
        />
        {errors.pinCode && touched.pinCode && (
          <div id="feedback">{errors.pinCode}</div>
        )}
      </div>

      <div class="row-content">
        <Input
          control="input"
          type="text"
          label="Phone Number"
          name="phoneNumber"
          placeholder="Phone Number"
          className="input"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phoneNumber}
        />
        {errors.phoneNumber && touched.phoneNumber && (
          <div id="feedback">{errors.phoneNumber}</div>
        )}
      </div>
      <div class="button-content">
        <div class="submit-reset">
          <button type="submit" class="button submitButton" id="submitButton">
            Add
          </button>
          <button type="reset" class="button resetButton" id="resetButton">
            Reset
          </button>
        </div>
      </div>
    </form>
    // </div>
  );
};

const MyEnhancedAddressForm = withFormik({
  mapPropsToValues: () => ({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    pinCode: "",
    phoneNumber: "",
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
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    pinCode: Yup.string().required("PinCode is required"),
    phoneNumber: Yup.string()
      .required("Phone number is required")
      .matches(/^([\d]{10})$/g, "Invalid phone number"),
  }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: "BasicForm",
})(AddressForm);
export default MyEnhancedAddressForm;
