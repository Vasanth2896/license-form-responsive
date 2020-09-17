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
import "../../styles/licenseForm.scss";
import _ from "lodash";
import { app_onChange, onSave, onCancel } from '../../store/appActions';
import { useDispatch, useSelector } from 'react-redux';


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

    const stepperState = state.personalDetailsError.nameHelperText || state.personalDetailsError.mailIdHelperText;
    const dispatch = useDispatch();
    const globalState = useSelector(state => state.appReducer);
    const { user, editId } = globalState;

    useEffect(() => {
        if (editId) {
            changeLocalStateOnEdit();
        }
    }, []);

    const changeLocalStateOnEdit = () => {
        setState({
            ...user, personalDetailsError: {
                nameHelperText: '',
                mailIdHelperText: '',
            },
        })
    }

    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const newCompleted = { ...completed };
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
        history.push(steps[step].routePath);
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

    const handleComplete = (completeflag, currentStep) => {
        newCompleted[currentStep] = completeflag;
        setCompleted({ ...newCompleted });
    };

    function handleBlankSpace(detail) {
        if (detail) {
            return !detail.toString().replace(/\s/g, '').length <= 0;
        }
    }

    const personalDetailsStepperCheck = () => {
        const { age, dateOfBirth, knownViaProducts, mailId, mobNo, motherTongueId, name, preferredLanguageId } = state.personalDetails;
        const personalDetailTextField = { age, mailId, mobNo, name };
        const personalDetailObjectFields = { dateOfBirth, motherTongueId };
        const personalDetailsCollections = { knownViaProducts, preferredLanguageId };
        const personalValidator = personalDetailsValidator(personalDetailTextField, personalDetailObjectFields, personalDetailsCollections);
        handleComplete(personalValidator, 0);
    }

    const personalDetailsValidator = (textFields, objectFields, collectionFields) => {
        const collectionValidation = Object.values(collectionFields).every(collection => collection.length);
        const objectValidation = Object.values(objectFields).every(field => field !== null);
        const textValidation = Object.values(textFields).every(detail => handleBlankSpace(detail));
        const otherIsChecked = collectionValidation && objectValidation && textValidation && collectionFields.knownViaProducts.includes(6) && handleBlankSpace(state.personalDetails.others);
        const otherIsNotChecked = collectionValidation && objectValidation && textValidation && !collectionFields.knownViaProducts.includes(6)

        if (otherIsChecked || otherIsNotChecked) {
            return true;
        }

        return false;
    }

    const addressDetailsStepperCheck = () => {
        const { stateId, districtId, address, country, pincode } = state.addressDetails;
        const addressDetailsIdFields = { stateId, districtId };
        const addressDetailsTextField = { address, country, pincode };
        const addressValidator = addressDetailsValidator(addressDetailsIdFields, addressDetailsTextField);
        handleComplete(addressValidator, 1);
    }

    const addressDetailsValidator = (idFields, textFields) => {
        const validation = Object.values(idFields).every(id => id !== null) && Object.values(textFields).every(detail => handleBlankSpace(detail));
        return validation;
    }

    const qualificationDetailsStepperCheck = () => {
        if (state.qualificationDetails.userRoleId === 3) {
            handleComplete(true, 2);
        }
        else if (state.qualificationDetails.userRoleId === 2) {
            const { levelId, annumSal } = state.qualificationDetails;
            const professionalFormFields = { levelId, annumSal };
            handleComplete(Object.values(professionalFormFields).every(field => field !== null), 2);
        }
        else if (state.qualificationDetails.userRoleId === 1) {
            const { institutionName, institutionAddress, country,
                studyingAt, pincode, userQualificationId, stateId, districtId } = state.qualificationDetails;
            const studentFormTextFields = { institutionName, institutionAddress, country, studyingAt, pincode }
            const studentFormIdFields = { userQualificationId, stateId, districtId }
            const studentFormValidation = Object.values(studentFormTextFields).every(detail => handleBlankSpace(detail)) &&
                Object.values(studentFormIdFields).every(id => id !== null);
            handleComplete(studentFormValidation, 2)
        }
    }

    useEffect(personalDetailsStepperCheck, [state.personalDetails]);
    useEffect(addressDetailsStepperCheck, [state.addressDetails]);
    useEffect(qualificationDetailsStepperCheck, [state.qualificationDetails]);
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
            id: 0,
            component: <PersonalDetails
                personalDetails={state.personalDetails}
                personalDetailsError={state.personalDetailsError}
                updateState={updateState}
                editId={editId}
            />,
            footerProps: {
                buttonText1: 'Cancel',
                buttonText2: 'Next',
                handleOnClick1: () => {
                    dispatch(onCancel());
                    handleBack();
                },
                handleOnClick2: () => {
                    const isValid = errorValidation();
                    if (!isValid) {
                        handleNext();
                    }
                },
            }
        },
        addressDetails: {
            id: 1,
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
            id: 2,
            component: <ProfessionalDetails
                qualificationDetails={state.qualificationDetails}
                updateState={updateState}
            />,
            footerProps: {
                buttonText1: 'Cancel',
                buttonText2: editId ? 'update' : 'save',
                handleOnClick1: () => {
                    handleBack();
                },
                handleOnClick2: async () => {
                    const isValid = errorValidation();
                    if (!isValid) {
                        let user = {};
                        Object.assign(user, {
                            personalDetails: state.personalDetails,
                            addressDetails: state.addressDetails,
                            qualificationDetails: state.qualificationDetails
                        })
                        await dispatch(app_onChange('user', user));
                        await dispatch(onSave());
                        handleNext();
                    }
                    else {
                        history.push(routePath.PERSONAL_DETAILS);
                        setActiveStep(0);
                    }
                },
            }
        }
    }


    return (
        <div>
            <Container className='licenseFormContainer'>
                <div className='backButtonContainer'>
                    <FontAwesomeIcon icon={faArrowLeft} onClick={() => backButtonNavigation(steps[activeStep])} style={{ cursor: 'pointer' }} />
                    <h3>Individual User</h3>
                </div>
                <Grid container spacing={7}>
                    <Grid item lg={3} md={3} sm={3} style={{ cursor: stepperState ? 'not-allowed' : 'default' }}>
                        <NavigationalStepper
                            steps={steps}
                            handleStep={handleStep}
                            activeStep={activeStep}
                            completed={completed}
                            disabled={stepperState ? true : false}
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