import { GraphQLResolverMap } from 'apollo-graphql';
import { booksQueries, booksMutations } from './booksResolvers';

export const resolvers: GraphQLResolverMap<any> = {
  ...booksQueries,
  ...booksMutations,
  //...booksSubscription
};
