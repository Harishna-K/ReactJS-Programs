import React from 'react';
import { useForm } from 'react-hook-form';

const SignUpForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can send the form data to your backend for further processing
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="fullName">Full name</label>
        <input type="text" id="fullName" {...register('fullName', { required: true, maxLength: 30, pattern: /^[a-z]+$/ })} />
        {errors.fullName && <p>Full name is required and should contain only lowercase letters (max 30 characters).</p>}
      </div>
      <div>
        <label htmlFor="companyName">Company name</label>
        <input type="text" id="companyName" {...register('companyName', { required: true, maxLength: 100 })} />
        {errors.companyName && <p>Company name is required (max 100 characters).</p>}
      </div>
      <div>
        <label htmlFor="email">Work email</label>
        <input type="email" id="email" {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/ })} />
        {errors.email && <p>Valid email address is required.</p>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register('password', { required: true, minLength: 12, maxLength: 18 })} />
        {errors.password && <p>Password is required (12-18 characters).</p>}
      </div>
      <button type="submit">Sign up</button>
    </form>
  );
};

export default SignUpForm;
