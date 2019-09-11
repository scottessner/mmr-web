import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Tv from '@material-ui/icons/Tv';
import Time from 'react-time';


class TaskDetail extends Component {

    render() {
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
                            <Typography variant={"h6"}>{this.props.task.host}</Typography>
                            <Grid container alignItems={"center"}>
                                <Grid item xs={2} sm={2}>
                                    <Typography variant={"body1"}>Type: {this.props.task.type}</Typography>
                                </Grid>
                                <Grid item xs={2} sm={2}>
                                    <Typography variant={"body1"}>Id: {this.props.task.id}</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} sm={1} align={"right"}>
                            <TaskProgress task={this.props.task} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2} sm={1}/>
                        <Grid item xs={8} sm={10}>
                            <TaskTitle task={this.props.task} />
                            <Typography variant={"body1"}>
                                Added: <Time value={this.props.task.time_added} format={"MM/DD/YYYY hh:mm A"}/>
                            </Typography>
                            <TaskDuration task={this.props.task}/>
                            <Typography variant={"body1"}>
                                Updated: <Time value={this.props.task.time_updated} format={"MM/DD/YYYY hh:mm A"}/>
                            </Typography>
                        </Grid>
                        <Grid item xs={2} sm={1} align={"right"}>
                        </Grid>

                    </Grid>
                </Paper>
            </div>
        );
    }
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

class TaskProgress extends Component {
    render() {
        if (this.props.task.state === "active") {
            return (
                <div>
                    <CircularProgress variant={"static"} color={"secondary"} value={this.props.task.progress}/>
                    <Typography variant={"body1"}>{this.props.task.progress}%</Typography>
                </div>
            );
        }
        else {
            return (
                <Typography variant={"body1"}>{this.props.task.state}</Typography>
            );
        }
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