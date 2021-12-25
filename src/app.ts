import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from 'dotenv';
import { registerAllRouters } from "./routers/allRouters";
import bodyParser from "body-parser";

dotenv.config();
const app: Express = express()

const PORT: string | number = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

const uri: string = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/?retryWrites=true&w=majority`;
const options = { useUnifiedTopology: true };

registerAllRouters(app);

mongoose
    .connect(uri, {
        dbName: process.env.DB_NAME,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS
    })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running on http://localhost:${PORT}`)
        )
    )
    .catch(error => {
        throw error
    }); 