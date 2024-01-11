import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import imr from "../../assets/LogoImage.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import styles from './Signup.module.css';
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";
import Button from '../Button/Button'
const Signup = () => {
  let navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const response = await axios.post(
      "http://localhost:3001/auth/v1/signup",
      values
    );
    try {
      if (response.data.status === "success") {
        toast.success(response.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        navigate("/login");
      } else {
        toast.error(response.data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.signupContainer}>
        <div className={styles.signupImage}>
          <img src={imr} alt="Signup" />
        </div>
        <div className={styles.formContainer}>
          <Formik
            initialValues={initialValues}
            validationSchema={yup.object().shape({
              firstName: yup.string().required("First Name is required"),
              lastName: yup.string().required("Last Name is required"),
              email: yup
                .string()
                .email("Invalid email")
                .required("Email is required")
                .matches(
                  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  "Invalid email format"
                ),
              phoneNumber: yup
                .string()
                .required("Phone Number is required")
                .matches(/^[6-9]\d{9}$/, "Invalid phone number format"),
              password: yup
                .string()
                .min(8, "Password must be at least 8 characters")
                .matches(
                  /[A-Z]/,
                  "Password must contain at least one uppercase letter"
                )
                .matches(
                  /[!@#$%^&*(),.?":{}|<>]/,
                  "Password must contain at least one special symbol"
                )
                .required("Password is required"),
              confirmPassword: yup
                .string()
                .oneOf([yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required"),
            })}
            onSubmit={handleSubmit}
          >
            <Form>
              <h1>SignUp</h1>
              <br />
              <hr className={styles.formLine} />
              <br />
              <div className={styles.formNames}>
                <div className={styles.formName}>
                  <label htmlFor="firstName">First Name</label>
                  <Field type="text" id="firstName" name="firstName" />
                  <ErrorMessage name="firstName" component="div" />
                </div>
                <div className={styles.formName}>
                  <label htmlFor="lastName">Last Name</label>
                  <Field type="text" id="lastName" name="lastName" />
                  <ErrorMessage name="lastName" component="div" />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Enter Email</label>
                <Field type="text" id="email" name="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phoneNumber">Enter Phone No.</label>
                <Field type="text" id="phoneNumber" name="phoneNumber" />
                <ErrorMessage name="phoneNumber" component="div" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                />
                <ErrorMessage name="confirmPassword" component="div" />
              </div>
              <div className={styles.formGroup}>
                <Link to={"/login"} className={styles.navigationLink}>
                  Login
                </Link>
              </div>
              <div className={styles.formGroup}>
                <Button type="submit" label='SIGNUP'/>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
