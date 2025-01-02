// console.log("first")
import express from "express";
import connectDb from "./config/db.js";
import todoRoutes from "../BACKEND/Routes/todoRoutes.js";

// ===========calling the databasse============
connectDb();

const app = express();

// =================middle ware calling(requwst ntem respon ntem idakk ulla function)=====================

app.use(express.json());

// ===================for running this port=================================
const port = 8000;

// =====================response handling for port==========================
app.get("/", (req, res) => {
  res.send("hello world");
});

// app.get("/products", (req, res) => {
//   // object sending the server
//   res.json({ name: "shirt", price: 155000 });
// });

app.use("/api/todo", todoRoutes);

// ======================add value in a todo==============================

// ======================define the port for runing======================
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
