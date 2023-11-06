import React from "react";
import background from "../assets/back.png";
import first from "../assets/1.png";
import second from "../assets/2.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="flex flex-row min-h-screen relative ">
        <div className="w-2/5 relative">
          <div className="flex justify-center ">
            <img src={first} className="absolute h-[210px] top-[170px]" />
            <img src={second} className="absolute h-[80px] top-[350px]" />
          </div>
          <div className="flex justify-center space-y-10">
            <p className="absolute font-semibold text-white text-3xl top-[470px]">
              Feel <span className="text-green-500 font-semibold">Safe</span>{" "}
              Everywhere
            </p>
            <p className="absolute mx-auto text-white text-2xl top-[500px]">
              #Safe-<span className="text-green-500">T</span>-Fast
            </p>
          </div>
          <img src={background} className="h-full" />
        </div>
        <div className="w-3/4 flex flex-col items-center justify-center border-2">
          <p className="text-3xl mb-20 text-semibold">SignUp / Login</p>
          <div className="border-2 w-6/12 h-1000 shadow-lg flex flex-col rounded-2xl shadow-2xl">
            <div className="flex flex-col w-11/12 mx-auto justify-center p-2">
              <p className="text-center font-semibold text-2xl">
                Welcome to Sicu-aura
              </p>
              <p className="whitespace-nowrap text-sm text-center text-stone-300 mb-10">
                Your one stop safety solutions using innovative technology
              </p>
            </div>
            <div className="flex flex-col mx-auto gap-3 w-3/4 mt-0">
              <input
                type="text"
                placeholder="Hospital Name"
                value="Hospital Name"
                className="border-b border-black font-semibold text-black mb-9 hover:border-black border-b outline-0"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="border-b mb-9 hover:border-black border-b-2 outline-0"
              />
              <input
                type="password"
                placeholder="Password"
                className="border-b  mb-9 hover:border-black border-b-2 outline-0"
              />
              <input
                type="text"
                placeholder="Special Address code"
                className="border-b mb-9 hover:border-black border-b-2 outline-0"
              />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center">
            <Link to="/capture">
              <button className="bg-black text-white p-2 rounded-md">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
