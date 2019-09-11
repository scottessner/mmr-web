import React, { Component } from 'react';
import '../App.css';
import AppBar from './app-bar';
import Grid from '@material-ui/core/Grid';
import TaskList from '../containers/task_list';
import TaskStatus from './task-status'

export default class App extends Component {
  render() {
      return (
          <div className="App">
              <AppBar/>
              <TaskStatus/>
              <Grid container spacing={24} style={{padding: '30px'}}>
                  <Grid item xs={12}>
                     <TaskList/>
                  </Grid>
              </Grid>

          </div>
        );
  }
}
