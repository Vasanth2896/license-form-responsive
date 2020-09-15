import React from 'react';
import LicenseForm from './LicenseForm';

const FormIndex = (props) => {

  console.log(props);
    
    return (
        <div>
            <LicenseForm {...props}/>
        </div>
    )
}

export default FormIndex;