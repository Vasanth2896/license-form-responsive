import React from 'react';
import {
    Box, Grid, FormLabel, FormControlLabel, FormControl, FormGroup, Checkbox
} from '@material-ui/core';
import _ from 'lodash';


const ProductKnowledge = (props) => {

    const { formLabel, knowledgeSeed, formGroupClassName, personalDetails, updateState,gridSizeProps } = props;
    const { knownViaProducts } = personalDetails;

    const handleCheckChange = (id) => {
        const handleProducts = !knownViaProducts.includes(id) ? [...knownViaProducts, id] : knownViaProducts.filter(check => check !== id)
        personalDetails['knownViaProducts'] = handleProducts;

        if (!personalDetails.knownViaProducts.includes(6)) {
            personalDetails['others'] = '';
        }

        updateState('personalDetails', { ...personalDetails });
    }

    return (
        <Grid
        item 
        lg={gridSizeProps.lg} 
        md={gridSizeProps.md} 
        sm={gridSizeProps.sm}
        >
            <FormControl fullWidth>
                <FormLabel component="legend">{formLabel}</FormLabel>
                <FormGroup className={formGroupClassName} row>
                    {knowledgeSeed && knowledgeSeed.map(checkboxes => {
                        return (
                            <FormControlLabel
                                control={<Checkbox color='primary' />}
                                checked={knownViaProducts.includes(checkboxes.id)}
                                label={checkboxes.name}
                                key={checkboxes.id}
                                onChange={() => handleCheckChange(checkboxes.id)}
                            ></FormControlLabel>
                        )
                    })}
                </FormGroup>
            </FormControl>
        </Grid>
    )

}

export default ProductKnowledge;