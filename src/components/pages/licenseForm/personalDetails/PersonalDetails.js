import React, { useEffect, useState } from 'react';
import { Paper, Grid } from '@material-ui/core';
import GridInputText from '../../../common/GridInputText';
import GridInputSelect from '../../../common/GridInputSelect';
import GridAutoComplete from '../../../common/GridAutoComplete';
import GridDate from '../../../common/GridDate';
import * as apiAction from '../../../../apiConfig/apis';
import Gender from './Gender';
import ProductKnowledge from './ProductKnowledge';

const PersonalDetails = () => {

    const [personalDetailsSeed, setPersonalDetailSeed] = useState({});

    useEffect(() => {
        const getPersonalDetailsSeed = async () => {
            const genderData = await apiAction.getGender();
            const languagesData = await apiAction.getLanguages();
            const knowledgeSeedData = await apiAction.getKnownViaProducts();
            const seedHolder = {
                gender: genderData.data,
                language: languagesData.data,
                knowledgeSeed: knowledgeSeedData.data,
            }
            setPersonalDetailSeed({ ...seedHolder });
        }
        getPersonalDetailsSeed();
    }, []);


    return (
        <Paper style={{ background: '#8080801f', height: 'auto' }} elevation={2}>
            <div style={{ padding: '25px 40px 25px 40px' }}>
                <Grid container item lg={12} spacing={3}>
                    <GridInputText
                        label='User name'
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6
                        }}
                    />
                    <Grid item lg={6} md={6} sm={6}>
                        <Gender
                            genderList={personalDetailsSeed.gender}
                        />
                    </Grid>
                    <GridDate
                        label='Date Of Birth'
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6
                        }}
                    />
                    <GridInputText
                        label='Age'
                        fieldType='number'
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6
                        }}
                    />
                    <GridInputText
                        label='Mail id'
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6
                        }}
                    />
                    <GridInputText
                        label='Mobile Number'
                        fieldType='number'
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6
                        }}
                    />
                    <GridInputSelect
                        label='Mother Tongue'
                        gridSizeProps={{
                            lg: 6,
                            md: 6,
                            sm: 6
                        }}
                    />
                    <GridAutoComplete
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
                        // personalDetails={personalDetails}
                        // onChange={onChange}
                        // formGroupClassName={classes.feedbackCheckboxContainer}
                        />
                    </Grid>
                    <GridInputText
                        label='Other'
                        gridSizeProps={{
                            lg: 12,
                            md: 12,
                            sm: 12
                        }}
                    />
                </Grid>
            </div>
        </Paper >
    )
}

export default PersonalDetails;