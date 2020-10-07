const express = require('express')
const app = express()
app.listen(3000)


//Lab 2 Task 2.
app.get("/test",function(req,res){
    res.send("helloworld")
})



//Lab 2, Subtask 2 of Task 1.
app.use(express.static(__dirname + '/public'))



//Lab 2, Subtask 2 of Task 2.
app.get("/add/:num1/:num2",function(req,res){
    let num1  = req.params.num1
    let num2  = req.params.num2 
    num1  = parseInt(num1)
    num2  = parseInt(num2)
    var sum  = num1+num2
    res.send("Addition of two numbers is " + sum)
})



//Lab 2, Task 3.
let accounts = [
    {id:1,name:"alex",deposit:5},
    {id:2,name:"sarah",deposit:5},
    {id:3,name:"jim",deposit:15}
]


app.get("/accounts",function(req,res){
    res.send(accounts)
})
