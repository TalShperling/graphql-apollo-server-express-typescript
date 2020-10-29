import { gql } from 'apollo-server-express';
import { DocumentNode } from 'graphql';

export const bookMutationResponse: DocumentNode = gql`
  type BookMutationResponse {
    success: Boolean!
    message: String!
    books: [Book]
    book: Book
  }
`;
