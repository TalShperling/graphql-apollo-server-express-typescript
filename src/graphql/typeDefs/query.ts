const { gql } = require("apollo-server");

export const query = gql`
type Query {
  books: [Book]
}
`;