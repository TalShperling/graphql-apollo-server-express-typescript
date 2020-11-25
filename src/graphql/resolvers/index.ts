import { Resolvers } from '../../interfaces/types'
import { booksMutations, booksQueries } from './booksResolvers'

export const resolvers: Resolvers = {
  ...booksQueries,
  ...booksMutations
  // ...booksSubscription
}
