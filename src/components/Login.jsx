import React from "react";
import { useForm } from "react-hook-form";
import {api} from "../utils/axios";
import { useAuth } from "../context/AuthProvider";
import cookies from 'js-cookie';
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function Login() {
    const [authUser, setAuthUser] = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    // console.log(userInfo);
    await api.post("/api/user/login", userInfo)
    .then((response) => {
    //   console.log(response.data);  
      if (response.data) {
       toast.success("Login successful!");
      }    
      localStorage.setItem("ChatApp", JSON.stringify(response.data));
      
       setAuthUser(response.data); 
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
        <h2 className="text-xl font-bold text-white">Login</h2>
        {/* Email input */}
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
            {...register("email", { required: "Email is required" })}
            className="grow"
          />
        </label>
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
        {/* Password input */}
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
            {...register("password", { required: "Password is required" })}
            className="grow"
          />
        </label>
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
        {/* Submit button */}
        <div className="flex justify-between">
          <p className="text-white">
            New User?
            <Link to="/signup" className="ml-1 text-blue-500 underline cursor-pointer">
              Signup
            </Link>
          </p>
          <input
            type="submit"
            value="Login"
            className="px-2 py-1 text-white bg-green-500 rounded-lg cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
