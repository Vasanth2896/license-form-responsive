import React, { useEffect, useState } from 'react';
import { Table } from "react_custom_table";
import { column } from "./constants";
import '../../../styles/licenseList.scss'
import * as apiAction from '../../../apiConfig/apis'
import { app_onChange } from '../../../store/appActions';
import { useDispatch, useSelector } from 'react-redux';



const LicenseList = (props) => {

    // TODO: have to check whether the data is getting updated when delete request is sent

    const userList = useSelector(state => state.appReducer.userList);
    const dispatch = useDispatch();

    const { history } = props;
    const [state, setState] = useState({
        pageSize: 10,
        currentPage: 1,
        count: 0,
        // selection: [],
        // expandSelection: { parentSelection: [], childSelection: [] },
        columns: column,
        fixedColumns: ['username', 'Mail Id', 'Mobile No', 'Profession', 'Address', 'District', 'State']
    });
    const {
        pageSize,
        count,
        currentPage,
        selection,
        columns,
        fixedColumns,
        searchValue
    } = state;

    useEffect(() => {
        const getData = async () => {
            const { data } = await apiAction.getAllUsers();
            dispatch(app_onChange('userList', data))
        };
        getData();
    }, [dispatch]);



    return (
        <div style={{ padding: '0px 25px' }}>
            <Table
                columns={columns}
                fixedColumns={fixedColumns}
                data={userList}
                selectedClassNames="selectedParent"
                selectedBackground="rgba(121, 126, 209, 0.2)"
                manual={false}
                LoadingComponent={<div>There is no data found</div>}
                tableTitle="Employee List"
                addNewButtonProps={{
                    onClick: () => history.push('/layout/personalDetails')
                }}
                paginationProps={{
                    totalCount: userList.length,
                    pageSize: pageSize,
                    currentPage: currentPage,
                    // onPageNumberChange: (pageNumber) => { setState({ ...state, currentPage: pageNumber }) },
                    // onChangePageSize: (pageSize) => { setState({ ...state, pageSize: pageSize,currentPage: 1 }) }
                }}
                showTableControls={true}
            />

        </div>
    )
}

export default LicenseList;