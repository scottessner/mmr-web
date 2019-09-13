import React, { useState, useEffect } from 'react';
import useInterval from '../hooks/use-interval';
import axios from 'axios';
import TaskDetail from '../components/task-detail';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const fetchData = async () => {

        const res = await axios.get('https://ssessner.com/mmr-api/v1/tasks/search?state=active');
        setTasks(res.data.sort(function(a, b){return new Date(b.time_updated) - new Date(a.time_updated)}));

    };

    const renderTask = () => {
        return tasks.map((task) => {
            return (
                <Grid item xs={12} key={task.id}>
                    <TaskDetail task={task} />
                    <Divider/>
                </Grid>
            );
        });
    }

    useEffect(() =>{ fetchData(); }, []);

    useInterval(() => {
        fetchData();
    }, 30000);

    return (
        <Grid container>
            {renderTask()}
        </Grid>
    );
};

export default TaskList;