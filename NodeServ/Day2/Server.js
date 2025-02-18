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

app.get("/createFile",(req,res)=>{
    const currentDateTime = new Date();

    const year = currentDateTime.getFullYear().toString();
    const month = (currentDateTime.getMonth()+1).toString();
    const date = currentDateTime.getDate().toString();
    const hours = currentDateTime.getHours().toString();
    const mins = currentDateTime.getMinutes().toString();
    const secs = currentDateTime.getSeconds().toString();

    const dateTimeforFileName = `${year}-${month}-${date}-${hours}-${mins}-${secs}.txt`;
    const filePath = path.join(outputFolder,dateTimeforFileName);
       
    fs.writeFile(filePath, currentDateTime.toISOString(), (err) => {
        if(err){
            res.status(500).send(`Error Creating File : ${err}`);
            return;
        }
        res.send(`File Created Successfully at ${filePath}`);
    });
});

app.get("/getFile",(req,res)=>{
    fs.readdir(outputFolder,(err,files)=>{
        if(err){
            res.status(500).send(`Error Reading Directory : ${err}`);
            return;
        }
        console.log("Files",files);
        const textFiles = files.filter((file) => path.extname(file) === '.txt');
        res.json(textFiles);
    });
});

app.listen(PORT,() => {
    console.log("Server is Running on Port: ", PORT);
});