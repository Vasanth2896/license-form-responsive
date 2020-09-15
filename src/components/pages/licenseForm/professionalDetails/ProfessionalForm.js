import React from 'react';
import { Paper, Grid } from "@material-ui/core";
import _ from 'lodash';
import GridInputSelect from '../../../common/GridInputSelect';


const ProfessionalForm = (props) => {

    const { qualificationDetails, updateState, qualificationDetailsSeed } = props;
    let { newQualificationDetails } = props;

    const handleChange = (key, value) => {
        newQualificationDetails[key] = value;
        updateState('qualificationDetails', newQualificationDetails);
    }

    return (
        <Paper style={{ background: '#8080801f', height: 400 }}>
            <div style={{ padding: '50px 40px 40px 40px', }}>
                <Grid container spacing={3}>
                    <GridInputSelect
                        label='Level'
                        name='levelId'
                        value={qualificationDetails.levelId}
                        handleChange={handleChange}
                        menuOptions={qualificationDetailsSeed.professionalLevel}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <GridInputSelect
                        label='Salary per annum'
                        name='annumSal'
                        value={qualificationDetails.annumSal}
                        handleChange={handleChange}
                        menuOptions={qualificationDetailsSeed.salary}
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

