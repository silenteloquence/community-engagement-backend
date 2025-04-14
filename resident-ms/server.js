import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { connectDB } from './config/db.js';
import { typeDefs } from './graphql/typeDefs.js';
import { resolvers } from './graphql/resolvers.js';
import authMiddleware from './middleware/authMiddleware.js';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => authMiddleware(req),
});

async function startServer() {

  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 5001
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}${server.graphqlPath}`));
}

connectDB().then(() => {
  startServer();
})
