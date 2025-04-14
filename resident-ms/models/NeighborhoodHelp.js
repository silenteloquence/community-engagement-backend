import mongoose from 'mongoose';

export const NeighborhoodHelpSchema = new mongoose.Schema({
  userId: String,
  username: String,
  title: String,
  content: String,
  interestsArea: [String],
  location: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('NeighborhoodHelp', NeighborhoodHelpSchema);
