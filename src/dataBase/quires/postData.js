const connect = require('../db_connection');

const addJournalist = (journalists,cb) =>{
    const { fullname, email, password } =journalists;
    const query ={
       sql:  'INSERT INTO journalists (fullname,email,password) Values ($1, $2, $3)',
       values:[fullname,email,password]
    };
   return connect.query(query,cb);
}
module.exports = addJournalist;
