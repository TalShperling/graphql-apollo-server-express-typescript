import { GraphQLResolverMap } from 'apollo-graphql';
import { Resolvers } from '../../interfaces/types';
import { booksQueries, booksMutations } from './booksResolvers';

export const resolvers: Resolvers = {
  ...booksQueries,
  ...booksMutations,
  //...booksSubscription
};
