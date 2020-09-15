import React, { useEffect, useState } from 'react';
import { Paper, Grid } from '@material-ui/core';
import GridInputText from '../../../common/GridInputText';
import GridInputSelect from '../../../common/GridInputSelect';
import GridAutoComplete from '../../../common/GridAutoComplete';
import GridDate from '../../../common/GridDate';
import * as apiAction from '../../../../apiConfig/apis';
import Gender from './Gender';
import ProductKnowledge from './ProductKnowledge';

const PersonalDetails = (props) => {

    const { personalDetails, updateState } = props;
    let newPersonalDetails = { ...personalDetails };
    const [personalDetailsSeed, setPersonalDetailsSeed] = useState({});

    useEffect(() => {
        const getPersonalDetailsSeed = async () => {
            const genderData = await apiAction.getGender();
            const languagesData = await apiAction.getLanguages();
            const knowledgeSeedData = await apiAction.getKnownViaProducts();
            const seedHolder = {
                gender: genderData.data,
                languages: languagesData.data,
                knowledgeSeed: knowledgeSeedData.data,
            }
            setPersonalDetailsSeed({ ...seedHolder });
        }
        getPersonalDetailsSeed();
    }, []);

    const handleChange = (key, value) => {
        newPersonalDetails[key] = value;
        updateState('personalDetails', newPersonalDetails);
    }


    return (
        <Paper style={{ background: '#8080801f', height: 'auto' }} elevation={2}>
            <div style={{ padding: '25px 40px 25px 40px' }}>
                <Grid container item lg={12} spacing={3}>
                    <GridInputText
                        label='User name'
                        name='name'
                        handleChange={handleChange}
                        value={personalDetails.name || ''}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6
                        }}
                    />
                    <Grid item lg={6} md={6} sm={6}>
                        <Gender
                            genderList={personalDetailsSeed.gender || []}
                            handleChange={handleChange}
                            name='genderId'
                            value={personalDetails.genderId}
                        />
                    </Grid>
                    <GridDate
                        label='Date Of Birth'
                        name='dateOfBirth'
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6
                        }}
                        value={personalDetails.dateOfBirth}
                    />
                    <GridInputText
                        label='Age'
                        name='age'
                        fieldType='number'
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6
                        }}
                        value={personalDetails.age || ''}
                    />
                    <GridInputText
                        label='Mail id'
                        name='mailId'
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6
                        }}
                        value={personalDetails.mailId || ''}
                    />
                    <GridInputText
                        label='Mobile Number'
                        name='mobNo'
                        fieldType='number'
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6
                        }}
                        value={personalDetails.mobNo || ''}
                    />
                    <GridInputSelect
                        label='Mother Tongue'
                        name='motherTongueId'
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6
                        }}
                        value={personalDetails.motherTongueId}
                        menuOptions={personalDetailsSeed.language || []}
                    />
                    <GridAutoComplete
                        name='preferredLanguageId'
                        value={PersonalDetails.preferredLanguageId}
                        languages={personalDetailsSeed.languages || []}
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 12,
                            md: 12,
                            sm: 12
                        }}

                    />
                    <Grid item lg={12} md={12} sm={12}>
                        <ProductKnowledge
                            formLabel='How you come to know about the product?'
                            knowledgeSeed={personalDetailsSeed.knowledgeSeed || []}
                            name='knownViaProducts'
                            handleChange={handleChange}
                            value={personalDetails.knownViaProducts}
                            newPersonalDetails={newPersonalDetails}
                            updateState={updateState}
                        />
                    </Grid>
                    <GridInputText
                        label='Other'
                        name='others'
                        handleChange={handleChange}
                        gridSizeProps={{
                            lg: 12,
                            md: 12,
                            sm: 12
                        }}
                        value={personalDetails.others || ''}
                        displayProperty={personalDetails.knownViaProducts.includes(6) ? { display: 'block' } : { display: 'none' }}
                    />
                </Grid>
            </div>
        </Paper >
    )
}

export default PersonalDetails;