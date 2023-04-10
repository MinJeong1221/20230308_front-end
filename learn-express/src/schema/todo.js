import { Schema } from "mongoose";

const todoSchema = new Schema({
    text: { type: String, required: true },
    done: { type: Boolean, required: true },
});

export default todoSchema;
