import { gql } from "apollo-server-express";

export const bookType = gql`
  type Book {
    title: String
    author: String
  }
`;