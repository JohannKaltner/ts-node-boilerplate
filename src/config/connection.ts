'user strict';
import mysql from "mysql2";
import dbConfig from './config.db'
console.log({
  host: process.env.URL_DATABASE,
  user: process.env.USER_DATABASE,
  password: process.env.PASSWORD_DATABASE,
  database: process.env.NAME_DATABASE
})

const connection = mysql.createConnection(dbConfig);
// const handleConnect = () =>
connection.connect(function (err) {
  if (err) console.log(err);
  ;
  console.log("Connected...");
});


export default connection
