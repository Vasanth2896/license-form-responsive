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

    const {
        gridSizeProps,
        label,
        fieldType,
        handleChange,
        name,
        value,
        displayProperty,
        helperText,
        error,
        disabled
    } = props;
    const classes = useStyles();

    return (
        <Grid
            item
            lg={gridSizeProps.lg}
            md={gridSizeProps.md}
            sm={gridSizeProps.sm}
            style={{ ...displayProperty }}
        >
            <TextField
                className={classes.noSpinner}
                fullWidth
                variant='filled'
                onChange={(event) => handleChange(name, event.target.value)}
                label={label}
                type={fieldType}
                value={value}
                helperText={helperText}
                error={error}
                disabled={disabled}
            />
        </Grid>
    )
}

export default GridInputText;