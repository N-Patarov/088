import mongoose from 'mongoose';
import moment from 'moment-timezone';


var articleSchema = new mongoose.Schema({
    title: String,
    text: String,
    link: String,
    description: String,
    imgLink: String,
    source: String,
    when: String,
    createdAt: { type: Date, default: Date.now},
    expire_at: {type: Date, default: Date.now, expires: 1800} 
} 
);


var Article = mongoose.model("Article", articleSchema);

export default Article;