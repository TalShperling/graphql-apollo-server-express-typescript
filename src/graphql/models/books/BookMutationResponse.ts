import { IBook } from "./Book";

export interface IBookMutationResponse {
    success: Boolean;
    message: String;
    books?: IBook[];
    book?: IBook;
}
