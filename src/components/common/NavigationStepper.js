import React from 'react';
import { Stepper, StepButton, Step, Paper } from "@material-ui/core";
import '../../styles/navigationalStepper.scss'

const NavigationalStepper = (props) => {

    const { steps, handleStep, activeStep } = props;

    return (
        <div>
            <Paper elevation={2}>
                <Stepper
                    nonLinear
                    orientation="vertical"
                    activeStep={activeStep}
                    className='navigationStepperContainer'
                >
                    {steps.map((step) => (
                        <Step key={step.id}>
                            <StepButton
                                onClick={() => handleStep(step.id)}
                            >
                                {step.name}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
            </Paper>
        </div>
    )
}

export default NavigationalStepper;