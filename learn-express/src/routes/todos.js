import { Router } from "express";
import Todo from "../model/Todo";

const todosRouter = Router();

todosRouter.get("/", (req, res) => {
    //데이터베이스에 저장된 todo받아오기
    Todo.find()
        .then((todos) => {
            res.send(todos);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
});

todosRouter.delete(":id", (req, res) => {
    const { id } = req.params;
    Todo.findByIdAndRemove(id)
        .then(() => {
            res.send({ success: true });
        })
        .catch((e) => {
            res.status(500).send;
        });
});

todosRouter.patch("/:id", (req, res) => {
    const { id } = req.params;

    Todo.findById(id)
        .then((todo) => {
            todo.done = !todo.done;
            todo.save().then((data) => {
                res.send(data);
            });
        })
        .catch((e) => {
            res.status(500).send(e);
        });
});

todosRouter.post("/", (req, res) => {
    const { text } = req.body;

    //모델 생성
    const todo = new Todo({
        text,
        done: false,
    });

    //데이더 베이스에 저장
    todo.save()
        .then((todo) => {
            res.send(todo);
        })
        .catch((e) => {
            res.status(500).send(e);
        });
});

export default todosRouter;
