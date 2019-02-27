const bcrypt = require('bcrypt');
const addJournalist = require('./../dataBase/quires/addJournalist');

const hashPassWord = password => new Promise((resolve, reject) => {
  bcrypt.hash(password, 10, (err, result) => {
    if (err) reject(err);
    else resolve(result);
  });
});

exports.add = (req, res) => {
  hashPassWord(req.body.password)
    .then(hashedPassword => req.body.password = hashedPassword)
    .then(() => {
      addJournalist(req.body);
    }).then(() => {
      res.send({
        successMessage: 'Journalist is added',
      }).catch((err) => {
        console.log(err);
      });
    });
};
