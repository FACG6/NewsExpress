const connect = require('../db_connection');
const showData = (cb) =>{
    const query={
        sql:'SELECT journalists.fullname ,title , descriptions , field from news JOIN journalists ON news.jour_id = journalists.id '
    }
     connect.query(query.sql,(error,res)=>{
         if(error)cb(error)
         cb(null,res)
     });
}

module.exports = showData;