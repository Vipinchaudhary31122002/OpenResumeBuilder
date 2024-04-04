import { PORT } from "./src/constants.js";
// import connectDB from "./src/db/connectdb.js";
import app from "./src/app.js";

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
// connectDB()
//   .then(() => {
//     app.listen(DEVELOPMENT_PORT, () => {
//       console.log(`Example app listening on port http://localhost:${DEVELOPMENT_PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log("Mongodb connection failed!!", err);
//   });
