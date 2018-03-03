import mongoose from "../config/database";

var Schema = mongoose.Schema;

var CFPRequestSchema = new mongoose.Schema({
    name: { type: String, required: true, maxlength: 100},
    email: { type: String, required: true, maxlength: 320 },
    topic: { type: String, required: true, maxlength: 50 },
    progress: { type: String, required: true, maxlength: 50  },
    conference: { type: String, required: true, maxlength: 50  },
    additional: { type: String, required: true, maxlength: 2000 },
    created: { type: Date, default: Date.now },
    edited: { type: Date, default: Date.now },
    secret: { type: String, required: true, maxlength: 50 }
});

module.exports = mongoose.model('CFPRequest', CFPRequestSchema);