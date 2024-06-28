import express from 'express';
const app= express();
const port = 3000;

// home for(/)
app.get('/',(req,res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>hiii prends<h1/>");
})

//about for(/About)
app.get('/about',(req,res)=>{
    // console.log(req.rawHeaders);
    res.send("<h1>about me<h1/>");
})
app.listen(port,()=>{
    console.log("The server is running on port 3000")
})