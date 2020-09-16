import React, { useEffect, useState } from 'react';
import { Paper, Grid } from "@material-ui/core";
import StudentForm from './StudentForm';
import ProfessionalForm from './ProfessionalForm';
import HousewivesForm from './HousewivesForm';
import ProfessionalChoices from './ProfessionalChoices';
import * as apiAction from '../../../../apiConfig/apis';

const ProfessionalDetails = (props) => {

    const { qualificationDetails, updateState } = props;
    const [qualificationDetailsSeed, setQualificationDetailsSeed] = useState({});
    const [districts, setDistricts] = useState([]);

    const handleChange = (key, value) => {
        if (key === 'userRoleId') {
            let initialQualificationDetails = {
                userRoleId: value,
                userQualificationId: null,
                institutionName: null,
                institutionAddress: null,
                country: null,
                studyingAt: null,
                stateId: null,
                districtId: null,
                pincode: null,
                levelId: null,
                annumSal: null
            }
            updateState('qualificationDetails', initialQualificationDetails);
        }
        else {
            qualificationDetails[key] = value;
            updateState('qualificationDetails', { ...qualificationDetails });
        }
    }

    useEffect(() => {
        const getQualificationDetailsSeed = async () => {
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
            setQualificationDetailsSeed({ ...seedHolder });
        }
        getQualificationDetailsSeed();
    }, [])

    useEffect(() => {
        if (qualificationDetails.stateId !== null) {
            getDistrictData(qualificationDetails.stateId);
        }
    }, [qualificationDetails.stateId])

    const getDistrictData = async (id) => {
        const { data } = await apiAction.getDistricts(id);
        setDistricts([...data]);
    }

    const subComponentsCommonProps = {
        qualificationDetailsSeed: qualificationDetailsSeed,
        districts: districts,
        ...props
    };

    const professionalDetailsSubComponents = [
        {
            id: 1,
            subComponent: <StudentForm
                {...subComponentsCommonProps}
            />
        },
        {
            id: 2,
            subComponent: <ProfessionalForm
                {...subComponentsCommonProps}
            />
        },
        {
            id: 3,
            subComponent: <HousewivesForm />
        }
    ]

    return (
        <div>
            <Grid container spacing={3}>
                <Grid
                    item
                    xs={12}
                >
                    <Paper elevation={2} >
                        <ProfessionalChoices
                            handleChange={handleChange}
                            value={qualificationDetails.userRoleId}
                            userRoles={qualificationDetailsSeed.userRoles || []}
                        />
                    </Paper>
                </Grid>
                <Grid
                    item
                    xs={12}
                >
                    {qualificationDetails.userRoleId ? professionalDetailsSubComponents[qualificationDetails.userRoleId - 1].subComponent : null}
                    {/* <AlertBox open={open} handleClose={handleClose} handleClickOpen={handleClickOpen} handleOk={handleOk} professionalValue={professionalValue} />  */}
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfessionalDetails;