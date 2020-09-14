import React from 'react';
import { Paper, Grid, FormGroup, FormControlLabel } from "@material-ui/core";
import GridInputText from '../../common/GridInputText';
import GridInputSelect from '../../common/GridInputSelect';
import InputCheckbox from '../../common/InputCheckbox';

const AddressDetails = () => {

    return (
        <Paper style={{ background: '#8080801f', height: '400px' }} elevation={2}>
            <div style={{ padding: '25px 40px 25px 40px' }}>
                <Grid container item lg={12} spacing={3}>
                    <GridInputText
                        label='Address'
                        gridSizeProps={{
                            lg: 12,
                            md: 12,
                            sm: 12,
                        }}
                    />
                    <GridInputText
                        label='Country'
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <GridInputSelect
                        label='State'
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <GridInputSelect
                        label='District'
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <GridInputText
                        label='Pincode'
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <Grid item lg={12} md={12} sm={12}>
                        <FormGroup row>
                            <FormControlLabel
                                control={<InputCheckbox />}
                                label="Permanent Address is same as Communication Address"
                            />
                        </FormGroup>
                    </Grid>
                </Grid>
            </div>
        </Paper >
    )
}

export default AddressDetails;