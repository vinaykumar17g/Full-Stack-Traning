import { userModel } from "../models/user.models.js";
import { response } from "../utils/response.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, "Secret code", { expiresIn: "7d" });
};
export let createUser = async (req, res) => {
  try {
    let { name, email, password, phone, isVerified } = req.body;
    console.log(name);
    password = await bcrypt.hash(password, 10);
    const newUser = new userModel({ name, email, password, phone, isVerified });
    const userData = await newUser.save();
    return response(res, userData, "User created success");
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
};

export let getUserById = async (req, res) => {
  try {
    let userid = req.params.id;
    let userData = await userModel.findById(userid);
    return response(res, userData, "user data get success");
  } catch (errro) {
    return response(res, null, error.message, false, 500);
  }
};

export let getAllUser = async (req, res) => {
  try {
    let userid = req.params.id;
    let userData = await userModel.find();
    return response(res, userData, "user data get success");
  } catch (errro) {
    return response(res, null, error.message, false, 500);
  }
};

export let updateUserById = async (req, res) => {
  try {
    let userid = req.params.id;
    let { name, email, password, phone, isVerified } = req.body;
    password = await bcrypt.hash(password, 10);

    await userModel.updateOne(
      { _id: userid },
      {
        $set: {
          name: name,
          email: email,
          password: password,
          phone: phone,
          isVerified: isVerified,
        },
      }
    );
    let userData = await userModel.findById(userid);
    return response(res, userData, "Data updated");
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
};

export let deleteUserById = async (req, res) => {
  try {
    let userid = req.params.id;
    let userData = await userModel.findById(userid);
    await userModel.deleteOne({ _id: userid });
    return response(res, userData, "Deleted user");
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
};

export let loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await userModel.findOne({ email });
    if (!userData) {
      return response(res, null, "user not found", false, 500);
    }
    const isMatch = await bcrypt.compare(password, userData.password);
    if (!isMatch) {
      return response(res, null, "password not found", false, 500);
    }

    const token = createToken(userData._id);
    let obj = { userData, token };
    return response(res, obj, "User login successfully");
  } catch (error) {
    return response(res, null, error.message, false, 500);
  }
};
