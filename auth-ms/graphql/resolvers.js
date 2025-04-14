import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const resolvers = {
  Query: {
    me: async (_, __, { user }) => {
      if (!user) throw new Error('Not authenticated');
      const foundUser = await User.findById(user.userId);
      return {
        userId: foundUser._id,
        username: foundUser.username,
        accessToken: '',
        role: foundUser.role,
        interests: foundUser.interests,
        address: foundUser.address,
      };
    }
  },
  Mutation: {
    register: async (_, args) => {
      const { username, password, role, interests, address } = args;
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        throw new Error('Username already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        username,
        password: hashedPassword,
        role,
        interests,
        address,
      });

      const token = jwt.sign({ userId: newUser._id }, JWT_SECRET, {
        expiresIn: '1d',
      });

      return {
        userId: newUser._id,
        username: newUser.username,
        accessToken: token,
        role: newUser.role,
        interests: newUser.interests,
        address: newUser.address,
      };
    },

    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error('Invalid credentials');
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error('Invalid credentials');
      }

      const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
        expiresIn: '1d',
      });

      return {
        userId: user._id,
        username: user.username,
        accessToken: token,
        role: user.role,
        interests: user.interests,
        address: user.address,
      };
    },
    verifyToken: (_, args) => {
      try {
        const decoded = jwt.verify(args.accessToken, JWT_SECRET);
        return true;
      } catch (error) {
        throw new Error('Invalid or expired token');
      }
    },
  },
};
