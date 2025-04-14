// graphql/typeDefs.js
import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type LocalNewsPost {
    userId: String
    username: String
    title: String
    content: String
    timestamp: String
  }

  type NeighborhoodHelpPost {
    userId: String
    username: String
    title: String
    content: String
    interestsArea: [String]
    location: String
    timestamp: String
  }

  type EmergencyAlerts {
    userId: String
    username: String
    title: String
    location: String
    timestamp: String
  }

  input LocalNewsInput {
    userId: String
    username: String
    title: String
    content: String
    timestamp: String
  }

  input NeighborhoodHelpInput {
    userId: String
    username: String
    title: String
    content: String
    interestsArea: [String]
    location: String
    timestamp: String
  }

  input EmergencyAlertInput {
    userId: String
    username: String
    title: String
    location: String
    timestamp: String
  }

  type Query {
    getAllLocalNews: [LocalNewsPost]
    getAllNeighborhoodPosts: [NeighborhoodHelpPost]
    getAllEmergencyAlerts: [EmergencyAlerts]
  }

  type Mutation {
    addLocalNews(news: LocalNewsInput!): LocalNewsPost
    addNeighborhoodPost(post: NeighborhoodHelpInput!): NeighborhoodHelpPost
    addEmergencyAlert(alert: EmergencyAlertInput!): EmergencyAlerts
  }
`;
