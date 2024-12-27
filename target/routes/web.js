"use strict";

var _express = _interopRequireDefault(require("express"));
var _homepageController = _interopRequireDefault(require("../controllers/homepageController"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/*
init all web routes
 */

var router = _express["default"].Router();
var initAllWebRoutes = function initAllWebRoutes(app) {
  router.get("/", _homepageController["default"].getHomepage);
  return app.use("/", router);
};
module.exports = initAllWebRoutes;