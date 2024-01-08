import React from "react";
import { Form, ErrorMessage, Formik, Field } from "formik";
import * as yup from "yup";
import style from "./profileDetails.module.css";
const BasicDetails = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    socialSecurityNumber: "",
    moblieNumber: "",
    addressOne: "",
    addressTwo: "",
    city: "",
    state: "",
    zip: "",
  };
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={yup.object().shape({})}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={style.formContainer}>
            <div className={style.formItem}>
              <label htmlFor="firstName">First Name</label>
              <Field
                type="text"
                name="firstName"
                id="firstName"
                placeholder="John"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
              <label htmlFor="lastName">Last Name</label>
              <Field
                type="text"
                name="lastName"
                id="lastName"
                placeholder="
      Smith"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>
            <div className={style.formItem}>
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="john@
      doe.com"
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{
                  color: "red",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              />
              <label htmlFor="socialSecurityNumber">
                Social Security (Number Only)
              </label>
              <Field
                type="tel"
                name="socialSecurityNumber"
                id="socialSecurityNumber"
                placeholder="456128"
              />
              <ErrorMessage name="socialSecurityNumber" component="div" />
            </div>
            <div className={style.formItem}>
              <label htmlFor="mobileNumber">Mobile Number</label>
              <Field
                type="tel"
                name="mobileNumber"
                id="mobileNumber"
                placeholder="+918082123546"
              />
              <ErrorMessage name="mobileNumber" component="div" />
              <label htmlFor="addressOne">Address 1</label>
              <Field name="addressOne" placeholder="Address" />
              <ErrorMessage name="addressOne" component="div" />
            </div>
            <div className={style.formItem}>
              <label htmlFor="addressTwo"> Address 2</label>
              <Field name="addressTwo" placeholder="Address" />
              <ErrorMessage name="addressTwo" component="div" />
              <label htmlFor="city">City</label>
              <Field size="small" name="city" id="city" placeholder="City" />
              <ErrorMessage name="city" component="div" />
            </div>
            <div className={style.formItem}>
              <label htmlFor="state">State</label>
              <Field name="state" id="state" placeholder="State" />
              <ErrorMessage name="state" component="div" />
            </div>
            <div className={style.formItem}>
              <label htmlFor="zip">Home Zip Code</label>
              <Field size="small" name="zip" id="zip" placeholder="123456" />
              <ErrorMessage name="zip" component="div" />
            </div>
            <div className={style.updateButton}>
                <button type="submit">Update</button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default BasicDetails;
