import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Preferences.module.css";
import axios from 'axios';
import {toast} from 'react-toastify';
import CustomToggleButton from "../Switch/CustomToggleButton";
import { FaArrowLeftLong } from "react-icons/fa6";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../header/Header";
import Footer from "../Footer/Footer";
const Preferences = () => {
  let token = localStorage.getItem("token");
  const initialValues = {
    language: "",
    breakfast: "",
    lunch: "",
    dinner: "",
    wakeTime: "",
    bedTime: "",
    weight: "",
    height: "",
    bloodGlucose: "",
    cholestrol: "",
    bloodPressure: "",
    distance: "",
    systemEmails: false,
    memberServiceEmails: false,
    sms: false,
    phoneCall: false,
    post: false,
  };

  const validationSchema = Yup.object().shape({
    language: Yup.string().required("Language is required"),
    // breakfast: Yup.string().required("Breakfast is required"),
    // lunch: Yup.string().required("Lunch is required"),
    // dinner: Yup.string().required("Dinner is required"),
    // wakeTime: Yup.string().required("Wake Time is required"),
    // bedTime: Yup.string().required("Bed Time is required"),
    // weight: Yup.string().required("Weight is required"),
    // height: Yup.string().required("Height is required"),
    // bloodGlucose: Yup.string().required("Blood Glucose is required"),
    // cholestrol: Yup.string().required("Cholesterol is required"),
    // bloodPressure: Yup.string().required("Blood Pressure is required"),
    // distance: Yup.string().required("Distance is required"),
  });

  const handleSubmit = async (values, { setFieldValue }) => {
    try{
      let response = await axios.put("http://localhost:3001/auth/v1/preferences", values,{
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
};
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
       {({ values, handleSubmit, setFieldValue }) => (
        <div className={styles.gridContainer}> 
        <Sidebar/>
        <Header/>
        <p className={styles.heading}>
        <a href="/dashboard">
          <FaArrowLeftLong />
        </a>
        Preferences
      </p>
      <Form className={styles.formContainer}>
        <div className={styles.inputFieldContainer}>
          <label htmlFor="language">Language</label>
          <Field as="select" name="language" className={styles.inputField}>
            <option value="">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Dogri">Dogri</option>
            <option value="Punjabi">Punjabi</option>
          </Field>
          <ErrorMessage name="language" component="div" />
        </div>

        <div className={styles.inputFieldContainer}>
          <label htmlFor="breakfast">Breakfast</label>
          <Field type="time" name="breakfast" className={styles.inputField} />
          <ErrorMessage name="breakfast" component="div" />
        </div>

        <div className={styles.inputFieldContainer}>
          <label htmlFor="lunch">Lunch</label>
          <Field type="time" name="lunch" className={styles.inputField} />
          <ErrorMessage name="lunch" component="div" />
        </div>
        <div className={styles.inputFieldContainer}>
          <label htmlFor="dinner">Dinner</label>
          <Field type="time" name="dinner" className={styles.inputField} />
          <ErrorMessage name="dinner" component="div" />
        </div>
        <div className={styles.inputFieldContainer}>
          <label htmlFor="wakeTime">Wake Time</label>
          <Field type="time" name="wakeTime" className={styles.inputField} />
          <ErrorMessage name="wakeTime" component="div" />
        </div>
        <div className={styles.inputFieldContainer}>
          <label htmlFor="bedTime">Bed Time</label>
          <Field type="time" name="bedTime" className={styles.inputField} />
          <ErrorMessage name="bedTime" component="div" />
        </div>

        {/* Radio buttons */}

        <div className={styles.inputFieldContainer}>
          <label>Weight</label>
          <Field type="radio" name="weight" value="kg" className={styles.inputFieldRadio}/>
          <span>Kg</span>
          <Field type="radio" name="weight" value="lbs" className={styles.inputFieldRadio}/>
          <span>Lbs</span>
          <ErrorMessage name="weight" component="div" />
        </div>
        <div className={styles.inputFieldContainer}>
          <label>Height</label>
          <Field type="radio" name="height" value="cm" className={styles.inputFieldRadio}/>
          <span>Cm</span>
          <Field type="radio" name="height" value="ft/inches" className={styles.inputFieldRadio}/>
          <span>ft/inches</span>
          <ErrorMessage name="height" component="div" />
        </div>
        <div className={styles.inputFieldContainer}>
          <label>Blood Glucose</label>
          <Field type="radio" name="bloodGlucose" value="mmo/l" className={styles.inputFieldRadio}/>
          <span>mmo/l</span>
          <Field type="radio" name="bloodGlucose" value="mg/dl" className={styles.inputFieldRadio}/>
          <span>mg/dl</span>
          <ErrorMessage name="bloodGlucose" component="div" />
        </div>
        <div className={styles.inputFieldContainer}>
          <label>Cholestrol</label>
          <Field type="radio" name="cholestrol" value="mmo/l" className={styles.inputFieldRadio}/>
          <span>mmo/l</span>
          <Field type="radio" name="cholestrol" value="mg/dl" className={styles.inputFieldRadio}/>
          <span>mg/dl</span>
          <ErrorMessage name="cholestrol" component="div" />
        </div>
        <div className={styles.inputFieldContainer}>
          <label>Blood Pressure</label>
          <Field type="radio" name="bloodPressure" value="kPa" className={styles.inputFieldRadio}/>
          <span>kPa</span>
          <Field type="radio" name="bloodPressure" value="mmHg" className={styles.inputFieldRadio}/>
          <span>mmHg</span>
          <ErrorMessage name="bloodPressure" component="div" />
        </div>
        <div className={styles.inputFieldContainer}>
          <label>Distance</label>
          <div className={styles.radioItems}>
          <div><Field type="radio" name="distance" value="km" className={styles.inputFieldRadio}/>
          <span>km</span></div>
          <div><Field type="radio" name="distance" value="miles" className={styles.inputFieldRadio}/>
          <span>miles</span></div>
          </div>
          <ErrorMessage name="distance" component="div" />
        </div>
        <hr className={styles.formLine}/>
        <div className={styles.headings}>
          <p>Communication Type</p>
        </div>
        <hr className={styles.formLine}/>
        {/* Toggle buttons starts. */}
        <div className={styles.inputFieldContainer}>
          <div className={styles.radioItems}>
          <div className={styles.toggleSpace}>
            <label htmlFor="systemEmails">System Emails</label></div>
          <div className={styles.toggleSpace}>
            <CustomToggleButton
              field={{
                name: 'systemEmails',
                value: values.systemEmails,
              }}
              form={{
                setFieldValue,
              }}
            /></div>
          </div>
        </div>
        <div className={styles.inputFieldContainer}>
          <div className={styles.radioItems}>
          <div className={styles.toggleSpace}><label htmlFor="memberServiceEmails">Member Service Emails</label> </div>
          <div className={styles.toggleSpace}>
          <CustomToggleButton field={{
                name: 'memberServiceEmails',
                value: values.memberServiceEmails,
              }}
              form={{
                setFieldValue,
              }}
            />
          </div>
          </div>
        </div>
        <div className={styles.inputFieldContainer}>
        <div className={styles.radioItems}>
          <div className={styles.toggleSpace}><label htmlFor="sms">SMS</label></div>
          <div className={styles.toggleSpace}>
          <CustomToggleButton
              field={{
                name: 'sms',
                value: values.sms,
              }}
              form={{
                setFieldValue,
              }}
            />
          </div>
          </div> 
         </div>
        <div className={styles.inputFieldContainer}>
        <div className={styles.radioItems}>
          <div className={styles.toggleSpace}>
          <label htmlFor="phoneCall">Phone Call</label>
          </div>
          <div className={styles.toggleSpace}>
            <CustomToggleButton
              field={{
                name: 'phoneCall',
                value: values.phoneCall,
              }}
              form={{
                setFieldValue,
              }}
            />
            </div>
            </div>
        </div>
        <div className={styles.inputFieldContainer}>
        <div className={styles.radioItems}>
          <div className={styles.toggleSpace}>
          <label htmlFor="post">Post</label>
          </div>
          <div className={styles.toggleSpace}><CustomToggleButton
              field={{
                name: 'post',
                value: values.post,
              }}
              form={{
                setFieldValue,
              }}
            />
            </div>
        </div>
        </div>
        <div className={styles.submitButton}>
          <button type="submit">Update</button>
        </div>
      </Form>
      <Footer/>
      </div>
       )}
    </Formik>
  );
};

export default Preferences;
