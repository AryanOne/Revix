import express from "express";
import cookieParser from "cookie-parser";
import auth from "./routes/auth";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/',auth);

app.listen(7070, () => {
    console.log("started at http://localhost:7070");
});
