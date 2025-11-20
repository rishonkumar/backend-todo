const express = require("express");
const { createdTodo } = require("./types");
const { todo } = require("./db");
const app = express()
const PORT = 3000;
const cors = require("cors")

app.use(express.json())
app.use(cors())

app.post("/todo", async (req, res) => {
    const userPayload = req.body
    const parsedUserPayload = createdTodo.safeParse(userPayload)

    if (!parsedUserPayload.success) {
        res.status(411).json({
            msg: "You send the wrong input"
        })
        return;
    }

    await todo.create({
        title: userPayload.title,
        description: userPayload.description,
        completed: false
    })

    res.json({
        msg: "todo created"
    })
})

app.get("/todos", async (req, res) => {

    const todos = await todo.find();

    res.json({ todos })
})

app.get("/completed", async (req, res) => {
    const userPayload = req.body
    const parsedUserPayload = createdTodo.safeParse(userPayload)

    if (!parsedUserPayload.success) {
        res.status(411).json({
            msg: "You send the wrong input"
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id, // reason for _id in mongoose idenify
    }, {
        completed: true
    })

    res.json({
        msg: "Marked as completed"
    })
})

app.listen(PORT, function started() {
    console.log("App started ", PORT);

})
