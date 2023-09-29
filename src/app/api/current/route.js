import jwt from "jsonwebtoken";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request) {
  const authToken = request.cookies.get("loginToken")?.value;
  const data = jwt.verify(authToken, process.env.JWT_KEY);
  const user = await User.findById(data._id).select("-password");

  return NextResponse.json(user);
}
