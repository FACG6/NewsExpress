const connect = require('../db_connection');
const showData = (cb) =>{
    const query={
        sql:'SELECT journalists.fullname ,title , descriptions , field from news JOIN journalists ON news.jour_id = journalists.id '
    }
    console.log(query)
   return  connect.query(query,cb);
}

module.exports = showData;