import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "127.0.0.1";


app.listen(PORT, () => { console.log(`Server listening on http://${HOST}:${PORT}`); });