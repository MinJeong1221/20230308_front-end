import mongoose from "mongoose";
import todoSchema from "../schema/todo";

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
