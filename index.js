const express = require('express')
const fs = require("fs")
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get('/get',(req,res)=>{
    const data = fs.readFileSync("switch.txt","utf-8")
    console.log(data);
    res.send(data)
})

app.post('/on',(req,res)=>{
    const data = "on"
    fs.writeFileSync("./switch.txt",data)
    res.send("on")
})

app.post('/off',(req,res)=>{
    const data = "off"
    fs.writeFileSync("./switch.txt",data)
    res.send("off")
})

app.listen(port,()=>{
    console.log('running');
})