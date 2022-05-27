import mongoose from 'mongoose';


var userSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 2,
        max: 255,
        required: true
    },
    email: {
        type: String,
        min: 5,
        max: 255,
        required: true
    },
    password: {
        type: String,
        min: 6,
        max: 1024,
        required: true
    },
    date:{
        type: Date, 
        default: Date.now
    },
    sources: []
} 
);


var User = mongoose.model("User", userSchema);

export default User;