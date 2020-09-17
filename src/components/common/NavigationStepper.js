import React from 'react';
import { Stepper, StepButton, Step, Paper } from "@material-ui/core";
import '../../styles/navigationalStepper.scss'

const NavigationalStepper = (props) => {

    const { steps, handleStep, activeStep, completed, disabled } = props;

    return (
        <div>
            <Paper elevation={2}>
                <Stepper
                    nonLinear
                    orientation="vertical"
                    activeStep={activeStep}
                    completed={completed}
                    className='navigationStepperContainer'
                >
                    {steps.map((step) => (
                        <Step key={step.id}>
                            <StepButton
                                onClick={() => handleStep(step.id)}
                                completed={completed[step.id]}
                                disabled={disabled}
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