const express = require("express");

const app = express();

app.use(express.json());

app.listen(5000, () => {
  console.log("this server listening on 5000");
});

const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "mysql",
  user: "root",
  password: "root",
  database: "myapp",
});

exports.pool = pool;
