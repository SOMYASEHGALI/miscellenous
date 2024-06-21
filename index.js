const express=require("express");
const app=express();
const port = 8080;
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    res.render("home.ejs");
});
app.listen(port,()=>{
    console.log(`listening on ${port}`)
})
app.get("/hello",(req,res)=>{
    res.send("hello");
})
app.get("/rolldice",(req,res)=>{
    let diceval=Math.floor(Math.random()*6)+1
    res.render("rolldice.ejs",{num: diceval})
})
app.get("/ig/:username",(req,res)=>{
    //const followers=["adam","bob","steve","abc"]
    let {username}= req.params;
    //res.render("instagram.ejs",{username,followers})
    const instaData=require("./data.json");
    const data=instaData[username];
    console.log(data);
    res.render("instagram.ejs",{data})
})
app.use(express.static("public"));




