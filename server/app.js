//Imports dependecies being used
const express = require("express");
const cors = require("cors");

//declares an express app
const app = express();

const db = require("./connection/DbConn");

//***Middleware start***

// "Cross-Origin Resource Sharing"
//allows us to make api calls
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//***Middleware end***

app.get("/", (req, res) => {
  console.log("home");
  res.send("Welcome home");
});

//get all user api
app.get("/api/listAllUsers", (req, res) => {
  const sqlGet = "SELECT * FROM web_user;";
  db.query(sqlGet, (req, result) => {
    res.send(result);
  });
});

app.listen(process.env.PORT || 5050, () => {
  console.log("Listening...");
});
