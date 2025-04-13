
const mongoose = require('mongoose');
const BusinessSchema = new mongoose.Schema({
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    name: String,
    description: String,
    deals: [String],
});
module.exports = mongoose.model('Business', BusinessSchema);
