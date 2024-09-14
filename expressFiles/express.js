const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
app.use(express.json());
const secret = "myPasswordIsStrong"
const { validate } = require("./middleware.js");

var users = []
app.post("/sign_in", validate, (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    //validate using zod
    //use db to save
    const token = jwt.sign({username}, secret, {expiresIn:'1d'}) 
    const new_user = {username, password};
    users.push(new_user)
    res.json({
        "msg":"user created",
        "token":token
    })
})
app.post("/login", (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    let found = null;
    for(var i=0; i<users.length; i++){
        if(users[i].username==username && users[i].password==password){
            found = true;
            break;
        }
    }
    if(found){
        const token = req.headers.authorization;
        jwt.verify(token, secret, (e, decode)=>{
            if(e){
                res.json({
                    "error":e
                })
            }else{
                res.json({
                    "msg":"logged in"
                })
                found = true;
            }
        })
    }
    if(!found){
        res.json({
            "msg":"user not found, sign-in first"
        })
    }
})
app.listen(3000, ()=>{console.log("running on 3000")})