import express, { Application } from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import compression from 'compression';
import cors from 'cors';
import schema from './graphql/schema';

/**
 * @constant PORT - the port the app will run on.
 */
const PORT: number = 5000;
const app: Application = express();

/**
 * @param schema - the service schema.
 * @param validationRules - since in federation you can get limitless-depth object there is
 * a configured limitation.
 * @param playground - enable the graphql playground environment.
 */
const server: ApolloServer = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
  playground: true,
});

app.use('*', cors());
app.use(compression());

server.applyMiddleware({ app, path: '/graphql' });

/**
 * @param {number} port -The port the app would run on.
 * The @constant PORT is defined above.
 */
app.listen({ port: PORT }, (): void =>
  console.log(`GraphQL is now running on http://localhost:${PORT}/graphql`)
);
