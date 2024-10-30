import React from "react";
import { Formik, Field, Form } from "formik";

const SignUpForm = () => {
  return (
    <Formik>
      <Form className="flex flex-col gap-5 w-[70%]">
        <h1>Sign up to continue</h1>
        <div className="flex flex-col space-y-1 ">
          <label htmlFor="email">Fullname</label>
          <Field
            type="email"
            id="email"
            name="email"
            className="border rounded"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="email">Password</label>
          <Field type="email" id="email" name="email" />
        </div>
        <div className="flex flex-col space-y-1">
          <label htmlFor="email">Confirm password</label>
          <Field type="email" id="email" name="email" />
        </div>
        <label>Gender</label>
        <div className="flex gap-4">
          <label>
            <Field type="radio" name="gender" value="male" />
            Male
          </label>
          <label>
            <Field type="radio" name="gender" value="male" />
            Female
          </label>
          <label>
            <Field type="radio" name="gender" value="male" />
            Other
          </label>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
