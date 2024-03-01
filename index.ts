const express = require("express");
const { Express } = require("express");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

// const routeModule = require("./PracticeTypescript");
const testModuleExport = require("./PracticeTypescript.ts");

dotenv.config();

app.use(bodyParser.urlencoded({ extends: false }));
app.use(bodyParser.json());
app.use(cors());

app.get("/check", testModuleExport);
// app.get(routeModule);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
