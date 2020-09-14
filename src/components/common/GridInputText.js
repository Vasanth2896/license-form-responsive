import React from 'react';
import { TextField, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    noSpinner: {
        "& input::-webkit-clear-button, & input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
            display: "none"
        }
    }
}); 


const GridInputText = (props) => {

    const { gridSizeProps, label, fieldType } = props;
    const classes = useStyles();

    return (
        <Grid
            item
            lg={gridSizeProps.lg}
            md={gridSizeProps.md}
            sm={gridSizeProps.sm}
        >
            <TextField
                className={classes.noSpinner}
                fullWidth
                variant='filled'
                label={label}
                type={fieldType}
            />
        </Grid>
    )
}

export default GridInputText;