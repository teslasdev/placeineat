import mysql from 'mysql'
const  connectDB = () => {
  const conn = mysql.createConnection({
    host: "placestoeat.io",
    user: "upeemoudzghcs",
    password: "112x1&@D1~@2",
    database : "dbn5fai2jcajgl"
  });
  
  conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return conn;
}
export default connectDB