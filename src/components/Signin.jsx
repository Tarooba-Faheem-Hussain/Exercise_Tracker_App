import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/login.png";
import Logo from "../assets/logo.png";

export default function Signin() {
  return (
    <div class="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat bg-[url('./assets/login.png')]">
    <div className="rounded-xl bg-gray-600 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div>
          <div className="mb-4 flex flex-col items-center">
            <img src={Logo}  />
          </div>         
          <form action="#" className=" flex flex-col item-center ">        
            <h2 className="text-4xl font-bold text-center text-white">
              SignIn
            </h2>
         
            <div class="mb-2 text-lg flex flex-col text-teal-200 py-2">
              <label for="uname" className="  text-white">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                className="rounded-3xl border-none  bg-teal-900 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                required
              />
            </div>

            <div class="mb-2 text-lg flex flex-col text-teal-200 ">
              <label for="uname" className="  text-white">
                <b>Password</b>
              </label>
              <input
                type="Password"
                name="name"
                placeholder="*********"
                className="rounded-3xl border-none  bg-teal-900 bg-opacity-70 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                required
              />
            </div>

            <div className="flex justify-between text-white py-2">
              <p className="flex">
                <input className="mr-2" type="checkbox" /> Remember me{" "}
              </p>
              <p>Forget Password? </p>
            </div>
            <div className=" flex justify-center text-lg text-black">
            <Link to="/Sidebar">
              <button
                className="w-40 my-3 py-2 text-white  bg-teal-900 rounded-3xl transition-colors duration-300 hover:bg-teal-500 "
                type="LogIn"
              >
                LogIn
              </button>
              </Link>
            </div>
            <div className="flex justify-center text-white py-2 ">
              <Link to="/Signup">
                <p>Create an account </p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
