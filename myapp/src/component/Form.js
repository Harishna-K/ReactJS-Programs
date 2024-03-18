import React from 'react'
import imaa from '../imaa.png'
import { Formik,Field } from "formik";
import { Regi } from './reg';
import PhoneInputWithCountrySelect from "react-phone-number-input";
// import { useForm } from 'react-hook-form';


import './Ats.css'
const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    country: "",
    phoneNumber: "",
};


    // const Form = () => {
       

    // const handleSubmit = ()=>{
    // const onSubmit = data => console.log(data);
    // }
    
    const Form = () => {
        const onSubmit = data => console.log(data);
    
        const handleSubmit = () => {
            // Your handleSubmit logic goes here
        }
    
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>register and enjoy the service</span>
                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    {/* <input type="text" {...register("username")} placeholder='username' />
                    <input type="text" {...register("password")} placeholder='password' />
                    <input type="text" {...register("confirmpwd")} placeholder='confirm password' />
                    <input type="text" {...register("mobile", { required : true, maxLength: 10 })} placeholder='mobile number' />
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button className='btn'>Sign In</button> */}
                    <Formik
                initialValues={initialValues}
                validationSchema={Regi}
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

                        <button onClick={handleSubmit} type='submit'>Submit</button>
                    </Form>
                )}
            </Formik>
                </form>

            </div>
            <div className="col-2">
                <img src={imaa} alt="" />
            </div>
        </div>
    </section>
  )
}
export default Form;