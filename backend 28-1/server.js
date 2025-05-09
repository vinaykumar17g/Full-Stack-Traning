import express from "express"
import cors from 'cors';
import { userRouter } from "./routes/user.routes.js";
import 'dotenv/config';
import { dbConnect } from "./config/db.js";
import bodyParser from "body-parser";
import { productRouter } from "./routes/product.routes.js";
const jsonParser=bodyParser.json();
const app = express();
app.use(cors())
const port=process.env.PORT
app.use(jsonParser);
app.use("/image", express.static("uploads"));
app.use("/product",productRouter)
app.use("/user",userRouter);
dbConnect();

app.get("/", (req, res)=> {
  res.send("Hello Vinay Kumar!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
