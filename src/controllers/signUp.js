exports.get = (req, res) => {
  res.render('signUp');
};

exports.post = (req, res) => {
  const newUser = {
    fullName: req.body.fullName,
    email: req.body.email,
    password: req.body.password,
  };
};
