"use client"
import Task from './Task'
import UserContext from '@/context/userContext'
import { deleteTask } from '@/services/taskServices'
import { getTasksOfUser } from '@/services/userServices'
import React, { useContext, useState, useEffect} from 'react'
import { toast } from 'react-toastify'

function ShowTaskPage() {
  const[tasks,setTasks]=useState([])
  const context=useContext(UserContext)

  async function loadTasks(userId){
    try {
      const tasks=await getTasksOfUser(userId)
      setTasks([...tasks].reverse())
      
    } catch (error) {
      
    }

  }

  useEffect(()=>{
    if(context.user)   
        loadTasks(context.user._id)
  },[context.user,tasks])

  async function deleteTaskParent(taskId){
    try {
      const result=await deleteTask(taskId)
      const newTasks=tasks.filter(item=>item._id=taskId)
      setTasks(newTasks)
      //Use sweet alert for confirmation deletion
      toast.success("Your task deleted")
      
    } catch (error) {
      toast.error("Error in deleting task")
    }
  } 

  return (
    <div className="grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl text-center mb-3">Your Task ({tasks.length})</h1>
        {tasks.map((task,index)=>(
          <Task task={task} key={index} deleteTaskParent={deleteTaskParent} />     
        ))}

      </div>
    </div>
  )
}

export default ShowTaskPage