const express = require('express');
const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost:27017/taskapi');

const userRoutes = require("./routes/user");
const app= express();

app.use("/api/v1", userRoutes);

app.get("/", (req,res)=>{
   res.send("ok")
   });

app.listen(5000, ()=>{
    console.log("server running at 5000");
})