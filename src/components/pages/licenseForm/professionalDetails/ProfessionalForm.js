import React from 'react';
import { Paper, Grid } from "@material-ui/core";
import _ from 'lodash';
import GridInputSelect from '../../../common/GridInputSelect';


const ProfessionalForm = () => {


    return (
        <Paper >
            <div style={{ background: '#8080801f', padding: '50px 40px 40px 40px', }}>
                <Grid container spacing={3}>
                    <GridInputSelect
                        label='Level'
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <GridInputSelect
                        label='Salary per annum'
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                </Grid>
            </div>
        </Paper>
    )
}

export default ProfessionalForm;

