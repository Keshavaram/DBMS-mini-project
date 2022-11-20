const mysql = require('mysql');
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require("cors");

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "Insurance"
});

app.post("/", (req,res) =>
{
    con.query(req.body.query, function (err, result) {
        if (err) throw err;
        res.send({"result": result})
    });
})

app.listen(8080);