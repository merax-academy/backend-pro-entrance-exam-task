const express = require("express");
const cors = require("cors");
const { router } = require("./app/routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(3000, "localhost", () => console.log("Server listening on port 3000"));
