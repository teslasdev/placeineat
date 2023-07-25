import mysql from 'mysql'
const  connectDB = () => {
  const conn = mysql.createConnection({
    host: "35.212.115.77",
    user: "u4jb3rtivjxjg",
    password: "#$hc@6115@p]",
    database : "dbrt6rmir6tnly"
  });
  
  conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return conn;
}
export default connectDB