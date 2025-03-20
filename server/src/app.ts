import bodyParser from "body-parser";
import express from "express";
import { dbInitialize } from "./models";
// import path from "path"
import router from "./routes";

const app = express();

// database
dbInitialize();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api", router)
// app.use(
//     express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
// );


export default app;