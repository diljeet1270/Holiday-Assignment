import React, { useState } from "react";
import { Form, ErrorMessage, Formik, Field } from "formik";
import * as yup from "yup";
import style from "./profileDetails.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Button from "../Button/Button";
const BasicDetails = () => {
  let token = localStorage.getItem('token');
  
  // Form data for prefill.
  const [data, setData] = useState({});
const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3001/profile/v1/basicDetails',
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if(response.data.status){
      setData(response.data.data);
    }else{
      console.log("Error Fetching Data");
      }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

useEffect(() => {
  fetchData();
}, []);

  const handleSubmit = async (values) => {
    try{
      let response = await axios.put("http://localhost:3001/profile/v1/basicDetails", values,{
      headers: {
          'Authorization': `Bearer ${token}`,
      },
  })
    if (response.data.status === 'success') {
       toast.success(response.data.message)
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
        initialValues = {{ 
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        email: data.email || "",
        socialSecurityNumber: data.socialSecurityNumber || "",
        phoneNumber: data.phoneNumber || "",
        addressOne: data.addressOne || "",
        addressTwo: data.addressTwo || "",
        city: data.city || "",
        state: data.state || "",
        zip: data.zip || "",
      }}
        validationSchema={yup.object().shape({
          firstName: yup.string(),
          lastName: yup.string(),
          email: yup.string().email('Invalid Email').required('Email is required'),
          socialSecurityNumber: yup.string(),
          mobileNumber: yup.string(),
          addressOne: yup.string(),
          addressTwo: yup.string(),
          city: yup.string(),
          state: yup.string(),
          zip: yup.string(),
        })}
        onSubmit={handleSubmit}
        enableReinitialize
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
                component="p"
                style={{ color: "red", fontSize: "12px" }}
              />
              </div>
              <div className={style.formItem}>
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
                component="p"
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
                component="dp"
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
              <ErrorMessage name="socialSecurityNumber" component="p" />
            </div>
            <div className={style.formItem}>
              <label htmlFor="phoneNumber">Mobile Number</label>
              <Field
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="e.g, 8082123546"
              />
              <ErrorMessage name="phoneNumber" component="div" />
              </div>
            <div className={style.formItem}>
              <label htmlFor="addressOne">Address 1</label>
              <Field name="addressOne" placeholder="Address" />
              <ErrorMessage name="addressOne" component="div" />
            </div>
            <div className={style.formItem}>
              <label htmlFor="addressTwo"> Address 2</label>
              <Field name="addressTwo" placeholder="Address" />
              <ErrorMessage name="addressTwo" component="div" />
              </div>
            <div className={style.formItem}>
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
            <div>
                <Button label="Update" type='submit'/>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default BasicDetails;
