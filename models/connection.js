const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const { MongoClient } = require("mongodb").MongoClient;


// const uri = process.env.URL;

const uri = "mongodb://prateek_31:prteek2123@ac-gv778bu-shard-00-00.b4qq5bi.mongodb.net:27017,ac-gv778bu-shard-00-01.b4qq5bi.mongodb.net:27017,ac-gv778bu-shard-00-02.b4qq5bi.mongodb.net:27017/?ssl=true&replicaSet=atlas-nknmue-shard-0&authSource=admin&retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
