
import * as userService from "../service/user.service.js";

const createUser = async (req, res) => {
  const userRequest = req.body;
  // console.log(userRequest)
  // check if a user already exist with the email
  const exist = await userService.userExist(userRequest.name);
  if (!exist) {

    const newUser = await userService.create({ ...userRequest});
  
    res.status(201).json({ message: newUser });
  } else {
    res.status(400).json({ message: "User already exist" });
  }
};


const getUser = async (req, res) => {
  const user_id = req.params.user_id

  // check if the user is in the db
  const user = await userService.getUserById(user_id);
  if (!user) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  res.status(200).json({ message: user });
};


const updateUserById = async (req, res) => {
  const user_id = req.params.user_id
  const userData= req.body
  const {name, email} = userData;
  const updatedAt = Date.now()

  // check if the user is in the db
  const user = await userService.getUserById(user_id);
  console.log(user)
  
  if (!user) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  let updatedUser = await userService.updateUserById(user_id, name, email, updatedAt)
  res.status(200).json({ message: updatedUser });
};


const deleteUser = async (req, res) => {
  const user_id = req.params.user_id
  // check if the user is in the db
  const user = await userService.deleteUserById(user_id);
  
  if (!user) {
    res.status(400).json({ message: "User not found" });
    return;
  }
  res.status(200).json({ message: "User has been deleted successfully" });
};

export { createUser, getUser, updateUserById, deleteUser};