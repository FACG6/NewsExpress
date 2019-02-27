const connect = require('../db_connection');

exports.addnews = (title, descriptions, field, jourId, cb) => {
  const sql = 'INSERT INTO journalists (title,descriptions,field,jour_id) Values ($1, $2, $3)';
  const values = [title, descriptions, field, jourId];
  return connect.query(sql, values, (error, res) => {
    if (error) cb(error);
    cb(null, 'add journalist is done');
  });
};
