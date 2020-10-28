import { gql, ITypedef } from 'apollo-server-express';

export const bookInputType: ITypedef = gql`
  input BookInput {
    id: ID!
    title: String!
    author: String!
  }
`;
