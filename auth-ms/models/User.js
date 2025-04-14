import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['RESIDENT', 'BUSINESS_OWNER', 'COMMUNITY_ORGANIZER'],
    default: 'RESIDENT',
  },
  interests: [String],
  address: String
});

export const User = mongoose.model('User', userSchema);