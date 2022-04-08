import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import homeRoute from './routes/homeRoute.js';
import{ scrapeFlagman } from './crawler/sources/flagman.js';
import{ scrapeNewsBg } from './crawler/sources/newsBg.js';
import { scrape }  from './crawler/index.js';

const app = express();
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

let db
const CONNECTION_URL = "mongodb://localhost:27017/demo"
const PORT = process.env.PORT || 8000;

db = await mongoose.connect(CONNECTION_URL)
.then( () => app.listen(PORT, console.log("App running on: http://localhost:" + PORT)))
.catch(err => console.error)

app.use("/", homeRoute);
scrape();