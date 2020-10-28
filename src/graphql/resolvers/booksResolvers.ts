import { IResolverObject } from 'apollo-server-express';
import { addBook, deleteBookById, getAllBooks, getBookById } from '../../utils/bookDataSource';
import { IBook } from '../models/books/Book';
import { IBookMutationResponse } from '../models/books/BookMutationResponse';

export const booksQueries: IResolverObject = {
  books: async () => {
    return await getAllBooks();
  },
  book: async (_, { bookId }: { bookId: String }) => await getBookById(bookId),
};

export const booksMutations: IResolverObject = {
  createBook: async (_, { bookToAdd }: { bookToAdd: IBook }) => {
    const duplicatedBook: void | IBook = await getBookById(bookToAdd.id);
    if (duplicatedBook) {
      return {
        success: false,
        message: `ID is already exists, id: ${duplicatedBook.id}`,
        books: await getAllBooks(),
        book: duplicatedBook,
      } as IBookMutationResponse;
    }

    await addBook(bookToAdd);

    return {
      success: true,
      message: 'book was successfully added',
      books: await getAllBooks(),
      book: bookToAdd,
    } as IBookMutationResponse;
  },
  updateBook: async (_, { bookToUpdate }: { bookToUpdate: IBook }) => {
    const bookInList: IBook | void = await getBookById(bookToUpdate.id);

    if (bookInList) {
      Object.assign(bookInList, bookToUpdate);

      return {
        success: true,
        message: `Book was updated successfully.`,
        books: await getAllBooks(),
        book: bookInList,
      } as IBookMutationResponse;
    } else {
      return {
        success: false,
        message: 'Book does not exists',
        books: await getAllBooks(),
      } as IBookMutationResponse;
    }
  },
  deleteBook: async (_, { bookIdToDelete }) => {
    let bookToDelete: IBook | void = await getBookById(bookIdToDelete);

    if (bookToDelete) {
      await deleteBookById(bookIdToDelete);

      return {
        success: true,
        message: `Book was deleted successfully.`,
        books: await getAllBooks(),
      };
    } else {
      return {
        success: false,
        message: 'Book Id was not found',
        books: await getAllBooks(),
      };
    }
  },
};

const catchError = async () => {
  return {
    success: false,
    message: `An error has occurred.`,
    books: await getAllBooks(),
  } as IBookMutationResponse;
};
