import { IBook } from '../graphql/models/books/Book';

/**
 * A fake data source and data source API.
 * It holds a list of books which you can manipulate by CRUD operations using mutations.
 */
let books: IBook[] = [
  {
    id: '1',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    id: '2',
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

export const getAllBooks = async (): Promise<IBook[]> => {
  return Promise.resolve(books);
};

export const getBookById = async (bookId: string): Promise<IBook | void> => {
  return Promise.resolve(books.find((book) => book.id === bookId));
};

export const addBook = async (newBook: IBook): Promise<void> => {
  books.push(newBook);
  return Promise.resolve();
};

export const deleteBookById = async (bookId: String): Promise<void> => {
  books = books.filter((book: IBook) => book.id !== bookId);
  return Promise.resolve();
};

export const updateBook = async (updatedBook: IBook): Promise<void> => {
  let book: IBook | void = await getBookById(updatedBook.id);
  Object.assign(book, updatedBook);
  return Promise.resolve();
};
