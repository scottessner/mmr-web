import React, {useState} from 'react';
import useInterval from '../hooks/use-interval';

export default () => {
    const [taskStatus, setTaskStatus] = useState(defaultTaskStatus);
    fetchData();

    async function fetchData() {

        const res = await fetch('https://ssessner.com/mmr-api/v1/status/tasks');
        res
            .json()
            .then(res => setTaskStatus(res));

    }

    useInterval(() => {
        fetchData();
    }, 5000)

    return (
        <div>
            <p>Scan: {taskStatus.scan.open}</p>
            <p>Title Info: {taskStatus.title_info.open}</p>
            <p>Compress: {taskStatus.compress.open}</p>
            <p>Remux: {taskStatus.remux.open}</p>
        </div>
    )

}

const defaultTaskStatus = {"scan": {"active": 0, "open": 0, "error": 0, "complete": 0}, "title_info": {"active": 0, "open": 0, "error": 0, "complete": 0}, "compress": {"active": 0, "open": 0, "error": 0, "complete": 0}, "remux": {"active": 0, "open": 0, "error": 0, "complete": 0}, "preview": {"active": 0, "open": 0, "error": 0, "complete": 0}, "rename": {"active": 0, "open": 0, "error": 0, "complete": 0}}