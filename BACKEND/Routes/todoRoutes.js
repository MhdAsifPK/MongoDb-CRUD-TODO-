import express from "express"
import { addTodo,deleteTodo,getTodo, getTodoById, updateTodo } from "../controllers/todoControllers.js";
const routes = express.Router()

// routes.post("/",addTodo);
  
//   routes.get("/",getTodo)

routes.route("/").get(getTodo).post(addTodo)
routes.route("/:id").delete(deleteTodo).get(getTodoById).patch(updateTodo)
  export default routes
  