const express = require("express");
const bodyParser = require("body-parser");
const Producer = require("./producer");
const producer = new Producer();
const app = express();

app.use(bodyParser.json("application/json"));

app.post("/sendlog", async (req, res, next) => {
  try {
    await producer.publishMessage(req.body.logType, req.body.message);
    res.send();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("server started....");
});
