import { queryType } from './query'
import { mutationType } from './mutation'
import { bookTypeDefs } from './books'
import { DocumentNode } from 'graphql'
import { subscriptionType } from './subscription'

export const typeDefs: DocumentNode[] = [queryType, mutationType, subscriptionType, ...bookTypeDefs]
