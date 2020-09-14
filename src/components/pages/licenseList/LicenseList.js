import React from 'react';
import { Table } from "react_custom_table";
import '../../../styles/licenseList.scss'


const LicenseList = (props) => {

    const { history } = props;

    return (
        <div>
            <Table
                addNewButtonProps={{
                    onClick: () => history.push('/layout/personalDetails')
                }}
            />
        </div>
    )
}

export default LicenseList;