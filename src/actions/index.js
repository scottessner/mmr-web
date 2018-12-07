import axios from 'axios';

const ROOT_URL= `http://ssessner.com/mmr-api/v1/tasks?filter=open&filter=active`;

export const FETCH_TASKS = 'FETCH_TASKS';

export function fetchTasks() {
    const url = `${ROOT_URL}`;
    const request = axios.get(url);

    return {
        type: FETCH_TASKS,
        payload: request
    };
}