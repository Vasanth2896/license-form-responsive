import React from 'react';
import Actions from "./Actions";


export const column = [
    {
        Header: 'username',
        id: 'name',
        accessor: user => user.name
    },
    {
        Header: 'Mail Id',
        id: 'mailId',
        accessor: user => user.mailId
    },
    {
        Header: 'Mobile No',
        id: 'mobileNumber',
        accessor: user => user.mob
    },
    {
        Header: 'Profession',
        id: 'profession',
        accessor: user => user.userRole
    },
    {
        Header: 'Address',
        id: 'address',
        accessor: user => user.address
    },
    {
        Header: 'District',
        id: 'district',
        accessor: user => user.district
    },
    {
        Header: 'State',
        id: 'state',
        accessor: user => user.state
    },
    {
        Header: 'Actions',
        accessor: 'Actions',
        Cell: (row) => {
            return (
                <Actions
                    original={row.original}
                    row={row}
                />
            )
        },
        width: 120,
        resizable: false,
        sortable: false
    }
]