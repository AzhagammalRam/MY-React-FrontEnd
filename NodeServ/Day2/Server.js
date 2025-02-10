const express = require("express");
const fs = require('fs');
const path = require('path');

const outputFolder = './output';

console.log("To Check whether the folder is already Exist!",fs.existsSync(outputFolder));
if(!fs.existsSync(outputFolder)){
    fs.mkdirSync(outputFolder);
}

const app = express();

const PORT = 3000;


app.listen(PORT,() => {
    console.log("Server is Running on Port: ", PORT);
});