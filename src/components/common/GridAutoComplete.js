import React from 'react';
import { Grid, TextField, withStyles } from '@material-ui/core';
import { Autocomplete } from "@material-ui/lab";

const CustomAutoComplete = withStyles({
    tag: {
        backgroundColor: "#BFB6AA",
        height: 24,
        position: "relative",
        zIndex: 0,
        "& .MuiChip-label": {
            color: "black"
        },
        "&:after": {
            content: '""',
            position: "absolute",
            backgroundColor: "grey",
            zIndex: -1
        }
    }
})(Autocomplete);


const GridAutoComplete = (props) => {

    const { gridSizeProps } = props;


    return (
        <Grid
            item
            lg={gridSizeProps.lg}
            md={gridSizeProps.md}
            sm={gridSizeProps.sm}
        >
            <CustomAutoComplete
                multiple
                id="tags-standard"
                // value={personalDetails.preferredLanguage}
                options={null || []}
                // getOptionLabel={languages => languages.name}
                // onChange={(handleChange)}
                renderInput={params => (
                    <TextField
                        {...params}
                        variant="filled"
                        label="Preferred languages for the app"
                        margin="normal"
                        fullWidth
                    />
                )}
            />
        </Grid>
    )
}


export default GridAutoComplete;