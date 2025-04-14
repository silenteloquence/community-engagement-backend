import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  enum Role {
    RESIDENT
    BUSINESS_OWNER
    COMMUNITY_ORGANIZER
  }

  type User {
    userId: ID
    username: String!
    accessToken: String!
    role: Role!
    interests: [String!]!
    address: String
  }

  input RegisterUserInput {
    username: String!
    password: String!
    role: Role!
    interests: [String!]!
    address: String
  }

  type Query {
    me: User
  }

  type Mutation {
    verifyToken(accessToken: String!): Boolean
    login(username: String!, password: String!): User
    register(
      username: String!
      password: String!
      role: Role!
      interests: [String!]!
      address: String!
    ): User
  }
`;
