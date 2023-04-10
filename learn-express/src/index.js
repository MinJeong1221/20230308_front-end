import express from "express";
import usersRoute from "./routes/users.js";
import router from "./routes";
import dotenv from "dotenv";

import mongoose from "mongoose";

dotenv.config(); //실행하면 .env파일을 읽는다

const mongoURL = process.env.MONGODB_URL;

mongoose
    .connect(mongoURL)
    .then(() => console.log("connected MongoDB"))
    .catch((e) => console.log(e));

const app = express();

//json parser 미들웨어 등록
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.use(router);

app.listen(8000, () => {
    console.log("Server is listening in PORT : 8000");
});

app.post("/users", (req, res) => {
    console.log(req.body);
    res.send("register user...");
});
