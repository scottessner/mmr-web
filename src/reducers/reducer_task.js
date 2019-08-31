import {FETCH_TASKS} from '../actions/index';

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_TASKS:
            return action.payload.data.sort(function(a, b){return new Date(b.time_updated) - new Date(a.time_updated)});
        default:{}
    }

    return state;
}