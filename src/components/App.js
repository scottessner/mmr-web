import React, { Component } from 'react';
import '../App.css';
import AppBar from './app-bar';
import Grid from '@material-ui/core/Grid';
import TaskList from '../containers/task_list';
import TaskStatus from './task-status';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core/styles";


export default class App extends Component {

    theme = createMuiTheme({
      palette: {
        primary: {
          main: '#1976d2',
        },
        secondary: {
          main: '#388e3c',
        },
      },
    });

  render() {
      return (
          <div className="App">
              <MuiThemeProvider theme={this.theme}>
                  <AppBar/>
                  <TaskStatus/>
                  <Grid container spacing={24} style={{padding: '30px'}}>
                      <Grid item xs={12}>
                         <TaskList/>
                      </Grid>
                  </Grid>
              </MuiThemeProvider>
          </div>
        );
  }
}
