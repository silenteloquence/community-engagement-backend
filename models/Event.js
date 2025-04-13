
const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: String,
    description: String,
    date: Date,
});
module.exports = mongoose.model('Event', EventSchema);
