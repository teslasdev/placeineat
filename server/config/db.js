import mysql from 'mysql'
const  connectDB = () => {
  const conn = mysql.createConnection({
    host: "placestoeat.io",
    user: "urrcmkgzg6eb1",
    password: "#1b]1@3B5i)#",
    database : "dbrt6rmir6tnly"
  });
  
  conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return conn;
}
export default connectDB