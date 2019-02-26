const connect = require('../db_connection');
const showData = (cb) =>{
    connect.query('SELECT journalists.fullname ,title , descriptions , field from news JOIN journalists ON news.jour_id = journalists.id ')
}

module.exports = showData;