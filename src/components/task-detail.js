import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Tv from '@material-ui/icons/Tv';
import Time from 'react-time';
import Button from "@material-ui/core/Button";
import axios from 'axios';

const TaskDetail = ({task}) => {
    return (
        <div>
            <Paper style={{padding: 12}} align={"left"}>
                <Grid container alignItems={"center"}>
                    <Grid item xs={2} sm={1} align={"center"}>
                        <Avatar>
                            <Tv/>
                        </Avatar>
                    </Grid>
                    <Grid item xs={8} sm={10}>
                        <Typography variant={"h6"}>{task.host}</Typography>
                        <Grid container alignItems={"center"}>
                            <Grid item xs={2} sm={2}>
                                <Typography variant={"body1"}>Type: {task.type}</Typography>
                            </Grid>
                            <Grid item xs={2} sm={2}>
                                <Typography variant={"body1"}>Id: {task.id}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} sm={1} align={"right"}>
                        <TaskProgress task={task} />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={2} sm={1}/>
                    <Grid item xs={8} sm={10}>
                        <TaskTitle task={task} />
                        <Typography variant={"body1"}>
                            Added: <Time value={task.time_added} format={"MM/DD/YYYY hh:mm A"}/>
                        </Typography>
                        <TaskDuration task={task}/>
                        <Typography variant={"body1"}>
                            Updated: <Time value={task.time_updated} format={"MM/DD/YYYY hh:mm A"}/>
                        </Typography>
                    </Grid>
                    <Grid item xs={2} sm={1} align={"right"}>
                        <Button color={"primary"}
                                onClick={() => {axios.put(`https://ssessner.com/mmr-api/v1/tasks/${task.id}`, {state: "open"});}}
                        >
                            Retry
                        </Button>
                        <Button color={"secondary"}
                                onClick={() => {axios.put(`https://ssessner.com/mmr-api/v1/tasks/${task.id}`, {state: "error"});}}
                        >
                            Error
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );

}

class TaskTitle extends Component {
    render() {
        if (this.props.task.title) {
            return (
                <Typography variant={"body1"}>{this.props.task.title.path}</Typography>
            );
        }
        else {
            return (
                <Typography variant={"body1"}></Typography>
            );

        }
    }
}

const TaskProgress = ({task}) => {

    if (task.state === "active") {
        return (
            <div>
                <CircularProgress variant={"static"} color={"secondary"} value={task.progress}/>
                <Typography variant={"body1"}>{task.progress}%</Typography>
            </div>
        );
    }
    else {
        return (
            <Typography variant={"body1"}>{task.state}</Typography>
        );
    }
}


class TaskDuration extends Component {
    render() {
        switch (this.props.task.state){
            case "open": {
                return(
                    <div></div>
                );
            }
            case "active": {
                return(
                    <Typography variant={"body1"}>
                        Started: <Time value={this.props.task.time_started} format={"MM/DD/YYYY hh:mm A"}/>
                    </Typography>
                );
            }
            case "complete": {
                return(
                    <div>
                        <Typography variant={"body1"}>
                            Started: <Time value={this.props.task.time_started} format={"MM/DD/YYYY hh:mm A"}/>
                        </Typography>
                        <Typography variant={"body1"}>
                            Completed: <Time value={this.props.task.time_completed} format={"MM/DD/YYYY hh:mm A"}/>
                        </Typography>
                    </div>
                );
            }
            case "error": {
                return(
                    <div></div>
                );
            }
            default: {
                return(
                    <div></div>
                );
            }
        }

    }
}

export default TaskDetail;