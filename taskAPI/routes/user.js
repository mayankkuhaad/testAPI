const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const Task = require("../models/user");

router.use(bodyParser.json());

router.get("/tasks", async (req,res)=>{
    try{
        const tasks = await Task.find();
        res.status(200).json({
            status : "success",
            data : tasks
        })
    }catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
        })
    }
})

router.get("/tasks/:id", async (req,res)=>{
    try{
        const tasks = await Task.find({_id: req.params.id});
        res.status(200).json({
            status : "success",
            data : tasks
        })
    }catch(e){
        res.status(404).json({
            status:"there is no task at that id",
            message:e.message
        })
    }
})

router.post("/tasks", async (req,res)=>{
    try{
        const tasks = await Task.create(req.body);
            res.status(201).json({
                status : "success",
                tasks
            })
    }catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
        })
    }
})

router.put("/tasks/:id", async (req,res)=>{
    try{
        const tasks = await Task.findOneAndUpdate({_id:req.params.id},req.body);
        res.status(204).json({
            status : "success",
            tasks
        })
    }catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
        })
    }
})

router.delete("/tasks/:id", async (req,res)=>{
    try{
        const tasks = await Task.deleteOne({_id: req.params.id});
        res.status(204).json({
            status : "success",
            tasks
        })
    }catch(e){
        res.status(500).json({
            status:"failed",
            message:e.message
        })
    }
})

router.get("*", (req,res)=>{
    res.status(404).json({
        status: "failed",
        message : "invalid request"
    })
})

module.exports=router