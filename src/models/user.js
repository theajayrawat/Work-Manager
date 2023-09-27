import mongoose,{Schema} from "mongoose";

const UserSachema =new Schema({
    name:String,
    email:{
        type:String,
        required:[true,"Email Required !!"],
    },
    password:{
        type:String,
        required: [true, "Password Required !!"],
        unique: true,
    },
    about:String,
})

export const User=mongoose.models.users || mongoose.model("users",UserSachema);


