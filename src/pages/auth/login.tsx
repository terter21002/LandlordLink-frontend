import React, { useState } from "react";
import { FaGoogle, FaApple } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../AuthContext";

const LoginForm: React.FC<{ setMode: Function }> = (props: {
  setMode: Function;
}) => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password); // Call login from context
      toast.success("Login successful");
    } catch (error: any) {
      console.error("Login error:", error.message);
      toast.error("Failed to login");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-5xl mx-auto mt-8">
      <div className="grid grid-cols-12 gap-4 mt-8 my-3">
        <button className="col-span-6 text-white bg-blue-400 flex items-center p-2 justify-center font-bold">
          {" "}
          <FaGoogle className="mr-3" />
          Continue With Google
        </button>
        <button className="col-span-6 text-white bg-blue-400 flex items-center p-2 justify-center font-bold">
          <FaApple className="mr-3"></FaApple>Continue With Apple
        </button>
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
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
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
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="flex justify-between items-center">
        <p className="mb-3 text-gray-800">Forgot your password?</p>
        <span
          className="text-blue-400 font-bold text-xl mr-2 "
          onClick={() => props.setMode("register")}
        >
          Register
        </span>
      </div>
      <button
        type="submit"
        className="w-full font-bold bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
