import React from "react";
import Navbar from "./common/Navbar";
import LicenseList from "./pages/licenseList/LicenseList";
import { Route, Switch, BrowserRouter} from 'react-router-dom';
import { routePath } from '../../src/routePath';
import FormIndex from './pages/index'
import Loader from "./common/Loader";

const Root = () => {

    return (
        <div>
            <Navbar />
            <Loader />
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