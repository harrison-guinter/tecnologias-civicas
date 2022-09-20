import { router } from "./routes";

const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

var corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200,
  methods: "GET, PUT",
};

app.use(cors(corsOptions));
app.use(router);
app.use(cors(corsOptions));

app.listen(port, () => {
  console.log("running...");
});
