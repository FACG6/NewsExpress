const connect = require('../db_connection.js');
const checkemail = (email,cb) =>{
    const querycommand = 'SELECT * from journalists where email = $1';
    const value = [email];
    connect.query(querycommand,value,cb)
}