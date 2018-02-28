import mongoose from "../config/database";

var Schema = mongoose.Schema;

var CFPRequestSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    bio: { type: String },
    progress: { type: String },
    conference: { type: String },
    additional: { type: String },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CFPRequest', CFPRequestSchema);