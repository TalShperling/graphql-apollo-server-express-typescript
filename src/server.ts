import { ApolloServer } from 'apollo-server-express'
import compression from 'compression'
import cors from 'cors'
import express, { Application } from 'express'
import { resolvers } from './graphql/resolvers/index'
import { typeDefs } from './graphql/typeDefs'
import { PubSub } from 'graphql-subscriptions';
import http from 'http';

/**
 * @constant PORT - the port the app will run on.
 */
const PORT: number = 5000
const app: Application = express()
export const pubsub = new PubSub();

/**
 * @param schema - the service schema.
 * @param validationRules - since in federation you can get limitless-depth object there is
 * a configured limitation.
 * @param playground - enable the graphql playground environment.
 */
const server: ApolloServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers as any,
  introspection: true
})

app.use('*', cors())
app.use(compression())

const httpServer = http.createServer(app);

server.applyMiddleware({ app })

server.installSubscriptionHandlers(httpServer)

/**
 * @param {number} port -The port the app would run on.
 * The @constant PORT is defined above.
 */
httpServer.listen({ port: PORT }, (): void => {
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}${server.subscriptionsPath}`)
})
