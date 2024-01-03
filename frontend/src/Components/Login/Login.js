import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import imr from '../../assets/LogoImage.jpg'
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from  './Login.module.css';
import Footer from "../Footer/Footer";
const Login = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const response = await axios.post('http://localhost:3001/auth/v1/login', values);
    try {
      if (response.data.status === 'success') {
        toast.success(response.data.message, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        localStorage.setItem("token",response.data.data.user.token);
        console.log(response);
        navigate('/dashboard');
      } else {
        toast.error(response.data.message, {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
    catch(error){
      console.error(error);
    }
  };

  return (
    <>
    <div className={styles.loginContainer}>
      <div className={styles.signupImage}>
        <img src={imr} alt="Signup"/>
      </div>
      <div className={styles.formContainer}>
        <Formik
          initialValues={initialValues}
          validationSchema={yup.object().shape({
            email: yup.string().email('Invalid email').required('Email is required').matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, 'Invalid email format'),
            password: yup
              .string()
              .min(8, 'Password must be at least 8 characters')
              .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
              .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special symbol')
              .required('Password is required'),
          })}
          onSubmit={handleSubmit}
        >
          <Form >
            <h1>Login Your Account</h1>
            <br/>
            <hr className={styles.formLine}/>
            <br/>
            <div className={styles.formGroup}>
              <label htmlFor="email">Enter Email</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <div className={styles.formGroup}>
              <Link to={'/'} className={styles.navigationLink}>SignUp</Link>
            </div>
            <div className={styles.formGroup}>
              <button type="submit">LOGIN</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
    <Footer/>
    </>
  );
};
export default Login;
