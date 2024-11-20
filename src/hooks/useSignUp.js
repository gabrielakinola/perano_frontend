import { useState } from "react";
//import useNavigate to navigate to verify email page on signup success
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useSignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signUp = async (values) => {
    //Set loading to true to show loading spinner
    try {
      setLoading(true);

      //Make API call to sign up user
      const response = await fetch("/api/v1/auth/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      const data = await response.json();

      sessionStorage.setItem("verificationToken", data.verificationToken);
      toast.success(`Verification email sent to ${values.email}`);
      navigate("/auth/verify-email");
    } catch (error) {
      //Set loading to false to hide loading spinner
      toast.error(error.message);
    } finally {
      //Set loading to false to hide loading spinner
      // setLoading(false);
    }
  };
  return { signUp, loading };
};

export { useSignUp };
