var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "notyourhung43",
  database: "social_hub"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM class", function (err, result, fields) {
      if (err) throw err;
      var database=result;
      console.log(database[1].C_ID)
    });
  });