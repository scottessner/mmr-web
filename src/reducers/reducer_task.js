import {FETCH_TASKS} from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_TASKS:
            return action.payload.data;
        default:{}
    }

    return state;
}