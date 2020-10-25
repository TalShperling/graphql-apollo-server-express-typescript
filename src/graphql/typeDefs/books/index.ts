import { ITypedef } from 'apollo-server-express';
import { bookMutationResponse } from './bookMutationResponse';
import { bookInputType } from './bookInputType';
import { bookType } from './bookType';

export const bookTypeDefs: ITypedef[] = [bookType, bookInputType, bookMutationResponse];
