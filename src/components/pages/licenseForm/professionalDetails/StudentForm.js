import React from 'react';
import { Paper, Grid, } from "@material-ui/core";
import _ from 'lodash';
import GridInputSelect from '../../../common/GridInputSelect';
import GridInputText from '../../../common/GridInputText';


const StudentForm = (props) => {

    //TODO: have to handle the district here as well

    const { qualificationDetails, updateState, qualificationDetailsSeed } = props;
    let { newQualificationDetails } = props;

    const handleChange = (key, value) => {
        newQualificationDetails[key] = value;
        updateState('qualificationDetails', newQualificationDetails);
    }

    return (
        <Paper elevation={2}>
            <div style={{ background: '#8080801f', padding: '50px 40px 40px 40px', }}>
                <Grid container spacing={3}>
                    <GridInputSelect
                        label='Current Qualification'
                        name='userQualificationId'
                        value={qualificationDetails.userQualificationId}
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 12,
                            md: 12,
                            sm: 12,
                        }}
                        menuOptions={qualificationDetailsSeed.qualifcationDetailsSeed}
                    />
                    <GridInputText
                        label='Institution name'
                        name='institutionName'
                        value={qualificationDetails.institutionName}
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <GridInputText
                        label='Studying at'
                        name='studyingAt'
                        value={qualificationDetails.studyingAt}
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <GridInputText
                        label='Institution Address'
                        name='institutionAddress'
                        value={qualificationDetails.institutionAddress}
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 12,
                            md: 12,
                            sm: 12,
                        }}
                    />
                    <GridInputText
                        label='Country'
                        name='country'
                        value={qualificationDetails.country}
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <GridInputSelect
                        label='State'
                        name='stateId'
                        value={qualificationDetails.stateId}
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                        menuOptions={qualificationDetailsSeed.states}
                    />
                    <GridInputSelect
                        label='District'
                        name='districtId'
                        value={qualificationDetails.districtId}
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                        menuOptions={qualificationDetailsSeed.districts}
                    />
                    <GridInputText
                        label='Pincode'
                        name='pincode'
                        value={qualificationDetails.pincode}
                        handleChange={handleChange}
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
