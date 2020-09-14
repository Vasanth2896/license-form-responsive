import React from 'react';
import { Stepper, StepButton, Step, Paper } from "@material-ui/core";

const NavigationalStepper = (props) => {

    const { steps, handleStep, activeStep } = props;


    return (
        <div>
            <Paper elevation={2}>
                <Stepper
                    nonLinear
                    orientation="vertical"
                    activeStep={activeStep}
                    style={{ background: '#8080801f', height: 'auto' }}
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