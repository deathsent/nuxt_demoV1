const mongoose = require('mongoose')
var mongo_uri = "mongodb+srv://admin:1234@tidchat.j88pl.gcp.mongodb.net/Nuxt-API?retryWrites=true&w=majority";

mongoose.connect(mongo_uri, { useNewUrlParser: true, useUnifiedTopology: false }).then(
    () => {
      console.log("[success] task 2 : connected to the database ");
    },
    error => {
      console.log("[failed] task 2 " + error);
      process.exit();
    }
  );

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("MongoDB Connected...");
});

module.exports = db