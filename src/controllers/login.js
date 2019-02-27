exports.get = (req, res) => {
  if (req.headers.cookie) {
    res.redirect('/');
  } else {
    res.render('signIn');
  }
};
