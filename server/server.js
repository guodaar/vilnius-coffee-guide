require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();
const port = process.env.PORT || 8080;
const uri = process.env.URI;

const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());

app.get("/shops", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db("coffeeshops")
      .collection("shop-info")
      .find()
      .toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post("/shops", async (req, res) => {
  try {
    const shop = req.body;
    const con = await client.connect();
    const data = await con
      .db("coffeeshops")
      .collection("shop-info")
      .insertOne(shop);
    res.send(data);
    await con.close();
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on ${port} port`);
});
