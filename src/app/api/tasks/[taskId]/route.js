import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { taskId } = params;

  try {
    const task = await Task.findById(taskId);

    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({
        message:"failed to get tasks",
        success:false,
    })

  }
}


export async function PUT(request, { params }) {
    const { taskId } = params;

  try {
    const {title, content, status}=await request.json();
    let task=await Task.findById(taskId);
    (task.title=title),(task.content=content),(task.status=status);

    const updateTask=await task.save();

    return NextResponse.json(updateTask);
  } catch (error) {
    return NextResponse.json({
        message:"failed to update tasks",
        success:false,
    })

  }
}

export async function DELETE(request, { params }) {
    const { taskId } = params;
  try {
    await Task.deleteOne({
      _id: taskId,
    });

    return NextResponse.json({
      message: "task deleted !!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error in deletinng task !!",
      status: false,
    });
  }
}
