import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Signup() {
    const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  // Password match validation
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
    };
    // console.log(userInfo);
    axios.post("https://chat-app-backend-tau-lemon.vercel.app/api/user/signup", userInfo)
    .then((response) => {
    //   console.log(response.data);  
      if (response.data) {
        toast.success("Signup successful! Please login.");
      }       
      localStorage.setItem("ChatApp", JSON.stringify(response.data));
      setAuthUser(response.data); // Update auth context
    })
    .catch((error) => {
      if (error.response) {
        toast.error("Error: " + error.response.data.error);
        
      }
    });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-6 py-2 space-y-3 border border-white rounded-md w-[24%] bg-gray-900"
      >
        <h1 className="text-2xl text-center text-white">
          Chat <span className="font-semibold text-green-500">App</span>
        </h1>
        <h2 className="text-xl font-bold text-white">Signup</h2>
        {/* Fullname */}
        <label className="flex items-center gap-2 input input-bordered">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </g>
          </svg>
          <input
            type="text"
            placeholder="fullname"
            {...register("fullname", { required: true })}
            className="grow"
          />
        </label>
        {errors.fullname && (
          <span className="text-red-500">This field is required</span>
        )}
        {/* Email */}
        <label className="flex items-center gap-2 input input-bordered">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </g>
          </svg>
          <input
            type="email"
            placeholder="mail@example.com"
            {...register("email", { required: true })}
            className="grow"
          />
        </label>
        {errors.email && (
          <span className="text-red-500">This field is required</span>
        )}
        {/* Password */}
        <label className="flex items-center gap-2 input input-bordered">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="grow"
          />
        </label>
        {errors.password && (
          <span className="text-red-500">Password is required</span>
        )}
        {/* Confirm Password */}
        <label className="flex items-center gap-2 input input-bordered">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
              <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
            </g>
          </svg>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => value === watch("password"),
            })}
            className="grow"
          />
        </label>
        {errors.confirmPassword && (
          <span className="text-red-500">Passwords do not match</span>
        )}
        {/* Submit */}
        <div className="flex justify-between">
          <p className="text-white">
            Have an account?
            <Link to="/login" className="ml-1 text-blue-500 underline cursor-pointer">
              Login
            </Link>
          </p>
          <input
            type="submit"
            value="Signup"
            className="px-2 py-1 text-white bg-green-500 rounded-lg cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default Signup;
