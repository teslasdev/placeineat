import mysql from 'mysql'
const  connectDB = () => {
  const conn = mysql.createConnection({
    host: "https://placestoeat.io",
    user: "urrcmkgzg6eb1",
    password: "d$(4&boh^kc3",
    database : "dbrt6rmir6tnly"
  });
  
  conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  return conn;
}
export default connectDB