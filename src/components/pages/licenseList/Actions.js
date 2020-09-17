import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Menu, MenuItem } from "@material-ui/core";
import { routePath } from '../../../routePath';
import { useHistory } from 'react-router';
import '../../../styles/licenseList.scss';
import * as apiAction from '../../../apiConfig/apis'
import { app_onChange, onDelete } from '../../../store/appActions';
import { useDispatch, useSelector } from 'react-redux';


const Action = (props) => {

    const dispatch = useDispatch();
    const { original, row } = props;
    const history = useHistory();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleEdit = async () => {
        const { data } = await apiAction.getUserById(original.id);
        const removeProperty = ({ addressDetails, qualificationDetails, ...rest }) => rest;
        const personalDetails = removeProperty(data);
        const { addressDetails, qualificationDetails } = data
        const user = { personalDetails, addressDetails, qualificationDetails };
        await dispatch(app_onChange('user',user));
        await dispatch(app_onChange('editId',original.id));
        history.push(routePath.PERSONAL_DETAILS);
        handleClose();
    }

    const handleDelete = () => {
        dispatch(onDelete(original));
        handleClose();
    }

    return (
        <div className='actionsContainer' >
            <FontAwesomeIcon
                icon={faEllipsisH}
                onClick={handleClick}
            />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleEdit}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
            </Menu>

        </div>
    )
}

export default Action;