import { gql, ITypedef } from 'apollo-server-express';

export const bookInputType: ITypedef = gql`
  input BookInput {
    _id: ID!
    title: String!
    author: String!
  }
`;
