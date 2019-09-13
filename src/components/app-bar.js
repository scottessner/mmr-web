import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function MMRAppBar() {

    return (
        <div>
            <AppBar position={"static"}>
                <ToolBar>
                    <Typography variant={'h6'} color={"inherit"} style={{flexGrow: 1}} align={"left"}>
                        Tasks
                    </Typography>
                    <Button
                        color={"inherit"}
                        onClick={() => {axios.post('https://ssessner.com/mmr-api/v1/tasks', {type: "scan"});}}
                    >
                        Schedule Scan
                    </Button>
                </ToolBar>
            </AppBar>
        </div>
    );
}

export default MMRAppBar;