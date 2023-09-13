import { Router } from "express";
import {createUser, getUser, updateUserById, deleteUser} from "../controller/user.controller.js";
import { createUserValidator, updateUserValidator } from "../middleware/validator.js";
const userRoute = Router();

userRoute.route("/api")
    .post(createUserValidator,createUser)



userRoute.route("/api/:user_id")
.get(getUser)
.put(updateUserValidator,updateUserById)
.delete(deleteUser)







export default userRoute;

