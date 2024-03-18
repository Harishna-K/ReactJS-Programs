import React from "react";
import { Formik, Form, Field } from "formik";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./Signf.css";
import {Schemaf} from './Sche';
import { useNavigate } from "react-router-dom";

const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    country: "",
    phoneNumber: "",
};

const Signinf = () => {
    const navigate=useNavigate()
    const onSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };
    const handleSignInClick = () => {
        // Navigate to the Signin form
        navigate('/home');
      };
    return (
        <div className='app'>
            <Formik
                initialValues={initialValues}
                validationSchema={Schemaf}
                onSubmit={onSubmit}>
                     {({ errors, touched, values,setFieldValue }) => (
                    <Form className='signup_form'>
                        <label htmlFor='name'>Name</label>
                        <Field type='text' name='name' />
                        <div className='error_container'>
                            {errors.name && touched.name && (
                                <p className='form_error'>{errors.name}</p>
                            )}
                        </div>

                        <label htmlFor='email'>Email</label>
                        <Field type='email' name='email' />
                        <div className='error_container'>
                            {errors.email && touched.email && (
                                <p className='form_error'>{errors.email}</p>
                            )}
                        </div>

                        <label htmlFor='password'>Password</label>
                        <Field type='password' name='password' />
                        <div className='error_container'>
                            {errors.password && touched.password && (
                                <p className='form_error'>{errors.password}</p>
                            )}
                        </div>

                        <label htmlFor='cpassword'>Confirm Password</label>
                        <Field type='password' name='cpassword' />
                        <div className='error_container'>
                            {errors.cpassword && touched.cpassword && (
                                <p className='form_error'>{errors.cpassword}</p>
                            )}
                        </div>

                        <label htmlFor='phoneNumber'>Phone Number</label>
                        <Field
                            as={PhoneInputWithCountrySelect}
                            name="phoneNumber"
                            placeholder="Enter phone number"
                            error={touched.phoneNumber && errors.phoneNumber}
                            onChange={(value, country, event) => {
                                setFieldValue("phoneNumber", value);
                                setFieldValue("country", country); 
                                console.log(value, country, event);
                            }}
                        />

                        <button onClick={handleSignInClick} type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Signinf;