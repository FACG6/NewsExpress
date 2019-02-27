const showData = require("../dataBase/quires/getData");

exports.get = (req, res) => {
  if (req.headers.cookie) {
    showData((error, results) => {
      if (error) {
        res.render("error");
      } else {
        res.render("homeAuth", { results: results.rows });
      }
    });  
   } else {
    showData((error, results) => {
      if (error) {
        res.render("error");
      } else {
        res.render("home", { results: results.rows });
      }
    });
  }
};
