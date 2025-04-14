import mongoose from 'mongoose';

export const LocalNewsSchema = new mongoose.Schema({
  userId: String,
  username: String,
  title: String,
  content: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('LocalNews', LocalNewsSchema);