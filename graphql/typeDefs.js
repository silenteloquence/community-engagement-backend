
const { gql } = require('apollo-server-express');
module.exports = gql`
  type User {
    id: ID!
    name: String
    email: String
    role: String
  }

  type Post {
    id: ID!
    content: String
    author: User
  }

  type Business {
    id: ID!
    name: String
    description: String
    deals: [String]
  }

  type Event {
    id: ID!
    title: String
    description: String
    date: String
  }

  type Query {
    getPosts: [Post]
    getBusinesses: [Business]
    getEvents: [Event]
  }

  type Mutation {
    register(name: String, email: String, password: String): String
    login(email: String, password: String): String
    createPost(content: String): Post
    createBusiness(name: String, description: String, deals: [String]): Business
    createEvent(title: String, description: String, date: String): Event
  }
`;
