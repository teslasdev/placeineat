import mysql from 'mysql'
const  connectDB = () => {
  const conn = mysql.createConnection({
    host: "1.2.3.4",
    user: "uyhd9egyeqd2z",
    password: "aD@vin33",
    database : "dbn5fai2jcajgl"
  });
  
  conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return conn;
}
export default connectDB