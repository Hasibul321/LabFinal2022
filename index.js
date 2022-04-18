

const express = require("express")
const mongoose = require("mongoose")
const catRoute = require("./router/catRoute")

mongoose
    .connect("mongodb://localhost:27017/CatApp")
    .then(()=>{
        console.log("Mongo db server is connected successfully...")
    })
    .catch((err)=>{
        console.log(err);
    })

const app = express();
app.use(express.json());
app.use("/api/cats",catRoute);



app.use((req,res)=>{
    res.send("This is not valid route")
})
app.listen(3000,()=>{
    console.log("Listening to port 3000....");
})