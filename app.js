const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"))

app.post("/", function (req, res){
    var firstName = req.body.fName
    var lastName = req.body.lName
    var email = req.body.email
    console.log(firstName, lastName, email);
});

app.get("/", (req, res)=> {
    res.sendFile(__dirname + "/signup.html")
})

app.listen(3000, (req, res)=>{
    console.log("server is running on port 3000")
})

//API key
// dab07c8ea483e7bd90eee4d530ef2e98-us21

// list id
// fca3130ef2

--data @- \
<<EOF | jq '.id'
{
  "email_address": "$user_email",
  "status": "pending",
  "merge_fields": {
	"FNAME": "$user_fname",
	"LNAME": "$user_lname",
	"BIRTHDAY": "$user_birthday",
	"ADDRESS": {
           "addr1": "123 Freddie Ave",
           "city": "Atlanta",
           "state": "GA",
           "zip": "12345",

     }
  }
