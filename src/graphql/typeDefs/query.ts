import { gql } from 'apollo-server-express';

export const queryType = gql`
  type Query {
    book(bookId: ID!): Book
    books: [Book]
  }
`;
