import { books } from "../data/books-mock";

export const booksResolvers = {
  Query: {
    books: () => books,
  },
};