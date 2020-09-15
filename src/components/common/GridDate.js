import React from 'react';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import moment from "moment";
import { Grid } from '@material-ui/core';


const GridDate = (props) => {

    const { label, gridSizeProps, name, value, handleChange } = props;

    function convertToTimestamp(date) {
        if (date !== null) {
            let dateMomentObject = moment(value, "YYYY/MM/DD");
            let dateObject = dateMomentObject.toDate();
            return dateObject;
        }
        return null;
    }

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
                    value={convertToTimestamp(value)}
                    onChange={date => {
                        date ? handleChange(name, date) : handleChange(name, moment(date).format('YYYY/MM/DD'));
                    }}
                    format="YYYY/MM/DD"
                    inputVariant='filled'
                    fullWidth
                />
            </MuiPickersUtilsProvider>
        </Grid>
    )
}

export default GridDate;