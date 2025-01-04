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
  // for storing partucle object id , who is login person

  user: {
    type: mongoose.Schema.Types.ObjectId,
    // connect todo model and user model, so ref:"User"
    ref: "User",
    required: true,
  },
});

// ================compiling our schema into a Model.============================
const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
