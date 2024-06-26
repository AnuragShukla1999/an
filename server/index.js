import express from "express";

import cors from 'cors';
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "./route/route.js";
import dbConnection from "./db/db.js";

dotenv.config();
const app = express();


dbConnection();

app.use(cors());

app.use(cookieParser);

app.use(express.json());

app.get("/hi", (req, res) => {
    res.send('Hello');
})


app.use("/api", router)

app.listen(process.env.PORT, () => {
    console.log("server is running at", process.env.PORT)
})