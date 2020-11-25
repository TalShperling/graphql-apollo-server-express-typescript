import { Book, Maybe } from '../interfaces/types'

/**
 * A fake data source and data source API.
 * It holds a list of books which you can manipulate by CRUD operations using mutations.
 */
let books: Book[] = [
  {
    id: '1',
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling'
  },
  {
    id: '2',
    title: 'Jurassic Park',
    author: 'Michael Crichton'
  }
]

export const getAllBooks = async (): Promise<Book[]> => {
  return Promise.resolve(books)
}

export const getBookById = async (bookId: string): Promise<Book | null> => {
  const book: Book | undefined = books.find((book) => book.id === bookId)
  return book ? Promise.resolve(book) : null
}

export const addBook = async (newBook: Book): Promise<void> => {
  books.push(newBook)
  return Promise.resolve()
}

export const deleteBookById = async (bookId: String): Promise<void> => {
  books = books.filter((book: Book) => book.id !== bookId)
  return Promise.resolve()
}

export const updateBook = async (updatedBook: Book): Promise<void> => {
  const book: Maybe<Book> = await getBookById(updatedBook.id)
  book && Object.assign(book, updatedBook)
  return Promise.resolve()
}
