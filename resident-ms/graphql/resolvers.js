// graphql/resolvers.js
import LocalNews from '../models/LocalNews.js';
import NeighborhoodHelp from '../models/NeighborhoodHelp.js';
import EmergencyAlert from '../models/EmergencyAlert.js';

export const resolvers = {
  Query: {
    getAllLocalNews: async () => await LocalNews.find().sort({ timestamp: -1 }),
    getAllNeighborhoodPosts: async () => await NeighborhoodHelp.find().sort({ timestamp: -1 }),
    getAllEmergencyAlerts: async () => await EmergencyAlert.find().sort({ timestamp: -1 }),
  },
  Mutation: {
    addLocalNews: async (_, { news }) => {
      const newPost = new LocalNews(news);
      return await newPost.save();
    },
    addNeighborhoodPost: async (_, { post }) => {
      const newPost = new NeighborhoodHelp(post);
      return await newPost.save();
    },
    addEmergencyAlert: async (_, { alert }) => {
      const newAlert = new EmergencyAlert(alert);
      return await newAlert.save();
    }
  }
};
