const express = require("express")
const app = express()
const PORT = 3000;
app.use(express.json())


app.post("/todo", (req,res) => {

})

app.get("/todos", (req,res) => {

})


app.listen(PORT, function started(){
    console.log("App started ", PORT);
    
})
