import { createReducer } from 'typesafe-actions';
import { SET_EXAMPLE } from './actions';
import { ExampleState, ExampleAction } from './types';

const initialState:ExampleState = 10;

const example = createReducer<ExampleState, ExampleAction>(initialState, {
    [SET_EXAMPLE] : (state, action) => {
        return action.payload
    }
});

export default example;