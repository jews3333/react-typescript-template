import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import example from './example';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [
        'example'
    ]
}

const rootReducer = combineReducers({
    example
});

export default persistReducer<any, any>( persistConfig, rootReducer );

export type RootState = ReturnType<typeof rootReducer>;