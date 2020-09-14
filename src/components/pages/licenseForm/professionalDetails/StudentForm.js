import React from 'react';
import { Paper, Grid, } from "@material-ui/core";
import _ from 'lodash';
import GridInputSelect from '../../../common/GridInputSelect';
import GridInputText from '../../../common/GridInputText';


const StudentForm = () => {


    return (
        <Paper elevation={2}>
            <div style={{ background: '#8080801f', padding: '50px 40px 40px 40px', }}>
                <Grid container spacing={3}>
                    <GridInputSelect
                        label='Current Qualification'
                        gridSizeProps={{
                            lg: 12,
                            md: 12,
                            sm: 12,
                        }}
                    />
                    <GridInputText
                        label='Institution name'
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <GridInputText
                        label='Studying at'
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <GridInputText
                        label='Institution Address'
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
                </Grid>
            </div>
        </Paper >
    )
}

export default StudentForm;
