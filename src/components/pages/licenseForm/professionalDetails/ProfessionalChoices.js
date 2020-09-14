import React from 'react';
import { RadioGroup, FormControlLabel, Radio } from "@material-ui/core";

const ProfessionalChoices = (props) => {
    const { handleChange, classes, value, userRoles } = props;

    return (
        <div style={{ height: 100,background: '#8080801f',display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
            <RadioGroup value={value} style={{ width: '80%',display: 'flex',justifyContent: 'space-evenly',alignItems: 'center'}} row>
                {
                    userRoles.map(role => {
                        return (
                            <FormControlLabel
                                key={role.id}
                                value={role.id}
                                // onChange={() => { handleChange('userRoleId', role.id) }}
                                control={<Radio color='primary' />}
                                label={role.name}
                            />
                        )
                    })
                }
            </RadioGroup>
        </div>
    )
}

export default ProfessionalChoices;