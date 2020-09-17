import React, { useEffect, useState } from 'react';
import { Paper, Grid } from "@material-ui/core";
import StudentForm from './StudentForm';
import ProfessionalForm from './ProfessionalForm';
import HousewivesForm from './HousewivesForm';
import ProfessionalChoices from './ProfessionalChoices';
import AlertBox from './AlertBox';
import * as apiAction from '../../../../apiConfig/apis';
import { useSelector } from 'react-redux';

const ProfessionalDetails = (props) => {

    const editUserId = useSelector(state => state.appReducer.editId);
    const { qualificationDetails, updateState } = props;
    const [qualificationDetailsSeed, setQualificationDetailsSeed] = useState({});
    const [districts, setDistricts] = useState([]);
    const [open, setOpen] = useState(false);
    const [editUserRoleId, setEditUserRoleId] = useState(null);


    const handleChange = (key, value) => {
        if (key === 'userRoleId') {
            if (editUserId !== null) {
                handleOpen();
                setEditUserRoleId(value);
            }
            else {
               clearQualificationDetails(value);
            }
        }
        else {
            qualificationDetails[key] = value;
            updateState('qualificationDetails', { ...qualificationDetails });
        }
    }

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleOk = () => {
        clearQualificationDetails();
        handleClose();
    }

    const clearQualificationDetails = (value) => {
        if (editUserRoleId !== null) {
            let editInitialQualificationDetails = {
                userId: qualificationDetails.userId,
                id: qualificationDetails.id,
                userRoleId: editUserRoleId,
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
            };
            setEditUserRoleId(null);
            updateState('qualificationDetails', {...editInitialQualificationDetails});
        }
        else {
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
            updateState('qualificationDetails', {...initialQualificationDetails});
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
                    <AlertBox
                        open={open}
                        handleClose={handleClose}
                        handleOk={handleOk}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfessionalDetails;