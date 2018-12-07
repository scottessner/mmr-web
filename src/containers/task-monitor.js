import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchTasks} from '../actions/index';
import TaskList from './task_list';

class TaskMonitor extends Component {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
    this.onClick()
    let timer = setInterval(this.onClick, 60000);
    this.setState({timer});
    }

    componentWillUnmount() {
        this.clearInterval(this.state.timer);
      }

    onClick() {
        this.props.fetchTasks();
    }


    render() {
        return (
            <TaskList/>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchTasks}, dispatch);
}

export default connect(null, mapDispatchToProps)(TaskMonitor);