/* ******************************************
 * This server.js file is the primary file of the
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const env = require("dotenv").config();
const app = express();
app.set("layout", "./layouts/layout"); //not all views root

/* ***********************
 * View engine and Templates
 *************************/
app.set("view engine", "ejs");
app.use(expressLayouts);
const static = require("./routes/static");

//Index route
app.get("/", function (req, res) {
  res.render("index", { title: "Home" });
});
/* ***********************
 * Routes
 *************************/
app.use(static);

/* ***********************
 * Local Server Information
 * Values from .env (environment) file
 *************************/
const port = process.env.PORT;
const host = process.env.HOST;

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`);
});

// /* ***********************
// original code

/* ******************************************
 * This server.js file is the primary file of the
 * application. It is used to control the project.
 *******************************************/
/* ***********************
 * Require Statements
 *************************/
// const express = require("express");
// const expressLayouts = require("express-ejs-layouts");
// const env = require("dotenv").config();
// const app = express();
// app.set("layout", "./layouts/layout"); //not all views root

// //Index route
// app.get("/", function (req, res) {
//   res.render("index", { title: "Home" });
// });

// /* ***********************
//  * View engine and Templates
//  *************************/
// app.set("view engine", "ejs");
// app.use(expressLayouts);
// const static = require("./routes/static");

// /* ***********************
//  * Routes
//  *************************/
// app.use(static);

// /* ***********************
//  * Local Server Information
//  * Values from .env (environment) file
//  *************************/
// const port = process.env.PORT;
// const host = process.env.HOST;

// /* ***********************
//  * Log statement to confirm server operation
//  *************************/
// app.listen(port, () => {
//   console.log(`app listening on ${host}:${port}`);
// });
