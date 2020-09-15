import React from 'react';
import { FormLabel, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import '../../../../styles/genderContainer.scss'


const Gender = (props) => {

    const { genderList, handleChange, name,value } = props;

    return (
        <div className='genderContainer'>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" value={value} row>
                {
                    genderList.map(gender => {
                        if (gender.id !== 3) {
                            return (
                                <FormControlLabel
                                    key={gender.id}
                                    value={gender.id}
                                    control={<Radio color='primary' />}
                                    onChange={() => handleChange(name, gender.id)}
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