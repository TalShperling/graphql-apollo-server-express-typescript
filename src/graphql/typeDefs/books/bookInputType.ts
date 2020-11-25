import { gql } from 'apollo-server-express'
import { DocumentNode } from 'graphql'

export const bookInputType: DocumentNode = gql`
  input BookInput {
    id: ID!
    title: String!
    author: String!
  }
`
