import 'graphql-import-node';
import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import { typeDefs } from './typeDefs/index';
import { resolvers } from './resolvers/index';

/**
 * The schema imports the resolvers and the typeDefs and exports it as an executable schema.
 */
const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
