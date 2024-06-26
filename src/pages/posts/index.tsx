import React, { useState } from "react";
import { MdComputer } from "react-icons/md";
import { FaCreditCard } from "react-icons/fa6";
import { BsSpeedometer } from "react-icons/bs";
import { IoMdPhonePortrait } from "react-icons/io";
import RegistrationForm from "../auth/register";
import LoginForm from "../auth/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: React.FC = () => {
  const [authMode, setAuthMode] = useState("login");

  return (
    <>
      <div className="font-bold text-gray-500 text-3xl mx-8 mt-8 text-center"></div>

      <div className="container grid w-2/3 grid-cols-12 gap-4 bg-green tail-flex tail-w">
        <div className="col-span-8 tail-w">
          <img
            className="h-60 w-full"
            src="data:image/jpeg;base64,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"
          ></img>
          <div>
            <h1 className="font-bold text-blue-500 text-2xl my-5 ">
              Rentec Pro Features
            </h1>
            <div className="grid grid-cols-12 gap-6 flex flex-wrap tail-flex">
              <div className="col-span-6 text-center pb-40 border border-gray-200 tail-w">
                <span className="font-bold text-gray-500 text-2xl">
                  Purpose section
                </span>
              </div>
              <div className="col-span-6 pb-40 text-center border border-gray-200 tail-w">
                <span className="font-bold text-gray-500 text-2xl ">
                  Features section
                </span>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4 flex flex-wrap tail-flex mt-4">
              <div className="col-span-6 mt-2 grid grid-cols-12 gap-4 tail-w">
                <div className="col-span-3 text-5xl text-blue-500">
                  <MdComputer />
                </div>
                <div className="col-span-9">
                  <h2 className="text-black-500 font-bold">
                    Title of the portal
                  </h2>
                  <p>
                    Creating safe AGI that benefits all of humanity. · Ask
                    ChatGPT anything · Research · Research{" "}
                  </p>
                </div>
              </div>
              <div className="col-span-6 mt-2 grid grid-cols-12 gap-4 tail-w">
                <div className="col-span-3 text-5xl text-blue-500">
                  <FaCreditCard />
                </div>
                <div className="col-span-9">
                  <h2 className="text-black-500 font-bold">
                    Title of the portal
                  </h2>
                  <p>
                    Creating safe AGI that benefits all of humanity. · Ask
                    ChatGPT anything · Research · Research{" "}
                  </p>
                </div>
              </div>
              <div className="col-span-6 mt-2 grid grid-cols-12 gap-4 tail-w">
                <div className="col-span-3 text-5xl text-blue-500">
                  <BsSpeedometer />
                </div>
                <div className="col-span-9">
                  <h2 className="text-black-500 font-bold">
                    Title of the portal
                  </h2>
                  <p>
                    Creating safe AGI that benefits all of humanity. · Ask
                    ChatGPT anything · Research · Research{" "}
                  </p>
                </div>
              </div>
              <div className="col-span-6 mt-2 grid grid-cols-12 gap-4 tail-w">
                <div className="col-span-3 text-5xl text-blue-500">
                  <IoMdPhonePortrait />
                </div>
                <div className="col-span-9">
                  <h2 className="text-black-500 font-bold">
                    Title of the portal
                  </h2>
                  <p>
                    Creating safe AGI that benefits all of humanity. · Ask
                    ChatGPT anything · Research · Research{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 tail-w">
          {authMode == "login" ? (
            <LoginForm setMode={setAuthMode} />
          ) : (
            <RegistrationForm setMode={setAuthMode} />
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
