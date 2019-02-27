const { sign } = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const checkemail = require('./../dataBase/quires/checkData');
require('dotenv').config();
const hashFunction = (password, cb) => {
  bcrypt.genSalt(10, (err, salt) => {
    if (err) cb(err);
    bcrypt.hash(password, salt, cb);
  });
};
hashFunction('123', (err, res) => {
  console.log(res);
});
exports.checkuser = (req, res) => {
  const { email, password } = req.body;
  checkemail(email, (err, result) => {
    if (err) {
      console.log(err);
    } else if (result[0].email) {
      bcrypt.compare(password, result[0].password, (error, resAuth) => {
        if (error) throw new Error('error in comparing password');
        if (resAuth) {
          const payload = {
            id: result[0].id,
            fullname: result[0].fullname
          };

          const jwt = sign(payload, process.env.SECRET);
          res.cookie('jwt', jwt, {
            maxAge: 1000 * 60 * 60 * 24 * 1,
          }, {
            httpOnly: true,
          });
          res.redirect('/');
        } else {
          console.log('password error');
        }
      });
    } else {
      console.log('enter valid emai');
    }
  });
  