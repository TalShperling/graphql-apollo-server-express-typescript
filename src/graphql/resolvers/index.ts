import { IResolvers } from 'apollo-server-express';
import { booksQueries, booksMutations } from './booksResolvers';

export const resolvers: IResolvers = {
  Query: {
    ...booksQueries,
  },
  Mutation: {
    ...booksMutations,
  },
  //   Subscription: {
  //     ...UserSubscription
  //   }
};
