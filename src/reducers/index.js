import { combineReducers } from 'redux';
import TaskReducer from './reducer_task';

const rootReducer = combineReducers({
    tasks: TaskReducer
});

export default rootReducer;