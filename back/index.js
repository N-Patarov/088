import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import homeRoute from './routes/homeRoute.js';
import apiRoute from './routes/apiRoute.js';
import articleRoute from './routes/articleRoute.js';
import authRoute from './routes/authRoute.js';
import testRoute from './routes/testRoute.js';
import userRoute from './routes/userRoute.js';
import likeRoute from './routes/likeRoute.js';
import getLikesRoute from './routes/getLikesRoute.js';
import setSourcesRoute from './routes/setSourcesRoute.js';
import feedRoute from './routes/feedRoute.js';
import path from 'path';
const __dirname = path.resolve();
import { scrape }  from './crawler/index.js';

import Article from './crawler/articleSchema.js';

const app = express();
app.use(cors());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../front/build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'static/index.html'))
})



let db
const CONNECTION_URL = "mongodb://localhost:27017/demo"
const PORT = process.env.PORT || 8000;

db = await mongoose.connect(CONNECTION_URL)
.then( () => app.listen(PORT, console.log("App running on: http://localhost:" + PORT)))
.catch(err => console.error)

app.use("/", homeRoute);
app.use("/api", apiRoute);
app.use("/api/user", authRoute);
app.use("/user", userRoute);
app.use("/setSource", setSourcesRoute);
app.use("/article/", articleRoute);
app.use("/article/like", likeRoute);
app.use("/api/likes", getLikesRoute);
app.use("/feed", feedRoute);
scrape();