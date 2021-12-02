'user strict';
import mysql from "mysql2";
import dbConfig from "./config.db";

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Conexão com o banco de dados realizada com êxito!");
});
export default connection
