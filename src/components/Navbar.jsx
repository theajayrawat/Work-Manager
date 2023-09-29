"use client";

import UserContext from "@/context/userContext";
import { logout } from "@/services/userServices";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { toast } from "react-toastify";

function CustomNavbar() {
  const context = useContext(UserContext);
    const router =useRouter()
  async function doLogout(){
    try {
        const result=await logout()
        context.setUser(undefined)
        toast.success("Logout !!", {
            position: "top-center",
          });
        router.push("/login")
    } catch (error) {
        toast.error("Logout Error", {
            position: "top-center",
          })
    }
  }
  return (
    <nav className="bg-blue-600 h-12 py-2 px-3 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-2xl font-semibold">
          <a href="/home">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          {context.user && (
            <>
              <li>
                <Link href="/" className="hover:text-blue-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/add-task" className="hover:text-blue-200">
                  Add Task
                </Link>
              </li>
              <li>
                <Link href="/show-task" className="hover:text-blue-200">
                  Show Task
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
      <div>
        <ul className="flex space-x-5">
          {context.user && (
            <>
              <li>
                <h1>
                  {context.user.name}
                </h1>
              </li>
              <li>
                <button  onClick={doLogout} className="hover:text-blue-200">
                  Logout
                </button>
              </li>
            </>
          )}
          {
            !context.user && (
                <>
                <li>
                  <Link href="/login" className="hover:text-blue-200">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/singup" className="hover:text-blue-200">
                    Sing Up
                  </Link>
                </li>
              </> 
            )
          }
        </ul>
      </div>
    </nav>
  );
}

export default CustomNavbar;
