require("dotenv").config();
import express from "express";
import logger from "../logger";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";

let app = express();

//config view Engine
configViewEngine(app);

//init all web routes
initWebRoutes(app);

let port = process.env.PORT || 8081;

let a = process.env.NODE_ENV;
let b = app.get("env");

console.log(a + " " + b);

app.listen(port, () => {
  console.log(`App is running at the port ${port}`);
});

app.get("/error", (req, res) => {
  setTimeout(function () {
    throw new Error("Error occured");
  }, 10);
});

logger.log("info", "Hello created log files!", { foo: "bar" });
logger.info("Hello created log files!", { foo: "bar" });
