import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'
import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';

export default function Login() {
  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    password: Yup.string()
      .required('Password is required')
      // .min(12, 'Password must be at least 12 characters')
      .max(18, 'Password must be at most 18 characters')
      // .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{1,}$/, 'Password must contain at least one letter, one number, and one symbol'),
  });

  const handleSubmit = (values) => {
    console.log(values.email, values.password);
    fetch("http://localhost:5000/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userRegister");
      if (data.status === "ok") {
        alert("login successful");
        window.localStorage.setItem("token", data.data);
        window.localStorage.setItem("loggedIn", true);
        window.location.href = "./userDetails";
      }
    });
  }

  return (
    <Formik
      initialValues={{
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
              <h3>Sign In</h3>
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
              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">
                    Remember me
                  </label>
                </div>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
              <p className="forgot-password text-right">
                <a href="/sign-up">Sign Up</a>
              </p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
