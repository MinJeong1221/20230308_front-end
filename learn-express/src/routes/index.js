//하나로 모아주는 역할
import { Router } from "express";
import usersRoute from "./users";
import todosRoute from "./todos";

const router = Router();

//  /users 경로일때만 사용

router.use("/users", usersRoute);
router.use("/todos", todosRoute);

export default router;
