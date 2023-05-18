import React from "react";
import {Link} from "react-router-dom"
import loginImg from "../assets/login.png";

export default function Signin() {
  return (
    <div className="bg-[url('./assets/login.png')]  h-screen bg-no-repeat w-full object-fill bg-cover ">
      {/* <div>
        <img className=" h-screen w-full object-fill" src={loginImg} alt="" />
      </div> */}

     
        <form className="max-w-[400px] w-full mx-auto bg-gray-200 p-10 px-10 rounded-lg">
          <h2 className="text-4xl font-bold text-center">SignIn</h2>

          <div className="flex flex-col text-gray-600 py-2">
            <label for="uname" className=" text-gray-600 ">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              className="rounded-lg bg-green-800 p-2 mt-2 focus:border-green-500 focus:bg-gray-300 focus:outline-none  "
              required
            />
          </div>

          <div className="flex flex-col text-gray-600 py-2">
            <label for="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              className="rounded-lg bg-green-800 p-2 mt-2 focus:bg-gray-300 focus:outline-none"
              required
            />
          </div>

          <div className="flex justify-between text-green-900 py-2">
            <p className="flex">
              <input className="mr-2" type="checkbox" /> Remember me{" "}
            </p>
            <p>Forget Password? </p>
          </div>

      
          <button className="w-40 justify-center my-5 py-2 text-white bg-teal-900 " type="submit">LogIn</button>
       
          <div className="flex justify-center text-green-900 py-2">
          <Link to='/Signup'>
            <p>Create an account </p>
            </Link>
          </div>
        </form>
      </div>
   
  );
}
