import { gql, ITypedef } from 'apollo-server-express';

export const bookMutationResponse: ITypedef = gql`
  type BookMutationResponse {
    success: Boolean!
    message: String!
    books: [Book]
    book: Book
  }
`;
