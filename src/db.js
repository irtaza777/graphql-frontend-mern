import mysql from "mysql"; 
import util from "util"

export const con = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'demo'
  });
  con.connect((err) => {
    if (err) {
      console.log('Error connecting to database:'+err);
      return;
    }
    console.log('Connected to database');
  });
  export const dbQuery = util.promisify(con.query).bind(con);


