// import React from "react";
// import { Formik, Form, Field} from "formik";
// import "react-phone-number-input/style.css";
// import './Register.css';
// import computer from '../ATS PROJECT/computer.jpeg'
// import Ats from '../ATS PROJECT/Ats.jpeg'
// import { signupSchema } from "./Registeryup.js";

// const initialValues = {
//     name: "",
//     email: "",
//     password: "",
//     cpassword: "",
//     phoneNumber:"",
// };
// const Register = () => {      
//     const onSubmit = (values, actions) => {
//         console.log(values);
        
//         actions.resetForm();
//     };

//     return (

//         <div className='container-reg'>
//         <div className="col-1">
//               <img src={computer} alt="Register" />

//           </div>
//           <div className='col-2reg'>
//           <div align='center' style={{margin:'0px'}}>


//           <img src={Ats} alt="Atss"/>
//     </div>
    
//     <div>
//     <h2 align="center" style={{marginTop:'-35px'}}>Register</h2>
//     </div>
//             <Formik
//                 initialValues={initialValues}
//                 validationSchema={signupSchema}
//                 onSubmit={onSubmit}>
//                 {({ errors, touched }) => (

//                     <Form className='signup_form'>
                        
             
//         <div className='app'></div>
//                         <label htmlFor='name'>Name</label>
//                         <Field type='text' name='name' />
//                         <div className='error_container'>
//                             {errors.name && touched.name && (
//                                 <p className='form_error'>{errors.name}</p>
//                             )}
//                         </div>

//                         <label htmlFor='email'>Email</label>
//                         <Field type='email' name='email' />
//                         <div className='error_container'>
//                             {errors.email && touched.email && (
//                                 <p className='form_error'>{errors.email}</p>
//                             )}
//                         </div>

//                         <label htmlFor='password'>Password</label>
//                         <Field type='password' name='password' />
//                         <div className='error_container'>
//                             {errors.password && touched.password && (
//                                 <p className='form_error'>{errors.password}</p>
//                             )}
//                         </div>

//                         <label htmlFor='cpassword'>Confirm Password</label>
//                         <Field type='password' name='cpassword' />
//                         <div className='error_container'>
//                             {errors.cpassword && touched.cpassword && (
//                                 <p className='form_error'>{errors.cpassword}</p>
//                             )}
//                         </div>

//                         <label htmlFor='mobile'>Mobile Number</label>
//                         <Field type='text' name='mobile'/>
//                         <div className='error_container'>
//                             {errors.mobile && touched.mobile && (
//                                 <p className='form_error'>{errors.mobile}</p>
//                             )}
                        

//                         <button type='submit'>Register</button> </div>
//                     </Form>
//                 )}
                
//             </Formik>
//             </div>
//         {/* // </div> */}
//         </div>
        
//     );
// }

// export default Register;


import React from "react";
import { Formik, Form, Field } from "formik";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import './Register.css';
import computer from '../ATS PROJECT/computer.jpeg'
import Ats from '../ATS PROJECT/Ats.jpeg'
import { signupSchema } from "./Registeryup.js";

const initialValues = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    phoneNumber: "",
};

const Register = () => {
    const onSubmit = (values, actions) => {
        console.log(values);
        actions.resetForm();
    };
  
    return (
        <form action="/sign" method="POST" >
        <div className='container-reg'>
            <div className="col-1">
                <img src={computer} alt="Register" />
            </div>
            <div className='col-2reg'>
                <div align='center' style={{ margin: '0px' }}>
                    <img src={Ats} alt="Atss" />
                </div>
                <div>
                    <h2 align="center" style={{ marginTop: '-35px' }}>Register</h2>
                </div>
                <Formik
                    initialValues={initialValues}
                    validationSchema={signupSchema}
                    onSubmit={onSubmit}>
                    {({ errors, touched, setFieldValue }) => (
                        <Form className='signup_form' >
                            <div className='app'></div>
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

                            <div className="ph">
                            <label htmlFor='phoneNumber'>Mobile Number</label>
                            <Field
                                as={PhoneInput}
                                name="phoneNumber"
                                placeholder="Enter phone number"
                                error={touched.phoneNumber && errors.phoneNumber}
                                onChange={(value) => {
                                    setFieldValue("phoneNumber", value);
                                }}
                            /></div>
                            <button type='submit'>Register</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
        </form>
    );
}

export default Register;
