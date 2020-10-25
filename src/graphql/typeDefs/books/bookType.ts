import { gql, ITypedef } from 'apollo-server-express';

export const bookType: ITypedef = gql`
  type Book {
    _id: ID!
    title: String!
    author: String!
  }
`;
