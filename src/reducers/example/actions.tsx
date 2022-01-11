import { createAction } from 'typesafe-actions';
import { ExampleState } from './types';

export const SET_EXAMPLE = 'example/SET_EXAMPLE';

export const setExample = createAction(SET_EXAMPLE)<ExampleState>();