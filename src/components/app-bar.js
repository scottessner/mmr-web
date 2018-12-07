import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
    toolbar: {
        height: 200,
    },
})

function MMRAppBar(props) {
    const { classes } = props;

    return (
        <div>
            <AppBar position={"static"}>
                <ToolBar>
                    <Typography variant={'h6'} color={"inherit"}>
                        Tasks
                    </Typography>
                </ToolBar>
            </AppBar>
            {/*<Grid container className={classes.demo}>*/}
            {/*</Grid>*/}
        </div>
    );
}

export default MMRAppBar;
// export default withStyles(styles)(MMRAppBar)