import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import '../Login/Login.css'
import Button from '../../Button/Button';
const Signup = () => {
    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        try {
            let response = await axios.post('http://localhost:3001/admin/v1/signup', values);
            console.log(response);
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Formik
            initialValues={{
                fullName: "",
                email: "",
                password: "",
                confirmPassword: "",
            }}
            validationSchema={Yup.object().shape({
                fullName: Yup.string().required('Required'),
                email: Yup.string().email('Invalid email').required('Required'),
                password: Yup.string().required('Required'),
                confirmPassword:  Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
            })}
            onSubmit={handleSubmit}
        >
            <Form>
                <div className="container">
                    <h1>SignUp</h1>
                    <div>
                        <label htmlFor='fullname'>Full Name</label><br />
                        <Field name="fullName" id="fullName"  type="text" placeholder="Full Name"/><br/>
                        <ErrorMessage component="p" name="fullName" />
                    </div>
                    <div>
                        <label  htmlFor='email'>Email Address</label><br />
                        <Field type="text" id="email" name="email" placeholder="Email" />
                        <ErrorMessage name="email" component="p" />
                    </div>
                    <div>
                        <label  htmlFor='password'>Password</label><br />
                        <Field type="password" id="password" name="password" placeholder="Password" />
                        <ErrorMessage name="password" component="p" />
                    </div>
                    <div>
                        <label   htmlFor='confirmPassword'>Confirm Password</label><br />
                        <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />
                        <ErrorMessage  name="confirmPassword" component="p" />
                    </div>
                    <Button label='Register Now' type="submit"/>
                    <p>If you already have account <a href='/login' className='link'>Login</a></p>
                </div>
            </Form>
        </Formik>
    );
}

export default Signup;
