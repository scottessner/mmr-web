import React, { Component } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
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
                        </Grid>
                        <Grid item xs={2} sm={1} align={"right"}>
                            <TaskProgress task={this.props.task} />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={2} sm={1}/>
                        <Grid item xs={8} sm={10}>
                            <Typography variant={"body1"}>{this.props.task.source_path}</Typography>
                            <Typography variant={"body1"}>
                                Added: <Time value={this.props.task.time_added} format={"DD/MM/YYYY hh:mm A"}/>
                            </Typography>
                            <TaskDuration task={this.props.task}/>
                        </Grid>
                        <Grid item xs={2} sm={1} align={"right"}>
                            {/*<TaskProgress task={this.props.task} />*/}
                        </Grid>

                    </Grid>
                </Paper>
            </div>
        );
    }
}

class TaskProgress extends Component {
    render() {
        if (this.props.task.state == "active") {
            return (
                <CircularProgress variant={"static"} color={"secondary"} value={this.props.task.progress}/>
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
                return "";
            }
            case "active": {
                return(
                    <Typography variant={"body1"}>
                        Started: <Time value={this.props.task.time_started} format={"DD/MM/YYYY hh:mm A"}/>
                    </Typography>
                );
            }
            case "complete": {
                return(
                    <div>
                        <Typography variant={"body1"}>
                            Started: <Time value={this.props.task.time_started} format={"DD/MM/YYYY hh:mm A"}/>
                        </Typography>
                        <Typography variant={"body1"}>
                            Completed: <Time value={this.props.task.time_completed} format={"DD/MM/YYYY hh:mm A"}/>
                        </Typography>
                    </div>
                );
            }
        }

    }
}

export default TaskDetail;