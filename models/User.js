
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['Resident', 'BusinessOwner', 'CommunityOrganizer'], default: 'Resident' },
});
module.exports = mongoose.model('User', UserSchema);
