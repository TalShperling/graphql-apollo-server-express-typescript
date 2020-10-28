import { gql, ITypedef } from 'apollo-server-express';

export const bookType: ITypedef = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }
`;
