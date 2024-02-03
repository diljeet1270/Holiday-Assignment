import React, { useState, useEffect } from "react";
import { Form, ErrorMessage, Formik, Field } from "formik";
import * as yup from "yup";
import style from "./profileDetails.module.css";
import axios from "axios";
import {toast} from 'react-toastify';
import Button from "../Button/Button";

const PersonalDetails = () => {
  const token = localStorage.getItem('token')

    // Form data for prefill.
    const [data, setData] = useState({});
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/profile/v1/personalDetails',
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
        initialValues={{
          dob: data.dob || '',
          gender: data.gender || '',
          maritalStatus: data.maritalStatus || '',
          socialSecurityNumber: data.socialSecurityNumber || '',
          social: data.social || '',
          kids: data.kids || '',
        }}
        validationSchema={yup.object().shape({})}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        <Form>
          <div className={style.formContainer}>
            <div className={style.formItem}>
              <label htmlFor="dob">DOB</label>
              <Field
                type="date"
                name="dob"
                id="dob"
                placeholder="e.g, 12-12-2002"
              />
              <ErrorMessage
                name="dob"
                component="p"
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
                placeholder="e.g, 456128"
              />
              <ErrorMessage name="socialSecurityNumber" component="div" />
            </div>
            <div className={style.formItem}>
              <label htmlFor="social">Social</label>
              <Field
                type="text"
                name="social"
                id="social"
                placeholder="Facebook or Instagram"
              />
              <ErrorMessage name="social" component="div" />
              </div>
            <div className={style.formItem}>
              <label htmlFor="kids">Kids (If any)</label>
              <Field name="kids" placeholder="e.g, 1 or 2" />
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
export default PersonalDetails;
