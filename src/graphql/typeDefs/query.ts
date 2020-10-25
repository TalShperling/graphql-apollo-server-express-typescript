import { gql } from 'apollo-server-express';

export const queryType = gql`
  type Query {
    books: [Book]
    book(bookId: String!): Book
  }
`;
