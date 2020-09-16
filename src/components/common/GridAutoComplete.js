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

    const { gridSizeProps, languages, handleChange, value } = props;
    let valuesPresent = languages.filter(language => value.includes(language.id));

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
                value={valuesPresent}
                options={languages}
                getOptionLabel={ languages => languages.name}
                onChange={(event, languages) => {
                    handleChange('preferredLanguageId', languages.map(language => { return language.id }));
                }}
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