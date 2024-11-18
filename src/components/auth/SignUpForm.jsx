import { Formik, Field, Form, ErrorMessage } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import * as Yup from "yup";
import { useSignUp } from "../../hooks/useSignUp";
import { ClipLoader } from "react-spinners";

const SignUpForm = () => {
  // Define state to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const { signUp, loading } = useSignUp();

  // Define validation schema
  const signUpSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Fullname cannot be less than 2 characters")
      .max(50, "Fullname cannot be more than 50 characters")
      .required("Fullname is required"),
    email: Yup.string().email().required("Email is required"),
    gender: Yup.string().required("Gender is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "Password must be at least 8 characters and include at least a letter and number"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm password` is required"),
  });

  //Define submit handler
  const signUpSubmitHandler = (values) => {
    signUp(values);
  };
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        gender: "",
      }}
      onSubmit={signUpSubmitHandler}
      // Pass the schema to validate the form
      validationSchema={signUpSchema}
      //Set validateOnChange to true to validate the form on change
      validateOnChange={true}
    >
      {({ errors, touched }) => (
        //errors hold the validation errors of each field as an object
        //touched hold the state of each field if it has been touched
        <Form className="flex flex-col gap-5 w-[70%]">
          <h1>Sign up to continue</h1>
          <div className="flex flex-col space-y-1 ">
            <label htmlFor="fullName">Fullname</label>
            <Field
              type="text"
              id="fullName"
              name="fullName"
              className={`border rounded ${
                errors.fullName && touched.fullName ? "border-red-500" : ""
              } ${
                touched.fullName && !errors.fullName ? "border-[#61459E]" : ""
              }`}
            />
            <ErrorMessage
              name="fullName"
              component="p"
              className="text-red-500"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className={`border rounded ${
                errors.email && touched.email ? "border-red-500" : ""
              } ${touched.email && !errors.email ? "border-[#61459E]" : ""}`}
            />
            <ErrorMessage name="email" component="p" className="text-red-500" />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="password">Password</label>
            <div className="relative ">
              <Field
                type={`${showPassword ? "text" : "password"}`}
                id="password"
                name="password"
                className={`border w-full rounded ${
                  errors.password && touched.password ? "border-red-500" : ""
                } ${
                  touched.password && !errors.password ? "border-[#61459E]" : ""
                }`}
              />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute top-1.5 right-2"
                  onClick={() => {
                    setShowPassword(false);
                  }}
                />
              ) : (
                <FaEye
                  className="absolute top-1.5 right-2"
                  onClick={() => {
                    setShowPassword(true);
                  }}
                />
              )}
            </div>

            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label htmlFor="confirmPassword">Confirm password</label>
            <div className="relative">
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`border w-full rounded ${
                  errors.confirmPassword && touched.confirmPassword
                    ? "border-red-500"
                    : ""
                } ${
                  touched.confirmPassword && !errors.confirmPassword
                    ? "border-[#61459E]"
                    : ""
                }`}
              />
              <FaEye className="absolute top-1.5 right-2" />
            </div>

            <ErrorMessage
              name="confirmPassword"
              component="p"
              className="text-red-500"
            />
          </div>
          <label>Gender</label>
          <div className="flex gap-4">
            <label>
              <Field type="radio" name="gender" value="male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="female" />
              Female
            </label>
            <ErrorMessage
              name="gender"
              component="p"
              className="text-red-500"
            />
          </div>
          <button
            type="submit"
            className={` border-none rounded-sm text-white h-[50px] ${
              loading ? "bg-slate-300" : "bg-[#61459E]"
            } `}
            disabled={loading}
          >
            <span>
              {loading ? <ClipLoader color="#61459E" size={30} /> : "Sign up"}
            </span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
