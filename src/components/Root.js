import React from "react";
import Navbar from "./common/Navbar";
import Layout from './pages/Layout';
import LicenseList from "./pages/licenseList/LicenseList";
import PersonalDetails from "./pages/licenseForm/personalDetails/PersonalDetails";
import AddressDetails from "./pages/licenseForm/AddressDetails";
import ProfessionalDetails from './pages/licenseForm/professionalDetails/ProfessionalDetails';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { routePath } from '../../src/routePath';

const Root = () => {

    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path={routePath.LICENSE_LIST} component={LicenseList} />
                    <Layout>
                        <Redirect to={routePath.PERSONAL_DETAILS} />
                        <Route path={routePath.PERSONAL_DETAILS} component={PersonalDetails} />
                        <Route path={routePath.ADDRESS_DETAILS} component={AddressDetails} />
                        <Route path={routePath.PROFESSIONAL_DETAILS} component={ProfessionalDetails} />
                    </Layout>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default Root