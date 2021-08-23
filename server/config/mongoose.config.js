const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/crmdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to db"))
  .catch(() => console.log("Disconnected from db"));
