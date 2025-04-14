
import { mongoose } from "mongoose";

import dotenv from 'dotenv';

dotenv.config();

export async function connectDB() {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
        dbName: 'communityDB'
      });
      mongoose.set('debug', true);
      console.log('✅ MongoDB connected');
    } catch (error) {
      console.error('❌ MongoDB connection error:', error);
      process.exit(1);
    }
  }
