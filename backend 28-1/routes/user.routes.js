import express from "express"
import { createUser ,getUserById,getAllUser,updateUserById,deleteUserById, loginUser} from "../controllers/user.controllers.js";

const userRouter=express.Router();
userRouter.post("/create-user",createUser)
userRouter.post("/login-user",loginUser)
userRouter.get("/get-user-by/:id",getUserById);
userRouter.get("/getalluser",getAllUser);
userRouter.put("/updateuserbyid/:id",updateUserById);
userRouter.delete("/deleteuserbyid/:id",deleteUserById);
export {userRouter};

