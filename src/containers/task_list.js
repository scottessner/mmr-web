import React, { Component } from 'react';
import {connect} from 'react-redux';
import TaskDetail from '../components/task-detail';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

class TaskList extends Component {

    renderTask() {
        return this.props.tasks.map((task) => {
            return (
                <Grid item xs={12} key={task.id}>
                    <TaskDetail task={task} />
                    <Divider/>
                </Grid>
            );
        });
    }

    render() {
        return (
            <Grid container>
                {this.renderTask()}
            </Grid>
        )
    }
}

function mapStateToProps({tasks}) {
    return { tasks };
}

export default connect(mapStateToProps)(TaskList);