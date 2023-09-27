import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request,{params}){
  const { userId } = params;
  try {
    const user=await User.findById(userId)

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({
        message:"failed to get tasks",
        success:false,
    })

  }
}


export async function DELETE(request, { params }) {
  const { userId } = params;
  try {
    await User.deleteOne({
      _id: userId,
    });

    return NextResponse.json({
      message: "user deleted !!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error in deletinng user !!",
      status: false,
    });
  }
}

export async function PUT(request,{params}){
    const { userId } = params;
    const {name,email,password,about}=await request.json()
    try {
        const user=await User.findById(userId)

        user.name=name;
        user.email=email;
        user.password=password;
        user.about=about;

        const updatedUser=await user.save()
        return NextResponse.json(updatedUser)
        
    } catch (error) {
        return NextResponse.json({
            message: "failed to udpdate user !!",
            status: false,
          });
    }

}

