import { IResolverObject } from 'apollo-server-express';
import { books } from '../data-mock/books-mock';
import { IBook } from '../models/books/Book';
import { IBookMutationResponse } from '../models/books/BookMutationResponse';

export const booksQueries: IResolverObject = {
  books: () => {
    return books;
  },
  book: (_, { bookId }: { bookId: String }) => books.find((book: IBook) => book._id === bookId),
};

export const booksMutations: IResolverObject = {
  createBook: (_, { bookToAdd }: { bookToAdd: IBook }) => {
    const duplicateBooks: IBook[] = books.filter((book: IBook) => book._id === bookToAdd._id)
    if (duplicateBooks.length) {
      return {
        success: false,
        message: `ID is already exists, id: ${bookToAdd._id}`,
        books: duplicateBooks
      } as IBookMutationResponse;
    }

    books.push(bookToAdd);

    return {
      success: true,
      message: 'book was successfully added',
      book: bookToAdd,
    } as IBookMutationResponse;;
  },
  updateBook: (_, { bookToUpdate }: { bookToUpdate: IBook }) => {
    let bookInList: IBook | undefined = books.find((book: IBook) => book._id === bookToUpdate._id);

    if (bookInList) {
      Object.assign(bookInList, bookToUpdate);

      return {
        success: true,
        message: `Book was updated successfully.`,
        book: bookInList,
      } as IBookMutationResponse;;
    } else {
      return {
        success: false,
        message: 'Book does not exists',
        books: books,
      } as IBookMutationResponse;;
    }
  },
  /*deleteBook: (_, { bookIdToDelete }) => {
    let bookToDelete: IBook | undefined = books.find((book: IBook) => book._id === bookIdToDelete);

    if (bookToDelete) {
      books = books.filter(book => book.id !== bookIdToDelete);

      return {
        success: true,  
        message: `Book was deleted successfully.`,
        books: books,
      };
    } else {
      return {
        success: false,
        message: 'Book Id was not found',
        books: books,
      };
    }
  },*/
};
