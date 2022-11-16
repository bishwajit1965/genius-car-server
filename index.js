const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require("mongodb");

require("dotenv").config();
/* Middlewares
================*/
app.use(cors());
// converts data to json format wile posting a data to server
app.use(express.json());

// user: dbuser
// Password: 9r7OYRxvakSsgFlS

console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
/* Database connection
======================*/

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.l3p6wcn.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
 

console.log(uri);
// Root Url to test server response
app.get("/", (req, res) => {
  res.send("Genius car server is running.");
});

async function run() {
  try {
    // const connection = client.db("genius-car-db").collection("");
  } finally {
  }
}
run().catch((error) => {
  console.error(error);
});

app.listen(port, () => {
  console.log(`Genius car server is running on port: ${port}`);
});
