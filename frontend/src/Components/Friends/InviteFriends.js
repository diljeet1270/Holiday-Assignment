import React from "react";
import styles from "./InviteFriends.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../Button/Button";
import * as yup from 'yup';

const InviteFriends = () => {
    const initialValues = {
        fullName: "",
        email: "",
        meassage: "",
      };
    const handleSubmit = (values) => {
        console.log(values)
    }
  return (
    <div className={styles.gridContainer}>
      <Sidebar />
      <Header />
      <p className={styles.heading}>
        <a href="/friends">
          <FaArrowLeftLong />
        </a>
        Friends
        <p>Invites some friends Jasmine, show them your Waves and let’s see
            what they can do!</p>
      </p>
      <div className={styles.inviteFriends}>
      <Formik
          initialValues={initialValues}
          validationSchema={yup.object().shape({
          })}
          onSubmit={handleSubmit}
        >
          <Form >
            <div className={styles.formGroup}>
              <label htmlFor="fullName">Full Name</label>
              <Field type="text" id="fullName" name="fullName" />
              <ErrorMessage name="fullName" component="div" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <Field type="text" id="email" name="email" />
              <ErrorMessage name="email" component="div" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="">Message</label>
              <Field
                type="message"
                id="message"
                name="message"
              />
              <ErrorMessage name="message" component="div" />
            </div>
            <div className={styles.formGroup}>
              <Button type="submit" label="Invite"/>
            </div>
          </Form>
        </Formik>
      </div>
      <Footer />
    </div>
  );
};
export default InviteFriends;
