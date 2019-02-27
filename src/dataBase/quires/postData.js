const connect = require('../db_connection');

const addJournalist = (journalists,cb) =>{
    const { fullname, email, password } =journalists;
    const query ={
       sql:  'INSERT INTO journalists (fullname,email,password) Values ($1, $2, $3)',
       values:[fullname,email,password]
    };
   return connect.query(query.sql,query.values,(error,res)=>{
      if (error)cb(error)
      cb(null,'add journalist is done')
   });
}

const addnews = (title,descriptions, field, jour_id,cb) => {
   const query ={
      sql:  'INSERT INTO journalists (title,descriptions,field,jour_id) Values ($1, $2, $3)',
      values:[title,descriptions,field,jour_id]
   };
  return connect.query(query.sql,query.values,(error,res)=>{
     if (error)cb(error)
     cb(null,'add journalist is done')
  });
}

module.exports ={addnews, addJournalist};
