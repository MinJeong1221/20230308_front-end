import { Router } from "express";

const usersRoute = Router();

usersRoute.get("/", (req, res) => {
    res.send("get Users...!!");
});
usersRoute.post("/", (req, res) => {
    res.send("resister Users.!!!..");
});

export default usersRoute;
