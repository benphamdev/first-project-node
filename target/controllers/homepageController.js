"use strict";

var getHomepage = function getHomepage(req, res) {
  return res.render("homepage.ejs");
};
module.exports = {
  getHomepage: getHomepage
};