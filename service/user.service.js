import { modelNames } from "mongoose";
import { userModel } from "../db/model/user.model.js";

const userExist = async (name) => {
  //check the db if a user exist
  const user = await userModel.findOne({ name });
  return !!user;
};

const create = async (user) => {
  //create user
  const newUser = await userModel.create(user);
  return newUser;
};

const getUserById = async (user_id) => {
  const user = await userModel.findOne({ _id: user_id });
  return user;
};


const updateUserById = async (user_id, name, email, updatedAt) => {

  let updatedUser = await userModel.findByIdAndUpdate({ _id: user_id }, {name: name, email: email, updatedAt: updatedAt}, { new: true });
  return updatedUser;
};




const deleteUserById = async (user_id) => {
  const user = await userModel.findOneAndDelete({ _id: user_id });
  return user;
};






export {
   userExist,
   create,
   getUserById,
   updateUserById,
   deleteUserById};