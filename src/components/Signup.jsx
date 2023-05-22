import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/login.png";
import Logo from "../assets/logo.png";

export default function Signup() {
  return (
    <div class="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat bg-[url('./assets/login.png')]">
      <div className="rounded-xl bg-gray-600 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div>
          <div className="mb-4 flex flex-col items-center">
            <img src={Logo} w-50 h-50 />
          </div>
          <form action="#" className=" flex flex-col item-center ">  
            <h2 className="text-4xl font-bold text-center text-white">
              SignUp
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
                <b>Email</b>
              </label>
              <input
                type="text"
                placeholder="Enter Email"
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

            <div class="mt-8 flex justify-center text-lg text-black">
              <button
                type="SignUp"
                className="w-40 my-3 py-2 text-white  bg-teal-900 rounded-3xl transition-colors duration-300 hover:bg-teal-500"
              >
                SignUp
              </button>
             
            </div>
            <div className="flex justify-center text-white py-2">
                <p>
                  Already have an account? <Link to="/">SignIn.</Link>{" "}
                </p>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}
