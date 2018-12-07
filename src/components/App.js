import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import AppBar from './app-bar';
import Grid from '@material-ui/core/Grid';
import TaskMonitor from '../containers/task-monitor';

export default class App extends Component {
  render() {
      return (
          <div className="App">
              <AppBar/>
              <Grid container spacing={24}>
                  <Grid item xs={12}>
                     <TaskMonitor/>
                  </Grid>
              </Grid>

          </div>
        );
  }
}
