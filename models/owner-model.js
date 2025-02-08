const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        minlength: 2,
        trim: true
    },
    email: String,
    password: String,
    products: {
        type: Array,
        default: []
    },
    contact: Number,
    picture: String,
    gstin: String
});

module.exports = mongoose.model("owner", ownerSchema);