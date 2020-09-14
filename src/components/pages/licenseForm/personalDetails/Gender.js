import React from 'react';
import { Box, FormLabel, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

const Gender = (props) => {

    const { genderList } = props;

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" row>
                {
                    genderList && genderList.map(gender => {
                        if (gender.id !== 3) {
                            return (
                                <FormControlLabel
                                    key={gender.id}
                                    value={gender.id}
                                    control={<Radio color='primary' />}
                                    // onChange={(e) => handleChange('genderId', gender.id)}
                                    label={gender.name} />
                            )
                        }
                    }
                    )
                }
            </RadioGroup>
        </div>

    )
}


export default Gender