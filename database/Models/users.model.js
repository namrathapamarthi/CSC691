const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Users_Schema = new Schema(
    {
        User_Name: String,
        Email_Address: String,
        Password: String
    }, {
    timestamps: true,
});

const Users = mongoose.model('Users',Users_Schema);

module.exports = Users;