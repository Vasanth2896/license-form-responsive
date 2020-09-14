import React from 'react';
import {
    Box, FormLabel, FormControlLabel, FormControl, FormGroup, Checkbox
} from '@material-ui/core';
import _ from 'lodash';


const ProductKnowledge = (props) => {

    const { formLabel, knowledgeSeed, formGroupClassName } = props;
    // const { knownViaProducts } = personalDetails;

    return (
        <Box>
            <FormControl fullWidth>
                <FormLabel component="legend">{formLabel}</FormLabel>
                <FormGroup className={formGroupClassName} row>
                    {knowledgeSeed && knowledgeSeed.map(checkboxes => {
                        return (
                            <FormControlLabel
                                control={<Checkbox color='primary' />}
                                // checked={knownViaProducts.includes(checkboxes.id)}
                                label={checkboxes.name}
                                key={checkboxes.id}
                            // onChange={() => handleCheckChange(checkboxes.id)}
                            ></FormControlLabel>
                        )
                    })}
                </FormGroup>
            </FormControl>
        </Box>
    )

}

export default ProductKnowledge;