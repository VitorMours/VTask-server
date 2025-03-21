import express from "express";
import { createUser, updateUser, allUsers } from "../controller/userController.js";
const userRouter = express.Router();


userRouter.get("/", allUsers);
userRouter.post("/", createUser);
userRouter.put("/", updateUser);
// userRouter.get("/dashboard", userDashboard);


export default userRouter;
