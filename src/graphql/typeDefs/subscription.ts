import { gql } from 'apollo-server-express'
import { DocumentNode } from 'graphql'

export const subscriptionType: DocumentNode = gql`
  type Subscription {
    bookAdded: Book
    bookUpdated: Book
    bookDeleted: ID
  }
`
