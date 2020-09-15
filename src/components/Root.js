import React from "react";
import Navbar from "./common/Navbar";
import LicenseList from "./pages/licenseList/LicenseList";
import PersonalDetails from "./pages/licenseForm/personalDetails/PersonalDetails";
import AddressDetails from "./pages/licenseForm/AddressDetails";
import ProfessionalDetails from './pages/licenseForm/professionalDetails/ProfessionalDetails';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import { routePath } from '../../src/routePath';
import FormIndex from './pages/index'

const Root = () => {

    return (
        <div>
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path={routePath.LICENSE_LIST} component={LicenseList} />
                    <Route path='/layout/:name' component={FormIndex} />
                </Switch>
            </BrowserRouter>
        </div >
    )
}

export default Root