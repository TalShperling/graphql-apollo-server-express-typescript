import { Resolvers } from '../../interfaces/types'
import { booksMutations, booksQueries, booksSubscriptions } from './booksResolvers'
import { merge } from 'lodash';

export const resolvers: Resolvers = merge({}, booksQueries, booksMutations, booksSubscriptions);