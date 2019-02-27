// const bcrypt = require('bcrypt');
// const checkUser = require('./../dataBase/quires/checkData');
// require('dotenv').config();
// const {
//   sign,
// } = require('jsonwebtoken');

// const compare = (password, hashedPassword) => new Promise((resolve, reject) => {
//   bcrypt.compare(password, hashedPassword, (err, success) => {
//     if (err) {
//       reject(err);
//     } else {
//       resolve(success);
//     }
//   });
// });

// exports.checkUser = (req, res) => {
//   const { emailValue, passwordValue } = req.body;
//   checkUser(emailValue).then((rows) => {
//     if (rows.rows[0]) {
//       compare(passwordValue, rows.rows[0].password).then((result) => {
//         if (result) {
//           const payload = {
//             id: rows.rows[0].id,
//             name: rows.rows[0].name,
//           };
//           const jwt = sign(payload, process.env.SECRET);
//           res.writeHead({
//             'Set-Cookie': [`jwt=${jwt};httpOnly;MaxAge=10000`],
//           });
//           res.send({
//             successMessage: true,
//           });
//         } else {
//           res.send(JSON.stringify({
//             successMessage: 'Password is invalid',
//           }));
//         }
//       });
//     } else {
//       res.send(JSON.stringify({
//         successMessage: 'Email is invalid',
//       }));
//     }
//   }).catch((err) => {
//     console.log(err);
//   });
// };
