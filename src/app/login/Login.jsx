"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginSvg from "../../assests/login.svg";
import { toast } from "react-toastify";
import { login } from "@/services/userServices";
import { useRouter } from "next/navigation";

function Login() {
  const router=useRouter()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const doLogin = async (event) => {
    event.preventDefault();
    if (loginData.email.trim() == "" || loginData.password.trim() == null) {
      toast.info("Invalid Data", {
        position: "top-center",
      });
      return;
    }

    try {
      const result = await login(loginData);
      toast.success("Login Successfully", {
        position: "top-center",
      }); 
      router.push("/profile/user")
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
      });
    }
  };

  const resetForm = (event) => {
    event.preventDefault();
    setLoginData({
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <div className="grid grid-cols-12 mt-4 mb-4 justify-center">
        <div className="border col-span-4 col-start-5 p-5 shadow-gray-600 shadow-sm ">
          <div className="my-8 flex justify-center">
            <Image
              src={loginSvg}
              style={{
                width: "80%",
              }}
              alt="login image"
              priority="false"
            />
          </div>
          <h1 className="text-3xl text-center">Login</h1>
          <form action="#" onSubmit={doLogin}>
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-gray-400 focus:ring-gray-400-100 border-gray-400"
                placeholder="Enter here"
                id="user_email"
                name="user_email"
                onChange={(event) => {
                  setLoginData({
                    ...loginData,
                    email: event.target.value,
                  });
                }}
                value={loginData.email}
              ></input>
            </div>
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 rounded-lg bg-gray-400 focus:ring-gray-400-100 border-gray-400"
                placeholder="Enter here"
                id="user_password"
                name="user_password"
                onChange={(event) => {
                  setLoginData({
                    ...loginData,
                    password: event.target.value,
                  });
                }}
                value={loginData.password}
              ></input>
            </div>
            <div className="mt-4 flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-300"
              >
                Login
              </button>
              <button
                type="submit"
                onClick={resetForm}
                className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-300 ms-3 "
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
