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
import "../../styles/licenseList.scss";
import _ from "lodash";
import { Redirect } from 'react-router-dom';


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
            institutionName: null,
            institutionAddress: null,
            country: null,
            studyingAt: null,
            stateId: null,
            districtId: null,
            pincode: null,
            levelId: null,
            annumSal: null
        },
        personalDetailsError: {
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
        const newState = _.cloneDeep(state);
        newState[key] = value;
        setState(newState);
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

    const errorValidation = () => {
        const { personalDetails } = state;
        const { name, mailId } = personalDetails;
        const mailIdRegex = /^([A-Z a-z][\w\d . _ -]+)@([\w\d _-]+).([a-z]{2,20})(\.[a-z]{2,10})$/;

        if (!name || name === '' || name.toString().replace(/\s/g, '').length <= 0) {
            state.personalDetailsError.nameHelperText = 'Please enter the name';
        }

        if (!mailId || mailId === '') {
            state.personalDetailsError.mailIdHelperText = 'Please enter the mail id';
        }

        if (mailId && !mailIdRegex.test(mailId)) {
            state.personalDetailsError.mailIdHelperText = 'invalid email ID';
        }

        updateState('personalDetailsError', { ...state.personalDetailsError });

        if (state.personalDetailsError.nameHelperText || state.personalDetailsError.mailIdHelperText) {
            return true
        }
        else {
            return false;
        }
    }

    const formComponents = {
        personalDetails: {
            id: 1,
            // currentRoute: '/personalDetails',
            // nextRoute: '/addressDetails',
            component: <PersonalDetails
                personalDetails={state.personalDetails}
                personalDetailsError={state.personalDetailsError}
                updateState={updateState}
            />,
            footerProps: {
                buttonText1: 'Cancel',
                buttonText2: 'Next',
                handleOnClick1: () => handleBack(),
                handleOnClick2: () => {
                    const isValid = errorValidation();
                    if (!isValid) {
                        handleNext();
                    }
                },
            }
        },
        addressDetails: {
            id: 2,
            component: <AddressDetails
                addressDetails={state.addressDetails}
                updateState={updateState}
            />,
            footerProps: {
                buttonText1: 'back',
                buttonText2: 'Next',
                handleOnClick1: () => {
                    handleBack();
                },
                handleOnClick2: () => {
                    handleNext();
                },
            }
        },
        professionalDetails: {
            id: 3,
            component: <ProfessionalDetails
                qualificationDetails={state.qualificationDetails}
                updateState={updateState}
            />,
            footerProps: {
                buttonText1: 'Cancel',
                buttonText2: 'save',
                handleOnClick1: () => {
                    handleBack();
                },
                handleOnClick2: () => {
                    const isValid = errorValidation();
                    if(!isValid){
                    handleNext();
                    }
                    else{
                      return  <Redirect from='/layout/:name' to={routePath.PERSONAL_DETAILS}/>
                    }
                },
            }
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
                {...formComponents[props.match.params.name].footerProps}
            />
        </div >
    )
}

export default LicenseForm;