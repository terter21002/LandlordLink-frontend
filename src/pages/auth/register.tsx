import React, { useState, useEffect } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

const RegistrationForm: React.FC<{ setMode: Function }> = (props: {
  setMode: Function;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [isAccreditedInvestor, setIsAccreditedInvestor] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { handleOAuthLogin } = useAuth();
  const [isOAuth, setIsOAuth] = useState(false);

  const validateForm = () => {
    let validationErrors: { [key: string]: string } = {};

    if (!username) validationErrors.username = "Username is required";
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Email is invalid";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    } else if (
      password.length < 8 ||
      !/[a-zA-Z]/.test(password) ||
      !/[0-9]/.test(password) ||
      !/[!@#$%^&*]/.test(password)
    ) {
      validationErrors.password =
        "Password must be at least 8 characters long and include a letter, a number, and a special character";
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }
    if (!propertyAddress)
      validationErrors.propertyAddress = "Property address is required";
    if (!isAccreditedInvestor)
      validationErrors.isAccreditedInvestor =
        "Accredited investor status is required";
    if (!referralSource)
      validationErrors.referralSource = "Referral source is required";

    setErrors(validationErrors);

    return Object.keys(validationErrors).length === 0;
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    const user = JSON.parse(decodeURIComponent(params.get("user") as string));

    if (token && user) {
      handleOAuthLogin(user, token);
      toast.success("Login successful");
      navigate(location.pathname, { replace: true });
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isOAuth);
    if (isOAuth) return;

    if (!validateForm()) {
      toast.error("Please fix the validation errors before submitting");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          username,
          email,
          password,
          confirmPassword,
          propertyAddress,
          isAccreditedInvestor,
          referralSource,
        }
      );
      toast.success("Registration successful!");
      props.setMode("login");
    } catch (error: any) {
      console.error(error);
      toast.error("Registration failed: " + error.response.data.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      console.log(isOAuth);
      setIsOAuth(true);
      window.location.href = "http://localhost:5000/api/auth/google";
      //await handleOAuthLogin();
    } catch (error: any) {
      console.error("Google login error:", error.message);
      console.log(error);
      toast.error("Failed to login with Google");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto">
      <div className="grid grid-cols-12 gap-4 mb-3">
        <button
          className="col-span-6 text-white bg-blue-400 hover:bg-blue-500 flex items-center p-2 justify-center font-bold"
          onClick={handleGoogleLogin}
        >
          {" "}
          <FaGoogle className="mr-3" />
          Continue With Google
        </button>
        <button className="col-span-6 text-white bg-blue-400 hover:bg-blue-500 flex items-center p-2 justify-center font-bold">
          <FaApple className="mr-3"></FaApple>Continue With Apple
        </button>
      </div>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700"
        >
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`mt-1 p-2 block w-full border ${
            errors.username ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        />
        {errors.username && (
          <p className="text-red-500 text-sm">{errors.username}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`mt-1 p-2 block w-full border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`mt-1 p-2 block w-full border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-gray-700"
        >
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={`mt-1 p-2 block w-full border ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
        )}
      </div>

      <div className="mb-4">
        <label
          htmlFor="propertyAddress"
          className="block text-sm font-medium text-gray-700"
        >
          Property Address:
        </label>
        <input
          type="text"
          id="propertyAddress"
          value={propertyAddress}
          onChange={(e) => setPropertyAddress(e.target.value)}
          className={`mt-1 p-2 block w-full border ${
            errors.propertyAddress ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        />
        {errors.propertyAddress && (
          <p className="text-red-500 text-sm">{errors.propertyAddress}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="isAccreditedInvestor"
          className="block text-sm font-medium text-gray-700"
        >
          Are you an accredited investor?
        </label>
        <input
          type="text"
          id="isAccreditedInvestor"
          value={isAccreditedInvestor}
          onChange={(e) => setIsAccreditedInvestor(e.target.value)}
          className={`mt-1 p-2 block w-full border ${
            errors.isAccreditedInvestor ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        />
        {errors.isAccreditedInvestor && (
          <p className="text-red-500 text-sm">{errors.isAccreditedInvestor}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="referralSource"
          className="block text-sm font-medium text-gray-700"
        >
          How did you hear about LandordLink?
        </label>
        <input
          type="text"
          id="referralSource"
          value={referralSource}
          onChange={(e) => setReferralSource(e.target.value)}
          className={`mt-1 p-2 block w-full border ${
            errors.referralSource ? "border-red-500" : "border-gray-300"
          } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
        />
        {errors.referralSource && (
          <p className="text-red-500 text-sm">{errors.referralSource}</p>
        )}
      </div>
      <div className="flex justify-between items-center">
        <p className=" text-gray-800">Already have one?</p>
        <button
          className="text-blue-400 font-bold mr-2 text-xl"
          onClick={() => props.setMode("login")}
        >
          Go to Login
        </button>
      </div>
      <button
        type="submit"
        className="w-full bg-indigo-600 mt-12 text-white p-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
