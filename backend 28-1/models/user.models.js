import mongoose, { mongo }  from "mongoose";

const userSchema= new mongoose.Schema(
    {
        email:{type:String,unique:true,required:true,lowercase:true},
        password:{type:String,required:true},
        name:{type:String,required:true},
        phone:{type:String,required:true},
        role:{type:String,required:true,default:"user"},
        clerkId:{type:String},
        isVerified:{type:Boolean,required:true},
    }
    ,{
        timestamps:true,
    }
);

export const userModel =mongoose.model("User",userSchema);