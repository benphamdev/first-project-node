"use strict";

var _express = _interopRequireDefault(require("express"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine"));
var _web = _interopRequireDefault(require("./routes/web"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
require("dotenv").config();
var app = (0, _express["default"])();

//config view Engine
(0, _viewEngine["default"])(app);

//init all web routes
(0, _web["default"])(app);
var port = process.env.PORT || 8081;
var a = process.env.NODE_ENV;
var b = app.get("env");
console.log(a + " " + b);
app.listen(port, function () {
  console.log("App is running at the port ".concat(port));
});
app.get("/error", function (req, res) {
  setTimeout(function () {
    throw new Error("Error occured");
  }, 10);
});