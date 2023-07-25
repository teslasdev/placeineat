import mysql from 'mysql'
const  connectDB = () => {
  const conn = mysql.createConnection({
    host: "52.41.36.82",
    user: "upeemoudzghcs",
    password: "@4&+3*b&A%1d",
    database : "dbn5fai2jcajgl"
  });
  
  conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return conn;
}
export default connectDB