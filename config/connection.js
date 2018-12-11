var mysql = require('mysql');
var connection;

if (process.env.BURGERS_DB_URL) {
  connection = mysql.createConnection(process.env.BURGERS_DB_URL)
} else { connection = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  });

}
// set up mysql connection

// make connection
connection.connect(function (e) {
  if (e) {
    console.error("error connecting: " + e.stack);
    return;
  }
  console.log("connected as id " + connection.threadId)
});

// export for ORM to use
module.exports = connection;
