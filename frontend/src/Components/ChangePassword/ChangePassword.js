import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Footer from "../Footer/Footer";
import styles from "./ChangePassword.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header/Header";
import { FaArrowLeftLong } from "react-icons/fa6";
const ChangePassword = () => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  let initialValues = {
    oldPassword: "",
    newPassword: "",
    repeatNewPassword: "",
  };
  const handleSubmit = async (values) => {
   
    axios.put('http://localhost:3001/auth/v1/changepassword', values, {
      headers: {
          'Authorization': `Bearer ${token}`,
      },
  })
      .then(response => {
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
              navigate('/login');
          } else if (response.data.status === 'error') {
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
      })
      .catch(error => {
        toast.error('An error occurred', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      });
          console.error(error);
      });
  
  };
  return (
    <div className={styles.gridContainer}>
      <Sidebar />
      <Header />
      <p className={styles.heading}>
        <a href="/dashboard">
          <FaArrowLeftLong />
        </a>
        Change Password
      </p>
      <div className={styles.content}>
        <Formik
          validationSchema={yup.object().shape({
            oldPassword: yup.string().required("Required"),
            newPassword: yup
              .string()
              .min(8, "Password must be at least 8 characters")
              .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
              .matches(
                /[!@#$%^&*(),.?":{}|<>]/,
                "Password must contain at least one special symbol"
              )
              .test('not-equal-to-old', 'New password must not be equal to old password', function (value) {
                const oldPassword = this.parent.oldPassword;
                return value !== oldPassword;
              })
              .required("Password is required"),
            repeatNewPassword: yup
              .string()
              .oneOf([yup.ref("newPassword"), null], "Passwords must match"),
          })}
          onSubmit={handleSubmit}
          initialValues={initialValues}
        >
          <Form>
            <div className={styles.formGroup}>
            <label htmlFor="oldPassword">Old Password</label>
            <Field type="password" name="oldPassword" placeholder="Old password" />
            <ErrorMessage component="div" name="oldPassword" />
            </div>
            <div className={styles.formGroup}>
            <label htmlFor="newPassword">New Password</label>
            <Field type="password" name="newPassword" placeholder="New Password" />
            <ErrorMessage component="div" name="newPassword" />
            </div>
           
            <div className={styles.formGroup}>
            <label htmlFor="repeatNewPassword">Confirm Password</label>
            <Field type="password" name="repeatNewPassword" placeholder="Re write new password" />
            <ErrorMessage component="div" name="newPassword" />
            </div>
            <div className={styles.formGroup}>
              <button type="submit">Update</button>
            </div>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  );
};
export default ChangePassword;
