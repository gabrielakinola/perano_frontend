import { Formik, Form, Field } from "formik";
import React from "react";

const LoginForm = () => {
  return (
    <Formik>
      <Form>
        <h1>Welcome to Perano</h1>
        <h1>Login to continue</h1>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <Field type="email" id="email" name="email" />
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
