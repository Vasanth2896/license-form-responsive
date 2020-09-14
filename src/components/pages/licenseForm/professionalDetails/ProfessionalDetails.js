import React, { useEffect, useState } from 'react';
import { Paper, Grid, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import StudentForm from './StudentForm';
import ProfessionalForm from './ProfessionalForm';
import HousewivesForm from './HousewivesForm';
import ProfessionalChoices from './ProfessionalChoices';
import * as apiAction from '../../../../apiConfig/apis';

const ProfessionalDetails = () => {

    const [professionalDetailsSeed, setProfessionalDetailsSeed] = useState({});

    useEffect(() => {
        const getProfessionalDetailsSeed = async () => {
            const stateData = await apiAction.getStates();
            const qualificationDetailsData = await apiAction.getQualificationDetails();
            const professionalLevelData = await apiAction.getProfessionalLevel();
            const salaryPerAnnumData = await apiAction.getSalaryPerAnnum();
            const userRolesData = await apiAction.getUserRoles();
            const seedHolder = {
                states: stateData.data,
                qualifcationDetailsSeed: qualificationDetailsData.data,
                professionalLevel: professionalLevelData.data,
                salary: salaryPerAnnumData.data,
                userRoles: userRolesData.data,
            }
            setProfessionalDetailsSeed({ ...seedHolder });
        }
        getProfessionalDetailsSeed();
    }, [])

    return (
        <div>
            <Grid container spacing={3}>
                <Grid
                    item
                    xs={12}
                >
                    <Paper elevation={2} >
                        <div style={{ background: '#8080801f' }}>
                            <ProfessionalChoices
                                // handleChange={handleRadioChange}
                                // classes={classes}
                                // value={professionalValue}
                                userRoles={professionalDetailsSeed.userRoles || []}
                            />
                        </div>
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    {/* <StudentForm /> */}
                    <ProfessionalForm />
                    {/* <HousewivesForm /> */}


                    {/* {professionalValue === 'student' && <StudentForm {...props} />}
                    {professionalValue === 'professional' && <ProfessionalForm  {...props} />}
                    {professionalValue === 'housewives' && <HousewivesForm   {...props} />}
                    <AlertBox open={open} handleClose={handleClose} handleClickOpen={handleClickOpen} handleOk={handleOk} professionalValue={professionalValue} /> */}
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfessionalDetails;