import express from "express";
import { registerUser ,authUser} from "../controllers/userControllers.js";
// import { addTodo,deleteTodo,getTodo, getTodoById, updateTodo } from "../controllers/todoControllers.js";
const routes = express.Router();

routes.route("/").post(registerUser);
routes.route("/auth").post(authUser);

//   routes.get("/",getTodo)

// routes.route("/").get(getTodo).post(addTodo)
// routes.route("/:id").delete(deleteTodo).get(getTodoById).patch(updateTodo)
export default routes;