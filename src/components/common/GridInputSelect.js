import React from 'react';
import { Grid, Select, FormControl, InputLabel, MenuItem } from "@material-ui/core";

const GridInputSelect = (props) => {

    const { gridSizeProps, label, menuOptions, handleChange, name, value } = props;
    

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
                    onChange={(event) => handleChange(name, event.target.value)}
                    value={value}
                >
                    {menuOptions && menuOptions.map(options => {
                        return (
                            <MenuItem key={options.id} value={options.id}>{options.name}</MenuItem>
                        )
                    })

                    }

                </Select>
            </FormControl>

        </Grid>
    )
}

export default GridInputSelect;