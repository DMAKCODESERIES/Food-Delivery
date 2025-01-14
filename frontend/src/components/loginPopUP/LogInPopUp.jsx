import PropTypes from "prop-types";
import { useState } from "react";
import { assets } from "../../assets/assets";

const LogInPopUp = ({ setShowLogIn }) => {
  const [currentState, setCurrentState] = useState("SignUp");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
      {/* Popup Content */}
      <div className="bg-white p-6 shadow-lg rounded-md max-w-md w-full relative">
        {/* Close Button */}
        <img
          src={assets.cross_icon}
          alt="Close"
          className="w-6 h-6 object-contain cursor-pointer absolute top-4 right-4"
          onClick={() => setShowLogIn(false)}
        />

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          {currentState === "SignUp" ? "Create Account" : "Log In"}
        </h1>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Show Name Input for SignUp */}
          {currentState === "SignUp" && (
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}

          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Your Password"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Action Button */}
        <button className="w-full mt-6 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
          {currentState === "SignUp" ? "Create Account" : "Login"}
        </button>

        {/* Terms & Conditions */}
        <div className="mt-4 flex items-center">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            required
            className="mr-2"
          />
          <label htmlFor="rememberMe" className="text-sm text-gray-600">
            By continuing, I agree to the <span className="text-blue-500">terms and conditions</span>.
          </label>
        </div>

        {/* Switch Between LogIn & SignUp */}
        <div className="mt-4 text-center">
          {currentState === "SignUp" ? (
            <p>
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setCurrentState("LogIn")}
              >
                Log In
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => setCurrentState("SignUp")}
              >
                Sign Up
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

LogInPopUp.propTypes = {
  setShowLogIn: PropTypes.func.isRequired,
};

export default LogInPopUp;
