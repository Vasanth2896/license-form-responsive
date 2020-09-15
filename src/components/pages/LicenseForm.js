import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import NavigationalStepper from '../common/NavigationStepper';
import { routePath } from '../../routePath';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Footer from '../common/Footer';
import PersonalDetails from './licenseForm/personalDetails/PersonalDetails';
import AddressDetails from "./licenseForm/AddressDetails";
import ProfessionalDetails from './licenseForm/professionalDetails/ProfessionalDetails';

const LicenseForm = (props) => {

    const { history } = props;
    const [state, setState] = useState({
        personalDetails: {
            name: null,
            genderId: 1,
            dateOfBirth: null,
            age: null,
            mailId: null,
            mobNo: null,
            motherTongueId: null,
            preferredLanguageId: [],
            knownViaProducts: [],
            others: null
        },
        addressDetails: {
            address: null,
            stateId: null,
            districtId: null,
            pincode: null,
            country: null,
            type: 1
        },
        qualificationDetails: {
            userRoleId: 1,
            userQualificationId: null,
            institutionName: "",
            institutionAddress: "",
            country: "",
            studyingAt: "",
            stateId: null,
            districtId: null,
            pincode: "",
            levelId: null,
            annumSal: null
        },
        personalDetailError: {
            nameHelperText: '',
            mailIdHelperText: '',
        },
    });
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        {
            id: 0,
            name: 'Personal Details',
            routePath: routePath.PERSONAL_DETAILS
        },
        {
            id: 1,
            name: 'Address Details',
            routePath: routePath.ADDRESS_DETAILS
        },
        {
            id: 2,
            name: 'Professional Details',
            routePath: routePath.PROFESSIONAL_DETAILS
        }
    ];

    const updateState = (key, value) => {
        setState({ ...state, [key]: value })
    }

    const handleNext = () => {

        if (activeStep !== 2) {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
            history.push(steps[activeStep + 1].routePath);
        }
        else {
            history.push(routePath.LICENSE_LIST);
        }
    }

    const handleBack = () => {
        if (activeStep !== 0) {
            setActiveStep(prevActiveStep => prevActiveStep - 1);
            history.push(steps[activeStep - 1].routePath);
        }
        else {
            history.push(routePath.LICENSE_LIST);
        }
    }

    const handleStep = (step) => {
        history.push(steps[step].routePath, { steps: step });
        setActiveStep(step);
    };

    const handleBrowserButtons = () => {
        const { action, location } = history;
        if (action === 'POP') {
            const popStep = steps.find(step => step.routePath === location.pathname);
            setActiveStep(popStep.id);
        }
    }

    const backButtonNavigation = (stepItem) => {
        if (stepItem.id) {
            history.push(steps[stepItem.id - 1].routePath);
            setActiveStep(stepItem.id - 1);
        }
        else {
            history.push('/');
        }
    }

    useEffect(handleBrowserButtons, [history, steps]);

    const formComponents = {
        personalDetails: {
            id: 1,
            // currentRoute: '/personalDetails',
            // nextRoute: '/addressDetails',
            component: <PersonalDetails
                personalDetails={state.personalDetails}
                updateState={updateState}
            />
        },
        addressDetails: {
            id: 2,
            // currentRoute: '/addressDetails', 
            // nextRoute: '/professionalDetails', 
            component: <AddressDetails
              addressDetails={state.addressDetails}
              updateState={updateState}
            />
        },
        professionalDetails: {
            id: 3,
            currentRoute: 'blah',
            nextRoute: 'blah',
            component: <ProfessionalDetails 
            qualificationDetails={state.qualificationDetails}
            updateState={updateState}
        />
        }
    }


    return (
        <div>
            <Container style={{ height: '100vh' }}>
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    width: "13em",
                    marginBottom: "20px"
                }}>
                    <FontAwesomeIcon icon={faArrowLeft} onClick={() => backButtonNavigation(steps[activeStep])} style={{ cursor: 'pointer' }} />
                    <h3>Individual User</h3>
                </div>
                <Grid container spacing={7}>
                    <Grid item lg={3} md={3} sm={3}>
                        <NavigationalStepper
                            steps={steps}
                            handleStep={handleStep}
                            activeStep={activeStep}
                        />
                    </Grid>
                    <Grid item lg={9} md={9} sm={9}>
                        {formComponents[props.match.params.name].component}
                    </Grid>
                </Grid>
            </Container>
            <Footer
                handleNext={handleNext}
                handleBack={handleBack}
            />
        </div >
    )
}

export default LicenseForm;