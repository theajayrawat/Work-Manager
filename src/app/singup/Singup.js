"use client"
import React , {useState} from "react";
import Image from "next/image";
import singupSvg from "../../assests/singup.svg";
import { toast } from "react-toastify";
import { singUp } from "@/services/userServices";

function Singup() {
    const [data, setData]= useState({
        name:"",
        email:"",
        password:"",
        about:""
    })

    const doSingup= async(event)=>{
        event.preventDefault()
        if(data.name.trim()=='' || data.name==null){
            toast.warning("Name is required",{
                position:"top-center"
            })
            return;
        }

        //later do validation
        try {
            const result = await singUp(data);
            toast.success("User is register", {
              position: "top-center",
            });
      
            resetForm();
          } catch (error) {
            toast.error("Singup error", {
              position: "top-center",
            });
          }
    };

    const resetForm=()=>{
        setData({
            name:"",
            email:"",
            password:"",
            about:"", 
        });
    }

  return (
    <div className="grid grid-cols-12 mt-4 mb-4 justify-center">
      <div className="border col-span-4 col-start-5 p-5 shadow-gray-600 shadow-sm ">
        <div className="my-8 flex justify-center">
          <Image
            src={singupSvg}
            style={{
              width: "80%",
            }}
            alt="login image"
            priority="false"
          />
        </div>
        <h1 className="text-3xl">Singup Here</h1>
        <form action="#" onSubmit={doSingup}>
          <div className="mt-3">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-400 focus:ring-gray-400-100 border-gray-400"
              placeholder="Enter here"
              id="user_name"
              name="user_name"
              onChange={(event) => {
                setData({
                  ...data,
                  name: event.target.value,
                });
              }}
              value={data.name}
            ></input>
          </div>
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
                setData({
                  ...data,
                  email: event.target.value,
                });
              }}
              value={data.email}
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
                setData({
                  ...data,
                  password: event.target.value,
                });
              }}
              value={data.password}
            ></input>
          </div>
          <div className="mt-3">
            <label
              htmlFor="user_about"
              className="block text-sm font-medium mb-2"
            >
              About
            </label>
            <textarea
              type="text"
              className="w-full p-3 rounded-lg bg-gray-400 focus:ring-gray-400-100 border-gray-400"
              placeholder="Enter here"
              id="user_about"
              name="user_about"
              rows={5}
              onChange={(event) => {
                setData({
                  ...data,
                  about: event.target.value,
                });
              }}
              value={data.about}
            ></textarea>
          </div>
          <div className="mt-4 flex justify-center">
            <button type="submit" className="bg-green-600 py-2 px-3 rounded-lg hover:bg-blue-300">
              SingUp
            </button>
            <button type="button" onClick={resetForm} className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-300 ms-3 ">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Singup;
