const mongoose = require('mongoose');
const DB_URL = "mongodb://localhost:27017/myapp"

mongoose
  .connect(DB_URL, {

    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
      console.log("MongoDB Connection Estabilished");
    },
    (err) => {
      /** handle initial connection error */
      console.log("MongoDb connection Failed", err);
    }
  );