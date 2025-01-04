import express from "express";
import { registerUser ,authUser, logOut} from "../controllers/userControllers.js";
// import { addTodo,deleteTodo,getTodo, getTodoById, updateTodo } from "../controllers/todoControllers.js";
const routes = express.Router();

routes.route("/").post(registerUser);
routes.route("/auth").post(authUser);
routes.route("/logout").post(logOut)

//   routes.get("/",getTodo)

// routes.route("/").get(getTodo).post(addTodo)
// routes.route("/:id").delete(deleteTodo).get(getTodoById).patch(updateTodo)
export default routes;
