import mongoose from 'mongoose';

var articleSchema = new mongoose.Schema({
    title: String,
    text: String,
    link: String,
    description: String,
    imgLink: String,
},
 { timestamps: true }
);

var Article = mongoose.model("Article", articleSchema);

export default Article;