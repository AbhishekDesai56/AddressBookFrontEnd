import React from "react";
import "./addressForm.scss";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { withFormik } from "formik";
import * as Yup from "yup";

const AddressForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;
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
          <label for="name" class="label text">
            First Name
          </label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
            name="firstName"
            className="input"
            placeholder="Your First Name.."
          />
          {errors.firstName && touched.firstName && (
            <div id="feedback">{errors.firstName}</div>
          )}
        </div>
        <div class="a">
          <label for="name" class="label text">
            Last Name
          </label>
          <input
            type="text"
            id="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            name="lastName"
            className="input"
            placeholder="Your Last Name.."
          />
          {errors.lastName && touched.lastName && (
            <div id="feedback">{errors.lastName}</div>
          )}
        </div>
      </div>
      <div class="row-content">
        <label for="address" class="label text">
          Address
        </label>
        <textarea
          name="address"
          id="address"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.address}
          className="input"
          placeholder="Address"
        ></textarea>
        {errors.address && touched.address && (
          <div id="feedback">{errors.address}</div>
        )}
      </div>
      <div class="row-content">
        <label for="City" class="label text">
          City
        </label>
        <select
          name="city"
          id="city"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.city}
        >
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Firozabad">Firozabad</option>
        </select>
        {errors.city && touched.city && <div id="feedback">{errors.city}</div>}
      </div>
      <div class="row-content">
        <label for="ZipCode" class="label text">
          PinCode
        </label>
        <select
          name="pinCode"
          id="pinCode"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.pinCode}
        >
          <option value="">Select PinCode</option>
          <option value="400001">400001</option>
          <option value="500001">500001</option>
          <option value="500002">500002</option>
        </select>
        {errors.pinCode && touched.pinCode && (
          <div id="feedback">{errors.pinCode}</div>
        )}
      </div>

      <div class="row-content">
        <label for="phoneNumber" class="label text">
          Phone Number
        </label>
        <input
          name="phoneNumber"
          id="phoneNumber"
          class="input"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.phoneNumber}
          placeholder="Phone Number"
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
