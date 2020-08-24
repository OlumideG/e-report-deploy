const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const reportRoute = require('./routes/reportRoute');
const auth = require('./routes/auth');
const userInfo = require('./routes/userInfo');
const chart = require('./routes/chart');


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(morgan("tiny"));

app.use('/auth', auth);
app.use('/dashboard', reportRoute);
app.use('/graphes', chart);
app.use('/userinfo', userInfo);

app.use( (req,res, next) =>{
   let err = new Error("Not Found");
   err.status = 404;
   next(err);
})

if (app.get("env") === "development"){
    app.use((err,req,res,next) =>{
        res.status(err.status || 500);
        res.send({
            message:err.message,
            error:err
        })
    })
}

app.listen(3000, ()=>{
    console.log("Server starting on port 3000");
})