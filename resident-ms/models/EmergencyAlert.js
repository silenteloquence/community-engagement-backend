import mongoose from 'mongoose';

export const EmergencyAlertSchema = new mongoose.Schema({
  userId: String,
  username: String,
  title: String,
  location: String,
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('EmergencyAlert', EmergencyAlertSchema);
