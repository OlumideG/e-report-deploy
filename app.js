const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const reportRoute = require('./routes/reportRoute');
const auth = require('./routes/auth');
const userInfo = require('./routes/userInfo');
const chart = require('./routes/chart');
const PORT = process.env.PORT || 3000;


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

// if (app.get("env") === "development"){
//     app.use((err,req,res,next) =>{
//         res.status(err.status || 500);
//         res.send({
//             message:err.message,
//             error:err
//         })
//     })
// }

if (process.env.NODE_ENV === "production") {
  //server static content
  //npm run build
  app.use(express.static(path.join(__dirname, "client/build")));
}

console.log(__dirname);
console.log(path.join(__dirname, "client/build"));




app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

app.listen(PORT, ()=>{
    console.log(`Server starting on port ${PORT}`);
})