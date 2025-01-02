import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    reqired: true,
  },
  desc: {
    type: String,
    reqired: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    reqired: true,
    default: "pending",
  },
});

// ================compiling our schema into a Model.============================
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
