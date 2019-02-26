const connect = require('../db_connection');
const {
    hashpassword
} = require('../commands/hashpassword.js');

const addauthor = (name , email ,password,cb) =>{
    const hasedpassword = hashpassword(password);
    const querycommand = 'INSET INTO journalist (fullname,email,password) Values ($1, $2, $3)';
    const values = [name, email, hashedPassword];
    connect.query(text, values, callback);
}
module.exports = addauthor;
