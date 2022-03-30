const express = require("express");
const cors = require("cors");
const { parseAsString } = require("./tsv2json");
const result = require("./result");

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to tsv2json !");
});

app.get("/json-output/:id", async (req, res) => {
  const { id } = req.params;
  res.send({ result: { jsonData: result[id] || {}, key: id, error: {} } });
});

app.post("/tsv-to-json", async (req, res) => {
  const { TSVData } = req.body;
  const jsonData = await parseAsString(TSVData);
  const resultLength = Object.keys(result)?.length + 1;
  result[`${resultLength}`] = jsonData;
  res.send({
    result: {
      jsonData: jsonData.json,
      key: resultLength,
      error: jsonData.error,
    },
  });
});

app.listen(port, () => {
  console.log(
    `Application started on port ${port}. Goto http://localhost:${port}`
  );
});
