const express = require('express');
const router = express.Router();
const request=require('request');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "notyourhung43",
  database: "social_hub"
});


//report
router.get('',(req,res,next)=>{
    //query 
    con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM class", function (err, result, fields) {
      if (err) throw err;
         var data={"template":{"shortid":"SkjHsGc9N"},"data":{Items:result,}};
         var options={
             uri:"https://hungjkl.jsreportonline.net/api/report",
             method:'POST',
             headers: {
                'Authorization': "Basic YWRtaW4xMjphZG1pbg==",
                'X-FP-API-KEY': 'iphone', //it can be iPhone or your any other attribute
                'Content-Type': 'application/json'
            },
             json:data,
         };
         request(options).pipe(res);
      });
      });
    //report
   
})
module.exports = router;