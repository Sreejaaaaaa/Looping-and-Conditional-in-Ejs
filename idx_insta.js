const express=require("express)");
const app=express();
const path=require("path");

const port=8080;

app.get("ig/:username", (req,res)=>{
    const followers=["Ram","Sita","Shiv"];
    let {username} =req.params;
    res.render("instagram.ejs", {username,followers});

});