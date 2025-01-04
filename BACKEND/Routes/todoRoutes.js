import express from "express";
import { protect } from "../middlewares/authMiddleware.js";

import {
  addTodo,
  deleteTodo,
  getTodo,
  getTodoById,
  updateTodo,
} from "../controllers/todoControllers.js";
const routes = express.Router();

// routes.post("/",addTodo);

//   routes.get("/",getTodo)

routes.route("/").get(protect, getTodo).post(protect, addTodo);
routes
  .route("/:id")
  .delete(protect, deleteTodo)
  .get(getTodoById)
  .patch(protect, updateTodo);
export default routes;
