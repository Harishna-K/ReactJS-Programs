import React, { useState } from "react";
import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';

const SignUp = () => {
  const [userType, setUserType] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const validationSchema = Yup.object({
    fname: Yup.string()
      .required('first name is required')
      .matches(/^[A-Z][a-zA-Z\s]*$/, 'Full name must start with a capital letter and contain only letters and spaces')
      .max(30, 'Full name must be at most 30 characters'),
    lname: Yup.string()
      .required('last name is required')
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
  });

  const handleSubmit = (values) => {
    if (userType ==="Admin" && secretKey !== "AdarshT") {
      alert("Invalid Admin");
    } else {
      console.log(values);
      
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(values),
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
          alert("Registration Successful");
        } else {
          alert("Something went wrong");
        }
      });
    }
  };

  return (
    <Formik
      initialValues={{
        fname: '',
        lname: '',
        email: '',
        password: ''
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Form>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <h3>Sign Up</h3>
              <div>
                Register As
                <input
                  type="radio"
                  name="userType"
                  value="User"
                  onChange={(e) => setUserType(e.target.value)}
                />
                User
                <input
                  type="radio"
                  name="userType"
                  value="Admin"
                  onChange={(e) => setUserType(e.target.value)}
                />
                Admin
              </div>
              {userType === "Admin" && (
                <div className="mb-3">
                  <label>Secret Key</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Secret Key"
                    value={secretKey}
                    onChange={(e) => setSecretKey(e.target.value)}
                  />
                </div>
              )}

              <div className="mb-3">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  name="fname"
                  value={formik.values.fname}
                  onChange={formik.handleChange}
                />
                <ErrorMessage name="fname" component="div" className="form_error" />
              </div>

              <div className="mb-3">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  name="lname"
                  value={formik.values.lname}
                  onChange={formik.handleChange}
                />
                <ErrorMessage name="lname" component="div" className="form_error" />
              </div>

              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <ErrorMessage name="email" component="div" className="form_error" />
              </div>

              <div className="mb-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
                <ErrorMessage name="password" component="div" className="form_error" />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
                  Sign Up
                </button>
              </div>
              <p className="forgot-password text-right">
                Already registered <a href="/sign-in">sign in?</a>
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SignUp;
