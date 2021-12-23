import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express()

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());

const uri: string = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/?retryWrites=true&w=majority`;
const options = { useUnifiedTopology: true };

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