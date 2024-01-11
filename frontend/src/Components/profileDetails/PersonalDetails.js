import React from "react";
import { Form, ErrorMessage, Formik, Field } from "formik";
import * as yup from "yup";
import style from "./profileDetails.module.css";
import axios from "axios";
import {toast} from 'react-toastify';
import Button from "../Button/Button";
const personalDetails = () => {
  const token = localStorage.getItem('token')
  const initialValues = {
    dob: '',
    gender: '',
    maritalStatus: '',
    socialSecurityNumber: '',
    social: '',
    kids: '',
  };
  const handleSubmit = async (values) => {
    try{
      console.log(values);
      let response = await axios.put("http://localhost:3001/profile/v1/personalDetails", values,{
      headers: {
          'Authorization': `Bearer ${token}`,
      },
  })
    if (response.data.status === 'success') {
        toast.success(response.data.message);
    } else if (response.data.status === 'error') {
        toast.error(response.data.message);
    }
  }
catch(error) {
  toast.error('An error occurred');
    console.error(error);
}
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
                placeholder="Male or female"
              />
              <ErrorMessage
                name="gender"
                component="div"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>
            <div className={style.formItem}>
              <label htmlFor="maritalStatus">Marital Status</label>
              <Field type="text" name="maritalStatus" placeholder="Married or unmarried"/>
              <ErrorMessage name="maritalStatus" component='div'/>
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
              <label htmlFor="social">Social</label>
              <Field
                type="text"
                name="social"
                id="social"
                placeholder="Facebook"
              />
              <ErrorMessage name="social" component="div" />
              </div>
            <div className={style.formItem}>
              <label htmlFor="kids">Kids (If any)</label>
              <Field name="kids" placeholder="1" />
              <ErrorMessage name="kids" component="div" />
            </div>
            <div >
                <Button type='submit' label="Update"/>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default personalDetails;
