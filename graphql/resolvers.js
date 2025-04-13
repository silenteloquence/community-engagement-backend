
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Post = require('../models/Post');
const Business = require('../models/Business');
const Event = require('../models/Event');

module.exports = {
  Query: {
    getPosts: async () => await Post.find().populate('author'),
    getBusinesses: async () => await Business.find().populate('owner'),
    getEvents: async () => await Event.find().populate('organizer'),
  },
  Mutation: {
    register: async (_, { name, email, password }) => {
      const user = new User({ name, email, password: await bcrypt.hash(password, 10) });
      await user.save();
      return jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user || !await bcrypt.compare(password, user.password)) throw new Error('Invalid credentials');
      return jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    },
    createPost: async (_, { content }, { user }) => {
      if (!user) throw new Error('Not authenticated');
      const post = new Post({ content, author: user.userId });
      return await post.save();
    },
    createBusiness: async (_, { name, description, deals }, { user }) => {
      if (!user) throw new Error('Not authenticated');
      const business = new Business({ name, description, deals, owner: user.userId });
      return await business.save();
    },
    createEvent: async (_, { title, description, date }, { user }) => {
      if (!user) throw new Error('Not authenticated');
      const event = new Event({ title, description, date, organizer: user.userId });
      return await event.save();
    }
  }
};
