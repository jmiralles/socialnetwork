module.exports = function(config, mongoose, nodemailer) {
    var crypto = require('crypto');

    var AccountSchema = new mongoose.Schema({
        email: { type: String, unique: true },
        password: { type: String },
        name: {