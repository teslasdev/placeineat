import mysql from 'mysql'
const  connectDB = () => {
  const conn = mysql.createConnection({
    host: "placestoeat.io",
    user: "ubx77f2cuzrf0",
    password: "placetoeat003",
    database : "dbrt6rmir6tnly"
  });
  
  conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return conn;
}
export default connectDB