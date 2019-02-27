const jwt = require('jsonwebtoken');

exports.get = (req, res, next) => {
  if (req.cookie) {
    const { token } = req.cookie;
    if (token) {
      jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
          res.clearCookie('name');
          res.redirect('/login');
        } else {
          req.logged = true;
          req.id = decoded.id;
        }
      });
    } else {
      req.logged = false;
    }
  } else {
    res.redirect('/');
  }
  next();
};
