import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type ExampleAction = ActionType<typeof actions>;

export type ExampleState = number; //string|number|boolean... 등