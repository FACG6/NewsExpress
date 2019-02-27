const showData = require('../dataBase/quires/getData');

exports.get = (req, res) => {
  showData((error, results) => {
    if (error) {
      console.log(error);
    } else {
        console.log(results.rows[0])
      res.render('home',{ results:results.rows[0] });
    }
  });
};
