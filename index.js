// implement your API here
const express = require("express"); //commonJS modules

const Database = require("./data/db.js");

const server = express();

server.use(express.json()); //needed for POST and PUT/PATCH teaches express how to read JSON from the body

server.get("/", (req, res) => {
  res.json({ hello: "beautiful people!" });
});

//view a list of database
server.get("/api/database", (req, res) => {
  //go and get the Database from the database
  Database.find()
    .then(database => {
      res.status(200).json(database);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: "opps" });
    });

});

const port = 5000;
server.listen(port, () => console.log(`\n** API on port ${port} \n`));
