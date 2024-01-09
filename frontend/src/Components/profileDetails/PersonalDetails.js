import React from "react";
import { Form, ErrorMessage, Formik, Field } from "formik";
import * as yup from "yup";
import style from "./profileDetails.module.css";
const personalDetails = () => {
  const initialValues = {
    dob: '',
    gender: '',
    maritalStatus: '',
    socialSecurityNumber: '',
    social: '',
    kids: '',
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
              <label htmlFor="dob">DOB</label>
              <Field
                type="date"
                name="dob"
                id="dob"
                placeholder="John"
              />
              <ErrorMessage
                name="dob"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
              </div>
            <div className={style.formItem}>
              <label htmlFor="gender">Gender</label>
              <Field
                type="text"
                name="gender"
                id="gender"
                placeholder="
      Smith"
              />
              <ErrorMessage
                name="gender"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>
            <div className={style.formItem}>
              <label htmlFor="maritalStatus">Marital Status</label>
              <Field type="text" name="maritalStatus" placeholder="Male or Female"/>
              <ErrorMessage name="maritalStatus" component='div'/>
            </div>
            <div className={style.formItem}>
              <label htmlFor="maritalStauts">Email</label>
              <Field
                type="maritalStauts"
                name="maritalStauts"
                id="maritalStauts"
                placeholder="john@
      doe.com"
              />
              <ErrorMessage
                name="maritalStauts"
                component="div"
                style={{
                  color: "red",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              />
              </div>
            <div className={style.formItem}>
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
              <label htmlFor="social">Mobile Number</label>
              <Field
                type="tel"
                name="social"
                id="social"
                placeholder="+918082123546"
              />
              <ErrorMessage name="social" component="div" />
              </div>
            <div className={style.formItem}>
              <label htmlFor="kids">Address 1</label>
              <Field name="kids" placeholder="1" />
              <ErrorMessage name="kids" component="div" />
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
export default personalDetails;
