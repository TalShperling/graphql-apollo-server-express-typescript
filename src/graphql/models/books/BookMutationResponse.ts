import { IBook } from './Book';

export interface IBookMutationResponse {
  success: boolean;
  message: string;
  books: IBook[];
  book?: IBook;
}
