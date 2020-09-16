import React, { useEffect, useState } from 'react';
import { Paper, Grid, FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import GridInputText from '../../common/GridInputText';
import GridInputSelect from '../../common/GridInputSelect';
import * as apiAction from '../../../apiConfig/apis';

const AddressDetails = (props) => {

    const { addressDetails, updateState } = props;
    const [addressDetailsSeed, setAddressDetailsSeed] = useState({});
    const [districts, setDistricts] = useState([]);

    useEffect(() => {
        if (addressDetails.stateId !== null) {
            getDistrictData();
        }
    }, [addressDetails.stateId])

    const getDistrictData = async () => {
        const { data } = await apiAction.getDistricts(addressDetails.stateId);
        setDistricts([...data]);
    }


    useEffect(() => {
        const getAddressDetailsSeed = async () => {
            const addressTypeData = await apiAction.getAddressType();
            const stateData = await apiAction.getStates();
            const seedHolder = {
                addressType: addressTypeData.data,
                states: stateData.data
            }
            setAddressDetailsSeed({ ...seedHolder });
        }
        getAddressDetailsSeed();
    }, [])

    const handleChange = (key, value) => {
        addressDetails[key] = value;
        updateState('addressDetails', { ...addressDetails });
    }


    return (
        <Paper style={{ background: '#8080801f', height: '400px' }} elevation={2}>
            <div style={{ padding: '25px 40px 25px 40px' }}>
                <Grid container item lg={12} spacing={3}>
                    <GridInputText
                        label='Address'
                        name='address'
                        value={addressDetails.address || ''}
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 12,
                            md: 12,
                            sm: 12,
                        }}
                    />
                    <GridInputText
                        label='Country'
                        name='country'
                        value={addressDetails.country || ''}
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <GridInputSelect
                        label='State'
                        name='stateId'
                        value={addressDetails.stateId || ''}
                        handleChange={handleChange}
                        menuOptions={addressDetailsSeed.states || []}
                        // menuOptions={[]}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <GridInputSelect
                        label='District'
                        name='districtId'
                        value={addressDetails.districtId || ''}
                        handleChange={handleChange}
                        menuOptions={districts || []}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <GridInputText
                        label='Pincode'
                        name='pincode'
                        value={addressDetails.pincode || ''}
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6,
                        }}
                    />
                    <Grid item lg={12} md={12} sm={12}>
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox color='primary' />}
                                label="Permanent Address is same as Communication Address"
                                onChange={() => {
                                    handleChange('type', addressDetailsSeed.addressType[(addressDetails.type + 2) % 2].id);
                                }}
                                checked={addressDetails.type === 2}
                            />
                        </FormGroup>
                    </Grid>

                </Grid>
            </div>
        </Paper >
    )
}

export default AddressDetails;