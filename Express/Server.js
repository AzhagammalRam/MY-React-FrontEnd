const express = require("express");

const app = express();

const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hello, Welcome!!");
});
app.get("/home",(req,res)=>{
    res.send("Hello, Welcome Home!!");
});

app.listen(PORT,()=>{
    console.log("Server is Running on Port:", PORT);
});