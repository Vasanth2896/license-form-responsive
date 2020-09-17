import * as apiAction from "../apiConfig/apis";
export const UPDATE_STATE = "UPDATE_STATE";

export const initialState = {
    editId: null,
    userList: [],
    user: {},
    loadingStatus: false,
    apiError: false
}

export function app_onChange(name, value) {
    return { type: UPDATE_STATE, payload: { name: name, value: value } };
}

export function onSave() {
    return (dispatch, getState) => {
        const { user, editId } = getState().appReducer;
        let newUser = { ...user };
        for (let item in newUser) {
            if (newUser[item] === null) {
                newUser[item] = ''
            }
        }
        console.log(newUser);
        
        // if (editId !== null) {
        //     apiAction.updateUser(user, editId);
        // }
        // else {
        //     apiAction.createUser(user);
        // }
        // dispatch(onCancel());
    }
}

export function onCancel() {
    return (dispatch) => {
        dispatch(app_onChange('user', {}));
        dispatch(app_onChange('editId', null));
    }
}


export function onDelete(deleteUser) {
    return (dispatch, getState) => {
        const { userList } = getState().appReducer;
        apiAction.deleteUserById(deleteUser.id);
        const newUserList = userList.filter(user => deleteUser.id !== user.id);
        dispatch(app_onChange('userList', newUserList));
    }
}

export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_STATE:
            return { ...state, [action.payload.name]: action.payload.value };
        default:
            return state;
    }
};