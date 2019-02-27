const showData = require('../dataBase/quires/getData');

exports.get = (req, res) => {
  showData((error, results) => {
    if (error) {
      res.render('error');
    } else {
      res.render('home', { results: results.rows });
    }
  });
};
