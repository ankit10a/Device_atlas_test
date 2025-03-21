import bodyParser from "body-parser";
import express from "express";
import { dbInitialize } from "./models";
// import path from "path"
import router from "./routes";
import cors from 'cors';

const app = express();

// database
dbInitialize();

const whitelist = ['http://localhost:5013', 'http://example2.com']
// const corsOptions = {
//     origin: function (origin: string, callback: (arg0: Error | null, arg1: boolean | undefined) => void) {
//         if (whitelist.indexOf(origin) !== -1) {
//             callback(null, true)
//         } else {
//             callback(new Error('Not allowed by CORS'), undefined)
//         }
//     }
// }

app.use(cors({
    origin: whitelist,
    credentials: true
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api", router)
// app.use(
//     express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
// );


export default app;