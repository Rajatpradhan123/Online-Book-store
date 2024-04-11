const mongoose = require("mongoose");




mongoose
.connect("mongodb://127.0.0.1:27017/dbRajat")
.then(() => console.log("database connection establishd"))
.catch((err) => console.log(err.message));


