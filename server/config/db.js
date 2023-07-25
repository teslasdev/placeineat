import mysql from 'mysql'
const  connectDB = () => {
  const conn = mysql.createConnection({
    host: "52.41.36.82",
    user: "uyhd9egyeqd2z",
    password: "`|y1^3m1hb8n",
    database : "dbn5fai2jcajgl"
  });
  
  conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return conn;
}
export default connectDB