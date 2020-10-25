import { gql } from 'apollo-server-express';

export const mutationType = gql`
  type Mutation {
    createBook(bookToAdd: BookInput!): BookMutationResponse!
    updateBook(bookToUpdate: BookInput!): BookMutationResponse!
    deleteBook(bookToDelete: ID!): BookMutationResponse!
  }
`;
