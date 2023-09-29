"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginSvg from "../../assests/login.svg";
import { addTask } from "@/services/taskServices";
import { toast } from "react-toastify";

function AddTask() {

  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "",
  });

  const handleAddTask = async (event) => {
    event.preventDefault()
    try {
      const result = await addTask(task);
      toast.success("Your Task is Added", {
        position: "top-center",
      });

      resetForm()

    } catch (error) {
      toast.error("Your Task is Not Added", {
        position: "top-center",
      });
    }
  };

  const resetForm=()=>{
    event.preventDefault()
    setTask({
        title: "",
        content: "",
        status: "none",
      });
}
  return (
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
        <h1 className="text-3xl text-center">Add your task here</h1>
        <form action="#" onSubmit={handleAddTask}>
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-gray-400 focus:ring-gray-400-100 border-gray-400"
              id="task_title"
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            ></input>
          </div>
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              type="text"
              className="w-full p-3 rounded-lg bg-gray-400 focus:ring-gray-400-100 border-gray-400"
              id="task_content"
              row={5}
              name="task_content"
              onChange={(event) => {
                setTask({
                  ...task,
                  content: event.target.value,
                });
              }}
              value={task.content}
            ></textarea>
          </div>
          <div className="mt-4">
            <label
              htmlFor="task_status"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              type="text"
              className="w-full p-3 rounded-lg bg-gray-400 focus:ring-gray-400-100 border-gray-400"
              id="task_status"
              name="task_status"
              onChange={(event) => {
                setTask({
                  ...task,
                  status: event.target.value,
                });
              }}
              value={task.status}
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
            </select>
          </div>
          <div className="mt-4 flex justify-center">
            <button type="submit" className="bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-300">
              Submit
            </button>
            <button type="submit" onClick={resetForm} className="bg-red-600 py-2 px-3 rounded-lg hover:bg-red-300 ms-3 ">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
