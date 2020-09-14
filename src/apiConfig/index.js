import axios from 'axios';


export const apiInstance = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        Accept: "application/json"
    },
    responseType: 'json'
});




apiInstance.interceptors.response.use(response => {
    console.log(response);
    return response;
},
    error => {
        return Promise.reject(error);
    });

