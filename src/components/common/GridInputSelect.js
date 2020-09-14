import React from 'react';
import { Grid, Select, FormControl, InputLabel } from "@material-ui/core";

const GridInputSelect = (props) => {

    const { gridSizeProps, label } = props;



    return (
        <Grid
            item
            lg={gridSizeProps.lg}
            md={gridSizeProps.md}
            sm={gridSizeProps.sm}
        >
            <FormControl variant='filled' fullWidth>
                <InputLabel id={label}>{label}</InputLabel>
                <Select
                    labelId={label}
                >

                </Select>
            </FormControl>

        </Grid>
    )
}

export default GridInputSelect;