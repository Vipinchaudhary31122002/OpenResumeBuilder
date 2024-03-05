import { PORT } from "./src/constants.js";
import connectDB from "./src/db/connectdb.js";
import app from "./src/app.js";

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Example app listening on port http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongodb connection failed!!", err);
  });
