import React from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { Grid } from '@material-ui/core';


const GridDate = (props) => {
    
    const {label,gridSizeProps} = props;

    return (
        <Grid
            item
            lg={gridSizeProps.lg}
            md={gridSizeProps.md}
            sm={gridSizeProps.sm}
        >
            <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils} >
                <KeyboardDatePicker
                    clearable
                    label={label}
                    // value={personalDetails.dateOfBirth}
                    // onChange={date => {
                    //     personalDetails['dateOfBirth'] = date
                    //     onChange('personalDetails', personalDetails);
                    // }}
                    // format="DD/MM/YYYY"
                    inputVariant='filled'
                    fullWidth
                />
            </MuiPickersUtilsProvider>
        </Grid>
    )
}

export default GridDate;