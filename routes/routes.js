import { createTask, getAllTasks, getTask, deleteTask, updateTask } from "../controller/taskController.js"
import { getSignup, postSignup, postLogin } from "../controller/authController.js";
import { getUserQuantity, getUserById, createUser, deleteUser, updateUser } from "../controller/userController.js";

const routes = (app) => {
  
  // Global routes 
  app.get("/", getAllTasks);
  app.post("/signup", postSignup);
  app.post("/login", postLogin);

  // User routes 
  app.post("/user", createUser);
  app.delete("/user/delete", deleteUser);
  app.put("/user/update", updateUser); 
  
  app.get("/user/quantity", getUserQuantity);
  app.get("/user/:id", getUserById);

  // Task routes
  app.post("/task/create" , createTask)
  app.get("/task/:id", getTask);
  app.delete("task/:id", deleteTask);
}

export default routes;
