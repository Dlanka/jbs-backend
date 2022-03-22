import express from "express";
import bodyParser from "body-parser";

import usersRoutes from './routes/users.js'
import advertiesmentRoutes from "./routes/advertiesment.js";

const app = express();
const port = 3001;

app.use(bodyParser.json());

app.use('/users',usersRoutes);
app.use("/ads", advertiesmentRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
