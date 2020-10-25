import { ITypedef } from 'apollo-server-express';
import { queryType } from './query';
import { mutationType } from './mutation';
import { bookTypeDefs } from './books';

export const typeDefs: ITypedef[] = [queryType, mutationType, ...bookTypeDefs];
