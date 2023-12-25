import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../Signup/Signup.css";
import imr from '../../assets/LogoImage.jpg'
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Login/Login.css'
import Footer from "../Footer/Footer";
const Login = () => {
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
    <div className="signup-container">
      <div className="signup-image">
        <img src={imr} alt="Signup"/>
      </div>
      <div className="form-container">
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
          <Form className="login-container">
            <h1>Login Your Account</h1>
            <br/>
            <hr className="form-line"/>
            <br/>
            <div className="form-group">
              <label htmlFor="email">Enter Email</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className='form-group'>
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
              />
              <ErrorMessage name="password" component="div" />
            </div>
            <div className="form-group">
              <Link to={'/'} className="navigation-link">SignUp</Link>
            </div>
            <div className='form-group'>
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
