import { apiInstance } from './index';
import * as apiRoutes from './apiRoutes';
import { app_onChange } from '../store/appActions'
import store from '../store/store';

const setLoadingStatus = () => {
    store.dispatch(app_onChange('loadingStatus', true));
}

const removeLoadingStatus = () => {
    store.dispatch(app_onChange('loadingStatus', false));
}



export const getAddressType = async () => {
    setLoadingStatus()
    try {
        const response = await apiInstance.get(apiRoutes.addressType);
        removeLoadingStatus()
        return response;
    }
    catch (err) {
        removeLoadingStatus()
        return err;
    }
}

export const getGender = async () => {
    setLoadingStatus()
    try {
        const response = await apiInstance.get(apiRoutes.gender);
        removeLoadingStatus()
        return response;
    }
    catch (err) {
        removeLoadingStatus()
        return err;
    }
}

export const getLanguages = async () => {
    setLoadingStatus()
    try {
        const response = await apiInstance.get(apiRoutes.languages);
        removeLoadingStatus()
        return response
    }
    catch (err) {

        removeLoadingStatus()
        return err;
    }
}

export const getStates = async () => {
    setLoadingStatus()
    try {
        const response = await apiInstance.get(apiRoutes.states);
        removeLoadingStatus()
        return response
    }
    catch (err) {

        removeLoadingStatus()
        return err;
    }
}

export const getDistricts = async (stateId) => {
    // setLoadingStatus()
    try {
        const response = await apiInstance.get(`${apiRoutes.districts + stateId}`);
        // removeLoadingStatus()
        return response;
    }
    catch (err) {
        // removeLoadingStatus()
        return err;
    }
}

export const getQualificationDetails = async () => {
    setLoadingStatus()
    try {
        const response = await apiInstance.get(apiRoutes.qualification);
        removeLoadingStatus()
        return response;
    }
    catch (err) {
        removeLoadingStatus()
        return err;
    }
}

export const getProfessionalLevel = async () => {
    setLoadingStatus()
    try {
        const response = await apiInstance.get(apiRoutes.professionalLevel);
        removeLoadingStatus()
        return response;
    }
    catch (err) {
        removeLoadingStatus()
        return err;
    }
}

export const getSalaryPerAnnum = async () => {
    setLoadingStatus()
    try {
        const response = await apiInstance.get(apiRoutes.annumSalary);
        removeLoadingStatus()
        return response;
    }
    catch (err) {
        removeLoadingStatus()
        return err;
    }

}

export const getKnownViaProducts = async () => {
    setLoadingStatus()
    try {
        const response = await apiInstance.get(apiRoutes.knownviaproducts);
        removeLoadingStatus()
        return response;
    }
    catch (err) {
        removeLoadingStatus()
        return err;
    }
}

export const getUserRoles = async () => {
    setLoadingStatus()

    try {
        const response = await apiInstance.get(apiRoutes.userRoles);
        removeLoadingStatus()
        return response;
    }
    catch (err) {
        removeLoadingStatus()
        return err;
    }
}



export const getAllUsers = async () => {
    setLoadingStatus()
    try {
        const response = await apiInstance.get(apiRoutes.allUsers);
        removeLoadingStatus()
        return response;

    }
    catch (err) {
        removeLoadingStatus()
        return err;
    }
}

export const createUser = async (user) => {
    setLoadingStatus()
    try {
        const response = await apiInstance.post(apiRoutes.createUsers, {
            ...user
        });
        removeLoadingStatus()
        return response;
    }
    catch (err) {
        removeLoadingStatus()
        return err;
    }
}

export const getUserById = async (editId) => {
    setLoadingStatus()
    try {
        removeLoadingStatus()
        const response = await apiInstance.get(`${apiRoutes.UsersById + editId}`);
        return response;
    }
    catch (err) {
        removeLoadingStatus()
        return err;
    }
}

export const updateUser = async (user, updateId) => {
    try {
        const response = await apiInstance.put(apiRoutes.updateUser + `${updateId}`, { ...user });
        return response;
    }
    catch (err) {
        return err;
    }
}

export const deleteUserById = async (deleteId) => {
    setLoadingStatus()
    try {
        const response = await apiInstance.delete(`${apiRoutes.deleteUserById + deleteId}`);
        removeLoadingStatus()
        return response;
    }
    catch (err) {
        removeLoadingStatus()
        return err;
    }
}











