const app = require("express")();
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const { MongoDB_URL } = require("../config");
const routes = require('./routes');

console.log('hello');

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(MongoDB_URL, (err, db) =>{
  if (err) return console.log(err);
  routes(app, db);
});


module.exports = {
  path: "/api/",
  handler: app
};
