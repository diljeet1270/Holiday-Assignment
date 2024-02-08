import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Login.css'
import Button from '../../Button/Button';
const Login = () => {
    const navigate = useNavigate();
    const handleSubmit = async (values) => {
        try {
            let response = await axios.post('http://localhost:3001/admin/v1/login', values);
            console.log(response);
            navigate('/login')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email('Invalid email').required('Required'),
                password: Yup.string().required('Required')
            })}
            onSubmit={handleSubmit}
        >
            <Form>
                <div className="container">
                    <h1>Login</h1>
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
                    <Button label='Login' type="submit"/>
                    <p>Don't have any account? <a href='/' className='link'>Register</a></p>
                </div>
            </Form>
        </Formik>
    );
}

export default Login;
