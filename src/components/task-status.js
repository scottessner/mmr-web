import React, {useState, useEffect} from 'react';
import useInterval from '../hooks/use-interval';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid'
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { useTheme } from '@material-ui/styles';
import {Badge} from "@material-ui/core";
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const TaskStatus = () => {
    const [taskStatus, setTaskStatus] = useState(defaultTaskStatus);

    const fetchData = async () => {

        const res = await axios.get('https://ssessner.com/mmr-api/v1/status/tasks');
        setTaskStatus(res.data);

    };

    useEffect(() =>{ fetchData(); }, []);

    useInterval(() => {
        fetchData();
    }, 5000);

    return (
        <div>
            <Grid container spacing={16} style={{padding: '50px 20px 20px'}}>
                <Grid item xs={12}>
                    {/*<ButtonGroup color={"primary"}>*/}
                    <TaskStatusDetail tasktype={taskStatus.scan} name={'Scan'}/>
                    <TaskStatusDetail tasktype={taskStatus.title_info} name={'Title Info'}/>
                    <TaskStatusDetail tasktype={taskStatus.compress} name={'Compress'}/>
                    <TaskStatusDetail tasktype={taskStatus.remux} name={'Remux'}/>
                    <TaskStatusDetail tasktype={taskStatus.rename} name={'Rename'}/>
                    <TaskStatusDetail tasktype={taskStatus.preview} name={'Preview'}/>
                    {/*</ButtonGroup>*/}
                </Grid>
            </Grid>
            {/*<Grid container spacing={16} style={{padding: '50px 20px 20px'}}>*/}
            {/*    <Grid item xs={4} sm={3} md={2} >*/}
            {/*        <TaskStatusDetail tasktype={taskStatus.scan} name={'Scan'}/>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={4} sm={3} md={2}>*/}
            {/*        <TaskStatusDetail tasktype={taskStatus.title_info} name={'Title Info'}/>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={4} sm={3} md={2}>*/}
            {/*        <TaskStatusDetail tasktype={taskStatus.compress} name={'Compress'}/>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={4} sm={3} md={2}>*/}
            {/*        <TaskStatusDetail tasktype={taskStatus.remux} name={'Remux'}/>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={4} sm={3} md={2}>*/}
            {/*        <TaskStatusDetail tasktype={taskStatus.rename} name={'Rename'}/>*/}
            {/*    </Grid>*/}
            {/*    <Grid item xs={4} sm={3} md={2}>*/}
            {/*        <TaskStatusDetail tasktype={taskStatus.preview} name={'Preview'}/>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
        </div>
    );

};

const TaskStatusDetail = ({tasktype, name}) => {

    return (
        <Tooltip title={
            <React.Fragment>
                <Typography variant={"body1"} component={"p"} noWrap={true}>
                    Open: {tasktype.open}
                </Typography>
                <Typography variant={"body1"} component={"p"} noWrap={true}>
                    Active: {tasktype.active}
                </Typography>
                <Typography variant={"body1"} component={"p"} noWrap={true}>
                    Complete: {tasktype.complete}
                </Typography>
                <Typography variant={"body1"} component={"p"} noWrap={true}>
                    Error: {tasktype.error}
                </Typography>
            </React.Fragment>
        }>
                <Badge badgeContent={tasktype.open + tasktype.active} color={"secondary"} >
                    <Button variant={"outlined"} size={"large"} color={"primary"} style={{flexGrow: 1}}>{name}</Button>
                </Badge>
        </Tooltip>
    );
}

export default TaskStatus;


const defaultTaskStatus = {"scan": {"active": 0, "open": 0, "error": 0, "complete": 0}, "title_info": {"active": 0, "open": 0, "error": 0, "complete": 0}, "compress": {"active": 0, "open": 0, "error": 0, "complete": 0}, "remux": {"active": 0, "open": 0, "error": 0, "complete": 0}, "preview": {"active": 0, "open": 0, "error": 0, "complete": 0}, "rename": {"active": 0, "open": 0, "error": 0, "complete": 0}}