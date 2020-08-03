import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Paper, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    paper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        height: "90vh",
        margin: theme.spacing(2)
    }
}));

const App = props => {
    const classes = useStyles();

    return <Paper className={classes.paper}>
        <Typography variant="h4">Material React App Template</Typography>
    </Paper>;
};

export default App;