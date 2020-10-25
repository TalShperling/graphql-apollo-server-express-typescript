import { IResolverObject } from 'apollo-server-express';
import { books } from '../data-mock/books-mock';
import { Book } from '../models/Book';

export const booksQueries: IResolverObject = {
  books: () => {
    return books;
  },
  book: (_, { bookId }) => books.find((book: Book) => book._id === bookId),
};

export const booksMutations: IResolverObject = {
  createBook: (_, { bookToAdd }) => {
    if (books.filter((book: Book) => book._id === bookToAdd._id).length) {
      return {
        success: false,
        message: `ID is already exists, id: ${bookToAdd._id}`,
      };
    }

    books.push(bookToAdd);

    return {
      success: true,
      message: 'book was successfully added',
      books: books,
    };
  },
  updateBook: (_, { bookToUpdate }) => {
    let bookInList: Book | undefined = books.find((book: Book) => book._id === bookToUpdate._id);

    if (bookInList) {
      books.forEach((book: Book) => {
        if (book._id === bookToUpdate._id) {
          book = bookToUpdate;
        }
      });

      return {
        success: true,
        message: `book was updated successfully.`,
        books: books,
      };
    } else {
      return {
        success: false,
        message: 'book does not exists',
        books: books,
      };
    }
  },
};
