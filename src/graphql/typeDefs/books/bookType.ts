import { gql } from 'apollo-server-express'
import { DocumentNode } from 'graphql'

export const bookType: DocumentNode = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }
`
