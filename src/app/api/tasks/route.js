import { NextResponse } from "next/server";
import {Task} from "@/models/task"
import {connectDb} from "@/helper/db"
connectDb()

export async function GET(request){
  let tasks=[];
  try {
      tasks=await Task.find();
      
  } catch (error) {
      console.log(error);
      return NextResponse.json({
          message:"failed to get users",
          success:false,
      })
  }      
  return NextResponse.json(tasks)
}


export async function POST(request) {
  const { title, content, userId } = await request.json();

  try {
    const task = new Task({
      title,
      content,
      userId,
    });

    const createdTask=await task.save();

    return NextResponse.json(createdTask,{
        status:201,
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
        message:"Fail to create task !!",
        success:false,
    })
  }
}
