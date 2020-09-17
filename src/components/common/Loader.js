import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    },
    spinner: {
        height: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

const Loader = () => {

    const loadingStatus = useSelector(state => state.appReducer.loadingStatus)
    const classes = useStyles();
    return (
        <div >
            {
                loadingStatus ? (
                    <div className={classes.root} >
                        <div className={classes.spinner}>
                            <CircularProgress
                                size={100}
                            />
                        </div>
                    </div >
                ) : (null)
            }
        </div>
    );
}



export default Loader;


