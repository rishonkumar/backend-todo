const zod = require("zod")

const createdTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    id : zod.string(),
})

module.exports = {
    createdTodo : createdTodo,
    updateTodo : updateTodo
}