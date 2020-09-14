import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import NavigationalStepper from '../common/NavigationStepper';
import { routePath } from '../../routePath';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Footer from '../common/Footer';


const Layout = (props) => {

    const history = useHistory();
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

    const handleNext = () => {
        if (history.location.pathname !== routePath.PROFESSIONAL_DETAILS) {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
            history.push(steps[activeStep + 1].routePath);
        }
        else {
            history.push(routePath.LICENSE_LIST);
        }
    }

    const handleBack = () => {
        if (history.location.pathname !== routePath.PERSONAL_DETAILS) {
            setActiveStep(prevActiveStep => prevActiveStep - 1);
            history.push(steps[activeStep - 1].routePath);
        }
        else {
            history.push(routePath.LICENSE_LIST);
        }
    }

    const handleStep = (step) => {
        history.push(steps[step].routePath, { state: step });
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
    useEffect(() => console.log(props.location.state), [props.location.state]);

    return (
        <div>
            <Container >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '18%', marginBottom: '20px' }}>
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
                        {props.children}
                    </Grid>
                </Grid>

            </Container>
            <Footer
                handleNext={handleNext}
                handleBack={handleBack}
            />
        </div>
    )
}

export default Layout;