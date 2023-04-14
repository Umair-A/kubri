const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'kubri-test'
});

db.connect(function(err){
      if(err) throw err;
      console.log('Database connected..');
  });

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())

app.get("/", (req,res)=>{
  res.json("Hello from client");
});

app.get("/session", (req,res)=>{
  const q = "select * from session"
  db.query(q,(err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
  });
});

app.get("/list", (req,res)=>{
  const q = "SELECT universalSymbol, makerSymbol, securit, base, quote, scaleSize, digit, sessions, markupBid, markupAsk, depth, commission, minSize, aStep, consume, allowSweep, enables, multiReqTrade, expiryDate, subVolumes, timeOutWarn, timeOutError, timeOutKill, timeOutBPrice, feedSide, ignorePrice, descriptions FROM lists"
  db.query(q,(err,data)=>{
    if(err) return res.json(err);
    return res.json(data);
  });
});

app.post("/session", (req,res)=>{
  const q = "INSERT INTO session (`userName`,`password`,`serverAddress`,`account`,`senderCompId`,`sessionQualifier`,`targetCompId`,`sharedId`,`currency`) VALUES(?)";

    const values =[req.body.userName,req.body.password,req.body.serverAddress,
    req.body.account,
    req.body.senderCompId,
    req.body.sessionQualifier,
    req.body.targetCompId,
    req.body.sharedId,
    req.body.currency]

    db.query(q, [values],(err,data)=>{
      if(err) return res.json(err);
      return res.json("Session has been created succesfully:");
    });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});