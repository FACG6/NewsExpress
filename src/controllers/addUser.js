const bcrypt = require('bcrypt');
const addJournalist = require('./../dataBase/quires/addJournalist');

const hashPassWord = password => new Promise((resolve, reject) => {
  bcrypt.hash(password, 10, (err, result) => {
    if (err) reject(err);
    else resolve(result);
  });
});

exports.add = (object, cb) => {
  hashPassWord(object.password)
    .then((hashedPassword) => {
      object.password = hashedPassword;
      return object;
    })
    .then(addJournalist(object, cb));
};
