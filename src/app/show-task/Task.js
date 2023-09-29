"use client"
import { deleteTask } from '@/services/taskServices'
import React from 'react'
import {TiDelete} from "react-icons/ti"

function Task({task, deleteTaskParent}) {
  function deleteTask(taskId){
    deleteTaskParent(taskId)
  }
  return (
    <div className={`shadow-lg mt-2 rounded-md ${
      task.status=="completed" ? "bg-green-800":"bg-gray-800"}`}>
        <div className="p-5">
          <div className="flex justify-between">
          <h1 className="text-3xl font-semibold">{task.title}</h1>
            <TiDelete className="shadow-lg bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700" 
            onClick={()=>{
              deleteTask(task._id)
            }}/>

          </div>
           
            <p className="font-normal">{task.content}</p>
            <p className="font-normal">Status: {task.status}</p>
        </div>
    </div>
  )
}

export default Task