// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import './styles.css';

// const SignUpForm = () => {
//   const initialValues = {
//     fullName: '',
//     email: '',
//     password: '',
//     companyName: ''
//   };

//   const validationSchema = Yup.object({
//     fullName: Yup.string()
//     .required('Full name is required')
//     .matches(/^[A-Z][a-zA-Z\s]*$/, 'Full name must start with a capital letter and contain only letters and spaces')
//     .max(30, 'Full name must be at most 30 characters'),
//   email: Yup.string()
//     .required('Email is required')
//     .email('Invalid email address'),
//   password: Yup.string()
//     .required('Password is required')
//     .min(12, 'Password must be at least 12 characters')
//     .max(18, 'Password must be at most 18 characters')
//     .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{1,}$/, 'Password must contain at least one letter, one number, and one symbol'),
//   companyName: Yup.string()
//     .required('Company name is required')
//     .max(100, 'Company name must be at most 100 characters')

//   });

//   const onSubmit = async (values, { setSubmitting, resetForm }) => {
//     try {
//       const response = await axios.post('/api/signup', values); 
//       console.log(response.data); 
//       console.log(values); 
//       resetForm(); 
//       alert('A verification code has been sent to your email address.');
//     } catch (error) {
//       console.error(error);  
//       alert('An error occurred during signup. Please try again later.');
//     }
//     setSubmitting(false); 
//   };
  
//   return (
//     <div className='form'>
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={onSubmit}
//       >
//         {formik => (
//           <Form>
//             <div className='form_container'>
//               <h2 align="center">SIGN UP</h2>
//               <div className="form_group">
//                 <label htmlFor="fullName">Full name</label>
//                 <Field type="text" id="fullName" name="fullName" placeholder="First name and last name" className={`form_input ${formik.errors.fullName && 'error'}`} />
//                 <ErrorMessage name="fullName" component="div" className="form_error" />
//               </div>
//               <div className="form_group">
//                 <label htmlFor="password">Password</label>
//                 <Field type="password" id="password" name="password" placeholder="At least 12 characters" className={`form_input ${formik.errors.password && 'error'}`} />
//                 <ErrorMessage name="password" component="div" className="form_error" />
//               </div>
//               <div className="form_group">
//                 <label htmlFor="companyName">Company name</label>
//                 <Field type="text" id="companyName" name="companyName" placeholder="Your company name" className={`form_input ${formik.errors.companyName && 'error'}`} />
//                 <ErrorMessage name="companyName" component="div" className="form_error" />
//               </div>
//               <div className="form_group">
//                 <label htmlFor="email">Work email</label>
//                 <Field type="email" id="email" name="email" placeholder="youremail@company.com" className={`form_input ${formik.errors.email && 'error'}`} />
//                 <ErrorMessage name="email" component="div" className="form_error" />
//               </div>

//               <button type="submit" className="form_button" disabled={formik.isSubmitting}>Sign up</button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default SignUpForm;

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './styles.css';

const SignUpForm = () => {
  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    companyName: ''
  };

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required('Full name is required')
      .matches(/^[A-Z][a-zA-Z\s]*$/, 'Full name must start with a capital letter and contain only letters and spaces')
      .max(30, 'Full name must be at most 30 characters'),
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    password: Yup.string()
      .required('Password is required')
      .min(12, 'Password must be at least 12 characters')
      .max(18, 'Password must be at most 18 characters')
      .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{1,}$/, 'Password must contain at least one letter, one number, and one symbol'),
    companyName: Yup.string()
      .required('Company name is required')
      .max(100, 'Company name must be at most 100 characters')
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('/api/signup', values);
      console.log(response.data);
      resetForm();
      alert('A verification code has been sent to your email address.');
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Server responded with error status:', error.response.status);
        console.error('Error response data:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received from server:', error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error setting up request:', error.message);
      }
      alert('An error occurred during signup. Please try again later.');
    }
    setSubmitting(false);
  };
  

  return (
    <div className='form'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form>
            <div className='form_container'>
              <h2 align="center">SIGN UP</h2>
              <div className="form_group">
                <label htmlFor="fullName">Full name</label>
                <Field type="text" id="fullName" name="fullName" placeholder="First name and last name" className={`form_input ${formik.errors.fullName && 'error'}`} />
                <ErrorMessage name="fullName" component="div" className="form_error" />
              </div>
              <div className="form_group">
                <label htmlFor="password">Password</label>
                <Field type="password" id="password" name="password" placeholder="At least 12 characters" className={`form_input ${formik.errors.password && 'error'}`} />
                <ErrorMessage name="password" component="div" className="form_error" />
              </div>
              <div className="form_group">
                <label htmlFor="companyName">Company name</label>
                <Field type="text" id="companyName" name="companyName" placeholder="Your company name" className={`form_input ${formik.errors.companyName && 'error'}`} />
                <ErrorMessage name="companyName" component="div" className="form_error" />
              </div>
              <div className="form_group">
                <label htmlFor="email">Work email</label>
                <Field type="email" id="email" name="email" placeholder="youremail@company.com" className={`form_input ${formik.errors.email && 'error'}`} />
                <ErrorMessage name="email" component="div" className="form_error" />
              </div>

              <button type="submit" className="form_button" disabled={formik.isSubmitting}>Sign up</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;
