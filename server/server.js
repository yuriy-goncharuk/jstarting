const express = require("express");
const app = express();
const port = 3000;

app.use("/app", express.static("../client"));

app.listen(port, () => console.log(`Server vstal on port ${port}!`));
