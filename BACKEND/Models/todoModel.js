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
    type: Boolean,
    reqired: true,
    default: false,
  },
});


// ================compiling our schema into a Model.============================
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
